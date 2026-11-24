
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
  throw new Error("File index.html tidak ditemukan.");
}

fs.rmSync(FRAMES, { recursive: true, force: true });
fs.mkdirSync(FRAMES, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: WIDTH, height: HEIGHT },
  deviceScaleFactor: 1
});

await page.goto(pathToFileURL(INPUT).href);
await page.waitForTimeout(1000);

const duration = await page.evaluate(() => window.duration);

if (!Number.isFinite(duration) || duration <= 0) {
  throw new Error("window.duration tidak ditemukan atau tidak valid.");
}

const renderAtExists = await page.evaluate(
  () => typeof window.renderAt === "function"
);

if (!renderAtExists) {
  throw new Error("Fungsi window.renderAt tidak ditemukan.");
}

const totalFrames = Math.ceil(duration * FPS);

for (let i = 0; i < totalFrames; i++) {
  const time = i / FPS;

  await page.evaluate(async (t) => {
    await window.renderAt(t);
    await new Promise(requestAnimationFrame);
  }, time);

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
  throw new Error("Proses encoding MP4 gagal.");
}

console.log("Video berhasil dibuat:", OUTPUT);
