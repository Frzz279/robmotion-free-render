
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";
import { chromium } from "playwright";

const FPS = 30;
const WIDTH = 1080;
const HEIGHT = 1920;
const INPUT = path.resolve("index.html");
const OUTPUT = path.resolve("output.mp4");
const FRAMES = path.resolve("frames");

if (!fs.existsSync(INPUT)) {
  throw new Error("index.html tidak ditemukan");
}

fs.rmSync(FRAMES, { recursive: true, force: true });
fs.mkdirSync(FRAMES, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  args: [
    "--no-sandbox",
    "--enable-webgl",
    "--use-gl=angle",
    "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader"
  ]
});

const page = await browser.newPage({
  viewport: { width: WIDTH, height: HEIGHT },
  deviceScaleFactor: 1
});

page.on("console", msg => {
  if (msg.type() === "error") console.error(msg.text());
});

await page.goto(pathToFileURL(INPUT).href, {
  waitUntil: "networkidle",
  timeout: 60000
});

await page.waitForFunction(
  () => typeof window.renderAt === "function"
    && Number.isFinite(window.duration),
  { timeout: 60000 }
);

const duration = await page.evaluate(() => window.duration);
const totalFrames = Math.ceil(duration * FPS);

for (let i = 0; i < totalFrames; i++) {
  await page.evaluate(async time => {
    await window.renderAt(time);
  }, i / FPS);

  await page.screenshot({
    path: path.join(
      FRAMES,
      `frame-${String(i).padStart(6, "0")}.png`
    )
  });
}

await browser.close();

const result = spawnSync("ffmpeg", [
  "-y",
  "-framerate", String(FPS),
  "-i", path.join(FRAMES, "frame-%06d.png"),
  "-c:v", "libx264",
  "-pix_fmt", "yuv420p",
  "-movflags", "+faststart",
  OUTPUT
], { stdio: "inherit" });

if (result.status !== 0) {
  throw new Error("Gagal membuat MP4");
}

console.log("Berhasil:", OUTPUT);
