// ─── Templates Registry ───
const TEMPLATES = {
  "geo-ghost-border": {
    name: "Ghost Border",
    prefix: "geo-ghost-border",
    items: [
      {
        key: "intro",
        filename: "geo-ghost-border_intro.mp3",
        text: "Hey guys, welcome back. We have a bit of trivia for you today and I just want to see how well you know the places around the world.",
      },
      {
        key: "q0",
        filename: "geo-ghost-border_q0.mp3",
        text: "Guess the country just from its border shape, first round.",
      },
      {
        key: "a0",
        filename: "geo-ghost-border_a0.mp3",
        text: "Yup that's Togo, just fifty kilometers wide.",
      },
      {
        key: "q1",
        filename: "geo-ghost-border_q1.mp3",
        text: "Next round, can you spot this long curved country?",
      },
      {
        key: "a1",
        filename: "geo-ghost-border_a1.mp3",
        text: "That's Malawi, known as the Warm Heart of Africa.",
      },
      {
        key: "q2",
        filename: "geo-ghost-border_q2.mp3",
        text: "Moving north, which Horn of Africa nation is this?",
      },
      {
        key: "a2",
        filename: "geo-ghost-border_a2.mp3",
        text: "You're looking at Djibouti, guarding the Red Sea.",
      },
      {
        key: "q3",
        filename: "geo-ghost-border_q3.mp3",
        text: "Getting tougher now, name this nation.",
      },
      {
        key: "a3",
        filename: "geo-ghost-border_a3.mp3",
        text: "It's Namibia, home to Earth's oldest desert.",
      },
      {
        key: "q4",
        filename: "geo-ghost-border_q4.mp3",
        text: "Probably the hardest one, can you spot this country?",
      },
      {
        key: "a4",
        filename: "geo-ghost-border_a4.mp3",
        text: "Drop your answer in the comments below and follow for more!",
      },
    ],
  },
  "geo-zoom-out-country": {
    name: "Zoom Out",
    prefix: "geo-zoom-out-country",
    items: [
      {
        key: "q0",
        filename: "geo-zoom-out-country_q0.mp3",
        text: "Name this country in,",
      },
      {
        key: "a0",
        filename: "geo-zoom-out-country_a0.mp3",
        text: "Sri Lanka, the pearl of the Indian Ocean.",
      },
      {
        key: "q1",
        filename: "geo-zoom-out-country_q1.mp3",
        text: "Name this nation in,",
      },
      {
        key: "a1",
        filename: "geo-zoom-out-country_a1.mp3",
        text: "Iceland, isolated in the North Atlantic.",
      },
      {
        key: "q2",
        filename: "geo-zoom-out-country_q2.mp3",
        text: "Spot this country in,",
      },
      {
        key: "a2",
        filename: "geo-zoom-out-country_a2.mp3",
        text: "Oman, guarding the Arabian Sea.",
      },
      {
        key: "q3",
        filename: "geo-zoom-out-country_q3.mp3",
        text: "Name this landlocked country in,",
      },
      {
        key: "a3",
        filename: "geo-zoom-out-country_a3.mp3",
        text: "Paraguay, right in the heart of South America.",
      },
      {
        key: "q4",
        filename: "geo-zoom-out-country_q4.mp3",
        text: "Final mystery round, name this country in,",
      },
      {
        key: "a4",
        filename: "geo-zoom-out-country_a4.mp3",
        text: "Drop your answer in the comments below!",
      },
    ],
  },
  "geo-flag-puzzle": {
    name: "Flag Puzzle",
    prefix: "geo-flag-puzzle",
    items: [
      {
        key: "q0",
        filename: "geo-flag-puzzle_q0.mp3",
        text: "Triple colored stripes across a rich green field. Can you identify this island?",
      },
      {
        key: "a0",
        filename: "geo-flag-puzzle_a0.mp3",
        text: "Dominica, known for the rare purple Sisserou parrot.",
      },
      {
        key: "q1",
        filename: "geo-flag-puzzle_q1.mp3",
        text: "A distinctive gold ornamental pattern against sky blue. Name this giant nation!",
      },
      {
        key: "a1",
        filename: "geo-flag-puzzle_a1.mp3",
        text: "Kazakhstan, with the soaring steppe eagle beneath the sun.",
      },
      {
        key: "q2",
        filename: "geo-flag-puzzle_q2.mp3",
        text: "Green, yellow, and blue stripes with a white diamond. Which country is this?",
      },
      {
        key: "a2",
        filename: "geo-flag-puzzle_a2.mp3",
        text: "Saint Vincent and the Grenadines, nestled in the Caribbean.",
      },
      {
        key: "q3",
        filename: "geo-flag-puzzle_q3.mp3",
        text: "A fierce red dragon emblazoned on green and white. Spot this nation!",
      },
      {
        key: "a3",
        filename: "geo-flag-puzzle_a3.mp3",
        text: "Wales, famous for its ancient castles and rugged coastline.",
      },
      {
        key: "q4",
        filename: "geo-flag-puzzle_q4.mp3",
        text: "Mystery flag round! Can you identify this national symbol?",
      },
      {
        key: "a4",
        filename: "geo-flag-puzzle_a4.mp3",
        text: "Drop your guess in the comments below!",
      },
    ],
  },
  "custom": {
    name: "Custom",
    prefix: "custom-voice",
    items: [
      {
        key: "q0",
        filename: "custom-voice_01.mp3",
        text: "Type or read your first line here...",
      },
      {
        key: "q1",
        filename: "custom-voice_02.mp3",
        text: "Type or read your second line here...",
      },
      {
        key: "q2",
        filename: "custom-voice_03.mp3",
        text: "Type or read your third line here...",
      },
    ],
  },
};

// ─── IndexedDB Storage ───
const DB_NAME = "GeoVoiceStudioDB";
const DB_VERSION = 1;
const STORE_NAME = "clips";

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveClip(templateId, key, blob, duration) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const id = `${templateId}_${key}`;
    store.put({ id, templateId, key, blob, duration, updatedAt: Date.now() });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function getAllClipsForTemplate(templateId) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const req = store.getAll();
    req.onsuccess = () => {
      const all = req.result || [];
      const filtered = all.filter((item) => item.templateId === templateId);
      resolve(filtered);
    };
    req.onerror = () => reject(req.error);
  });
}

async function deleteClip(templateId, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const id = `${templateId}_${key}`;
    store.delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function clearTemplateClips(templateId) {
  const clips = await getAllClipsForTemplate(templateId);
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    clips.forEach((c) => store.delete(c.id));
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// ─── Recording State ───
let mediaStream = null;
let audioContext = null;
let audioInput = null;
let scriptProcessor = null;
let analyserNode = null;
let pcmChunks = [];
let isRecording = false;
let recordStartTime = 0;
let timerInterval = null;
let animationFrameId = null;

// UI Elements
const templateSelector = document.getElementById("templateSelector");
const templateNameDisplay = document.getElementById("templateNameDisplay");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const stepIndicator = document.getElementById("stepIndicator");
const prompterText = document.getElementById("prompterText");
const filenameCode = document.getElementById("filenameCode");
const waveformCanvas = document.getElementById("waveformCanvas");
const timerDisplay = document.getElementById("timerDisplay");
const recordBtn = document.getElementById("recordBtn");
const recordBtnIcon = document.getElementById("recordBtnIcon");
const audioPreviewCard = document.getElementById("audioPreviewCard");
const audioPreviewPlayer = document.getElementById("audioPreviewPlayer");
const retakeBtn = document.getElementById("retakeBtn");
const downloadSingleBtn = document.getElementById("downloadSingleBtn");
const downloadZipBtn = document.getElementById("downloadZipBtn");
const downloadZipBtnText = document.getElementById("downloadZipBtnText");
const clearAllBtn = document.getElementById("clearAllBtn");
const toastContainer = document.getElementById("toastContainer");

// App State
let currentTemplateId = "geo-ghost-border";
let currentIndex = 0;
let cachedClips = {};

// ─── Toast System ───
function showToast(msg, icon = "check") {
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<i data-lucide="${icon}" style="width: 15px; height: 15px;"></i><span>${msg}</span>`;
  toastContainer.appendChild(el);
  lucide.createIcons({ root: el });
  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transition = "opacity 0.25s";
    setTimeout(() => el.remove(), 250);
  }, 2200);
}

// ─── Audio Recording Functions ───
async function startRecording() {
  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
    });

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContextClass({ sampleRate: 44100 });
    audioInput = audioContext.createMediaStreamSource(mediaStream);
    analyserNode = audioContext.createAnalyser();
    analyserNode.fftSize = 256;

    scriptProcessor = audioContext.createScriptProcessor(4096, 1, 1);
    pcmChunks = [];

    scriptProcessor.onaudioprocess = (e) => {
      if (!isRecording) return;
      const inputData = e.inputBuffer.getChannelData(0);
      pcmChunks.push(new Float32Array(inputData));
    };

    audioInput.connect(analyserNode);
    analyserNode.connect(scriptProcessor);
    scriptProcessor.connect(audioContext.destination);

    isRecording = true;
    recordStartTime = Date.now();

    // UI Updates
    recordBtn.classList.add("recording");
    timerDisplay.classList.add("recording");
    recordBtnIcon.setAttribute("data-lucide", "square");
    lucide.createIcons({ root: recordBtn });

    // Start Timer
    timerInterval = setInterval(() => {
      const elapsed = (Date.now() - recordStartTime) / 1000;
      const mins = Math.floor(elapsed / 60).toString().padStart(2, "0");
      const secs = (elapsed % 60).toFixed(1).padStart(4, "0");
      timerDisplay.textContent = `${mins}:${secs}`;
    }, 100);

    drawWaveform();
  } catch (err) {
    console.error("Mic Access Error:", err);
    showToast("Please grant microphone permissions!", "alert-circle");
  }
}

async function stopRecording() {
  if (!isRecording) return;
  isRecording = false;

  clearInterval(timerInterval);
  cancelAnimationFrame(animationFrameId);

  recordBtn.classList.remove("recording");
  timerDisplay.classList.remove("recording");
  recordBtnIcon.setAttribute("data-lucide", "mic");
  lucide.createIcons({ root: recordBtn });

  const durationSec = (Date.now() - recordStartTime) / 1000;

  if (mediaStream) {
    mediaStream.getTracks().forEach((track) => track.stop());
  }
  if (scriptProcessor) scriptProcessor.disconnect();
  if (audioInput) audioInput.disconnect();
  if (analyserNode) analyserNode.disconnect();
  if (audioContext && audioContext.state !== "closed") audioContext.close();

  clearWaveform();

  let totalLength = 0;
  for (const chunk of pcmChunks) totalLength += chunk.length;
  const mergedFloat = new Float32Array(totalLength);
  let offset = 0;
  for (const chunk of pcmChunks) {
    mergedFloat.set(chunk, offset);
    offset += chunk.length;
  }

  let audioBlob;
  try {
    audioBlob = encodePCMToMp3(mergedFloat, 44100);
  } catch (err) {
    console.warn("lamejs fallback to WAV:", err);
    audioBlob = encodePCMToWav(mergedFloat, 44100);
  }

  const currentItem = getCurrentItem();
  await saveClip(currentTemplateId, currentItem.key, audioBlob, durationSec);
  cachedClips[currentItem.key] = { blob: audioBlob, duration: durationSec };

  showToast(`Saved (${durationSec.toFixed(1)}s)`);
  updateUI();
}

function encodePCMToMp3(floatSamples, sampleRate) {
  if (typeof lamejs === "undefined") {
    throw new Error("lamejs not loaded");
  }

  const int16Samples = new Int16Array(floatSamples.length);
  for (let i = 0; i < floatSamples.length; i++) {
    const s = Math.max(-1, Math.min(1, floatSamples[i]));
    int16Samples[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }

  const mp3encoder = new lamejs.Mp3Encoder(1, sampleRate, 160);
  const mp3Data = [];
  const chunkSize = 1152;

  for (let i = 0; i < int16Samples.length; i += chunkSize) {
    const chunk = int16Samples.subarray(i, i + chunkSize);
    const mp3buf = mp3encoder.encodeBuffer(chunk);
    if (mp3buf.length > 0) mp3Data.push(mp3buf);
  }

  const mp3buf = mp3encoder.flush();
  if (mp3buf.length > 0) mp3Data.push(mp3buf);

  return new Blob(mp3Data, { type: "audio/mp3" });
}

function encodePCMToWav(floatSamples, sampleRate) {
  const buffer = new ArrayBuffer(44 + floatSamples.length * 2);
  const view = new DataView(buffer);

  function writeString(offset, string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  writeString(0, "RIFF");
  view.setUint32(4, 36 + floatSamples.length * 2, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(36, "data");
  view.setUint32(40, floatSamples.length * 2, true);

  let offset = 44;
  for (let i = 0; i < floatSamples.length; i++, offset += 2) {
    const s = Math.max(-1, Math.min(1, floatSamples[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }

  return new Blob([view], { type: "audio/wav" });
}

// ─── Waveform Visualizer ───
function drawWaveform() {
  if (!isRecording || !analyserNode) return;
  animationFrameId = requestAnimationFrame(drawWaveform);

  const bufferLength = analyserNode.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  analyserNode.getByteTimeDomainData(dataArray);

  const ctx = waveformCanvas.getContext("2d");
  const width = waveformCanvas.width;
  const height = waveformCanvas.height;

  ctx.fillStyle = "rgba(15, 23, 42, 0.4)";
  ctx.fillRect(0, 0, width, height);

  ctx.lineWidth = 2.5;
  ctx.strokeStyle = "#f43f5e";
  ctx.beginPath();

  const sliceWidth = width / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0;
    const y = (v * height) / 2;

    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);

    x += sliceWidth;
  }

  ctx.lineTo(width, height / 2);
  ctx.stroke();
}

function clearWaveform() {
  const ctx = waveformCanvas.getContext("2d");
  ctx.fillStyle = "rgba(15, 23, 42, 0.6)";
  ctx.fillRect(0, 0, waveformCanvas.width, waveformCanvas.height);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, waveformCanvas.height / 2);
  ctx.lineTo(waveformCanvas.width, waveformCanvas.height / 2);
  ctx.stroke();
}

// ─── State Helpers ───
function getCurrentTemplate() {
  return TEMPLATES[currentTemplateId] || TEMPLATES["geo-ghost-border"];
}

function getCurrentItem() {
  const tmpl = getCurrentTemplate();
  return tmpl.items[currentIndex] || tmpl.items[0];
}

async function loadClipsForTemplate() {
  const clips = await getAllClipsForTemplate(currentTemplateId);
  cachedClips = {};
  clips.forEach((c) => {
    cachedClips[c.key] = { blob: c.blob, duration: c.duration };
  });
}

function updateUI() {
  const tmpl = getCurrentTemplate();
  const item = getCurrentItem();
  const recordedCount = tmpl.items.filter((it) => cachedClips[it.key]).length;
  const totalCount = tmpl.items.length;

  // Header & Progress
  templateNameDisplay.textContent = tmpl.name;
  progressText.textContent = `${recordedCount} / ${totalCount}`;
  const pct = Math.round((recordedCount / totalCount) * 100);
  progressFill.style.width = `${pct}%`;

  // Prompter Nav
  stepIndicator.textContent = `${currentIndex + 1} / ${totalCount}`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === totalCount - 1;

  prompterText.textContent = item.text;
  filenameCode.textContent = item.filename;

  // Audio Player Preview
  const recorded = cachedClips[item.key];
  if (recorded) {
    audioPreviewCard.style.display = "flex";
    const audioUrl = URL.createObjectURL(recorded.blob);
    audioPreviewPlayer.src = audioUrl;
  } else {
    audioPreviewCard.style.display = "none";
    audioPreviewPlayer.removeAttribute("src");
  }

  // Clean Download Button text
  if (recordedCount > 0) {
    downloadZipBtn.disabled = false;
    downloadZipBtnText.textContent = `Download (${recordedCount} ${recordedCount === 1 ? "clip" : "clips"})`;
  } else {
    downloadZipBtn.disabled = true;
    downloadZipBtnText.textContent = "Download";
  }

  lucide.createIcons();
}

// ─── Export ZIP (JSZip) ───
async function exportZip() {
  const tmpl = getCurrentTemplate();
  const recordedItems = tmpl.items.filter((it) => cachedClips[it.key]);

  if (recordedItems.length === 0) return;

  showToast("Packaging ZIP...", "loader");
  const zip = new JSZip();

  for (const it of recordedItems) {
    const clip = cachedClips[it.key];
    zip.file(it.filename, clip.blob);
  }

  const manifest = {
    template: tmpl.name,
    prefix: tmpl.prefix,
    exportedAt: new Date().toISOString(),
    totalClips: recordedItems.length,
    clips: recordedItems.map((it) => ({
      key: it.key,
      filename: it.filename,
      durationSec: cachedClips[it.key].duration,
      text: it.text,
    })),
  };
  zip.file("manifest.json", JSON.stringify(manifest, null, 2));

  const content = await zip.generateAsync({ type: "blob" });
  const downloadUrl = URL.createObjectURL(content);
  const a = document.createElement("a");
  a.href = downloadUrl;
  a.download = `${tmpl.prefix}-voice.zip`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(downloadUrl);

  showToast(`Downloaded ${recordedItems.length} clips!`, "check-circle-2");
}

// ─── Event Listeners ───
recordBtn.addEventListener("click", () => {
  if (!isRecording) startRecording();
  else stopRecording();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateUI();
  }
});

nextBtn.addEventListener("click", () => {
  const tmpl = getCurrentTemplate();
  if (currentIndex < tmpl.items.length - 1) {
    currentIndex++;
    updateUI();
  }
});

templateSelector.addEventListener("change", async (e) => {
  currentTemplateId = e.target.value;
  currentIndex = 0;
  await loadClipsForTemplate();
  updateUI();
});

retakeBtn.addEventListener("click", async () => {
  const item = getCurrentItem();
  await deleteClip(currentTemplateId, item.key);
  delete cachedClips[item.key];
  showToast("Cleared take. Ready to re-record!");
  updateUI();
});

downloadSingleBtn.addEventListener("click", () => {
  const item = getCurrentItem();
  const clip = cachedClips[item.key];
  if (!clip) return;
  const a = document.createElement("a");
  a.href = URL.createObjectURL(clip.blob);
  a.download = item.filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
});

downloadZipBtn.addEventListener("click", exportZip);

clearAllBtn.addEventListener("click", async () => {
  const tmpl = getCurrentTemplate();
  if (confirm(`Reset all recordings for "${tmpl.name}"?`)) {
    await clearTemplateClips(currentTemplateId);
    cachedClips = {};
    showToast("Recordings reset");
    updateUI();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
    e.preventDefault();
    if (!isRecording) startRecording();
    else stopRecording();
  } else if (e.code === "ArrowRight") {
    nextBtn.click();
  } else if (e.code === "ArrowLeft") {
    prevBtn.click();
  }
});

function setupCanvas() {
  const rect = waveformCanvas.getBoundingClientRect();
  waveformCanvas.width = rect.width * window.devicePixelRatio;
  waveformCanvas.height = rect.height * window.devicePixelRatio;
  clearWaveform();
}

async function init() {
  setupCanvas();
  window.addEventListener("resize", setupCanvas);
  await loadClipsForTemplate();
  updateUI();
  lucide.createIcons();
}

window.addEventListener("DOMContentLoaded", init);
