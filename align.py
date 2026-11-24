import sys, json
from faster_whisper import WhisperModel
f = sys.argv[1]
lang = None if len(sys.argv) < 3 or sys.argv[2] in ("", "auto") else sys.argv[2]
model = WhisperModel("small", device="cpu", compute_type="int8")
segs, info = model.transcribe(f, language=lang, word_timestamps=True, vad_filter=True)
words = [{"w": w.word.strip(), "s": round(w.start, 3), "e": round(w.end, 3)}
         for s in segs for w in s.words]
open("timing.js", "w", encoding="utf-8").write(
    "window.TIMING=" + json.dumps(words, ensure_ascii=False) +
    ";window.AUDIO_DUR=" + str(round(info.duration, 3)) + ";")
print(len(words), "kata terdeteksi")
