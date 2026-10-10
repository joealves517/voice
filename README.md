# 🎙️ Voice Studio - Teleprompter & Voice Recorder

Professional teleprompter voice recorder app built specifically for **Geo Trivia X** (Remotion).

Designed to run seamlessly as a static web app on **GitHub Pages**, fully mobile-responsive (iPhone & Android), supporting line-by-line teleprompter recording with one-click **ZIP voice package export** in standard MP3 format.

---

## ✨ Key Features
1. **Teleprompter Step-by-Step Cards**:
   - Ultra-legible high-contrast typography, tagged with `[QUESTION Qx]`, `[ANSWER Ax]`, and `[INTRO HOOK]`.
   - Built-in inflection cues (💡 Curious, energetic, authoritative...).
   - Displays target Remotion audio filenames (e.g., `geo-ghost-border_q0.mp3`).
2. **One-Tap Recording & Real-Time Waveform**:
   - Tap Mic -> Live audio waveform tracks your speech in real time.
   - Tap Stop -> Encodes immediately into **MP3 (160 kbps, 44.1kHz)** in-browser via `lamejs`.
   - Instant audio player preview with re-record button if you stumble.
3. **Safe Device Persistence (IndexedDB)**:
   - All recorded clips are stored locally on device. Page reloads or screen locks never lose recorded takes.
4. **One-Click Voice Pack Export (JSZip)**:
   - Tap **"Download Voice Pack (.zip)"** to bundle all takes into a single ZIP archive.
   - Includes a `manifest.json` describing line texts and durations.

---

## 🚀 Live URL

```
https://joealves517.github.io/voice/
```

Repository:
```
https://github.com/joealves517/voice
```

---

## 📥 How to sync into Remotion

1. Complete the recording takes on your phone and tap **"Download Voice Pack (.zip)"**.
2. Unzip the downloaded file.
3. Copy all extracted `.mp3` files directly into:
   ```bash
   Geo Trivia X/remotion/public/audio/tts/
   ```
4. Open Remotion Studio ([http://localhost:3000/GeoGhostBorder](http://localhost:3000/GeoGhostBorder)) to inspect your video with the new voiceover!
