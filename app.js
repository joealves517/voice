// ─── Templates Registry ───
const TEMPLATES = {
  "geo-ghost-border": {
    name: "Geo Ghost Border",
    prefix: "geo-ghost-border",
    items: [
      {
        key: "intro",
        type: "intro",
        badge: "LỜI DẪN (INTRO)",
        hint: "Đọc hào hứng, mở đầu video lôi cuốn",
        filename: "geo-ghost-border_intro.mp3",
        text: "Hey guys, welcome back. We have a bit of trivia for you today and I just want to see how well you know the places around the world.",
      },
      {
        key: "q0",
        type: "q",
        badge: "CÂU HỎI Q0 (TOGO)",
        hint: "Đọc tò mò, thách đố người xem",
        filename: "geo-ghost-border_q0.mp3",
        text: "Guess the country just from its border shape, first round.",
      },
      {
        key: "a0",
        type: "a",
        badge: "ĐÁP ÁN A0 (TOGO)",
        hint: "Đọc khẳng định, giải tỏa bất ngờ",
        filename: "geo-ghost-border_a0.mp3",
        text: "Yup that's Togo, just fifty kilometers wide.",
      },
      {
        key: "q1",
        type: "q",
        badge: "CÂU HỎI Q1 (MALAWI)",
        hint: "Tăng nhịp điệu hào hứng",
        filename: "geo-ghost-border_q1.mp3",
        text: "Next round, can you spot this long curved country?",
      },
      {
        key: "a1",
        type: "a",
        badge: "ĐÁP ÁN A1 (MALAWI)",
        hint: "Ấm áp, chia sẻ sự thật thú vị",
        filename: "geo-ghost-border_a1.mp3",
        text: "That's Malawi, known as the Warm Heart of Africa.",
      },
      {
        key: "q2",
        type: "q",
        badge: "CÂU HỎI Q2 (DJIBOUTI)",
        hint: "Đọc thách đố, chuyển cảnh phương Bắc",
        filename: "geo-ghost-border_q2.mp3",
        text: "Moving north, which Horn of Africa nation is this?",
      },
      {
        key: "a2",
        type: "a",
        badge: "ĐÁP ÁN A2 (DJIBOUTI)",
        hint: "Dứt khoát, ấn tượng",
        filename: "geo-ghost-border_a2.mp3",
        text: "You're looking at Djibouti, guarding the Red Sea.",
      },
      {
        key: "q3",
        type: "q",
        badge: "CÂU HỎI Q3 (NAMIBIA)",
        hint: "Tạo cảm giác độ khó đang tăng dần",
        filename: "geo-ghost-border_q3.mp3",
        text: "Getting tougher now, name this nation.",
      },
      {
        key: "a3",
        type: "a",
        badge: "ĐÁP ÁN A3 (NAMIBIA)",
        hint: "Ngạc nhiên, hùng vĩ",
        filename: "geo-ghost-border_a3.mp3",
        text: "It's Namibia, home to Earth's oldest desert.",
      },
      {
        key: "q4",
        type: "q",
        badge: "CÂU HỎI Q4 (TIMOR-LESTE)",
        hint: "Đỉnh điểm kịch tính, câu hỏi bí ẩn",
        filename: "geo-ghost-border_q4.mp3",
        text: "Probably the hardest one, can you spot this country?",
      },
      {
        key: "a4",
        type: "a",
        badge: "KẾT VIDEO A4 (CALL TO ACTION)",
        hint: "Kêu gọi bình luận và đăng ký kênh",
        filename: "geo-ghost-border_a4.mp3",
        text: "Drop your answer in the comments below and follow for more!",
      },
    ],
  },
  "geo-zoom-out-country": {
    name: "Geo Zoom Out Country",
    prefix: "geo-zoom-out-country",
    items: [
      {
        key: "q0",
        type: "q",
        badge: "CÂU HỎI Q0 (SRI LANKA)",
        hint: "Đọc nhịp nhàng chuẩn bị đếm ngược",
        filename: "geo-zoom-out-country_q0.mp3",
        text: "Name this country in,",
      },
      {
        key: "a0",
        type: "a",
        badge: "ĐÁP ÁN A0 (SRI LANKA)",
        hint: "Tươi vui, thi vị",
        filename: "geo-zoom-out-country_a0.mp3",
        text: "Sri Lanka, the pearl of the Indian Ocean.",
      },
      {
        key: "q1",
        type: "q",
        badge: "CÂU HỎI Q1 (ICELAND)",
        hint: "Nhịp điệu dứt khoát",
        filename: "geo-zoom-out-country_q1.mp3",
        text: "Name this nation in,",
      },
      {
        key: "a1",
        type: "a",
        badge: "ĐÁP ÁN A1 (ICELAND)",
        hint: "Bí ẩn, xa xôi",
        filename: "geo-zoom-out-country_a1.mp3",
        text: "Iceland, isolated in the North Atlantic.",
      },
      {
        key: "q2",
        type: "q",
        badge: "CÂU HỎI Q2 (OMAN)",
        hint: "Hào hứng",
        filename: "geo-zoom-out-country_q2.mp3",
        text: "Spot this country in,",
      },
      {
        key: "a2",
        type: "a",
        badge: "ĐÁP ÁN A2 (OMAN)",
        hint: "Mạnh mẽ",
        filename: "geo-zoom-out-country_a2.mp3",
        text: "Oman, guarding the Arabian Sea.",
      },
      {
        key: "q3",
        type: "q",
        badge: "CÂU HỎI Q3 (PARAGUAY)",
        hint: "Nhấn mạnh đặc điểm nội lục",
        filename: "geo-zoom-out-country_q3.mp3",
        text: "Name this landlocked country in,",
      },
      {
        key: "a3",
        type: "a",
        badge: "ĐÁP ÁN A3 (PARAGUAY)",
        hint: "Ấm áp",
        filename: "geo-zoom-out-country_a3.mp3",
        text: "Paraguay, right in the heart of South America.",
      },
      {
        key: "q4",
        type: "q",
        badge: "CÂU HỎI Q4 (ERITREA - MYSTERY)",
        hint: "Tạo sự kịch tính cho vòng cuối",
        filename: "geo-zoom-out-country_q4.mp3",
        text: "Final mystery round, name this country in,",
      },
      {
        key: "a4",
        type: "a",
        badge: "KẾT VIDEO A4 (CALL TO ACTION)",
        hint: "Thúc đẩy người xem comment",
        filename: "geo-zoom-out-country_a4.mp3",
        text: "Drop your answer in the comments below!",
      },
    ],
  },
  "geo-flag-puzzle": {
    name: "Geo Flag Puzzle",
    prefix: "geo-flag-puzzle",
    items: [
      {
        key: "q0",
        type: "q",
        badge: "CÂU HỎI Q0 (DOMINICA)",
        hint: "Miêu tả hình ảnh sinh động",
        filename: "geo-flag-puzzle_q0.mp3",
        text: "Triple colored stripes across a rich green field. Can you identify this island?",
      },
      {
        key: "a0",
        type: "a",
        badge: "ĐÁP ÁN A0 (DOMINICA)",
        hint: "Giọng hào hứng",
        filename: "geo-flag-puzzle_a0.mp3",
        text: "Dominica, known for the rare purple Sisserou parrot.",
      },
      {
        key: "q1",
        type: "q",
        badge: "CÂU HỎI Q1 (KAZAKHSTAN)",
        hint: "Hùng tráng",
        filename: "geo-flag-puzzle_q1.mp3",
        text: "A distinctive gold ornamental pattern against sky blue. Name this giant nation!",
      },
      {
        key: "a1",
        type: "a",
        badge: "ĐÁP ÁN A1 (KAZAKHSTAN)",
        hint: "Tự hào",
        filename: "geo-flag-puzzle_a1.mp3",
        text: "Kazakhstan, with the soaring steppe eagle beneath the sun.",
      },
      {
        key: "q2",
        type: "q",
        badge: "CÂU HỎI Q2 (SAINT VINCENT)",
        hint: "Tò mò",
        filename: "geo-flag-puzzle_q2.mp3",
        text: "Green, yellow, and blue stripes with a white diamond. Which country is this?",
      },
      {
        key: "a2",
        type: "a",
        badge: "ĐÁP ÁN A2 (SAINT VINCENT)",
        hint: "Nhẹ nhàng",
        filename: "geo-flag-puzzle_a2.mp3",
        text: "Saint Vincent and the Grenadines, nestled in the Caribbean.",
      },
      {
        key: "q3",
        type: "q",
        badge: "CÂU HỎI Q3 (WALES)",
        hint: "Mạnh mẽ, ấn tượng với biểu tượng rồng",
        filename: "geo-flag-puzzle_q3.mp3",
        text: "A fierce red dragon emblazoned on green and white. Spot this nation!",
      },
      {
        key: "a3",
        type: "a",
        badge: "ĐÁP ÁN A3 (WALES)",
        hint: "Kỳ bí",
        filename: "geo-flag-puzzle_a3.mp3",
        text: "Wales, famous for its ancient castles and rugged coastline.",
      },
      {
        key: "q4",
        type: "q",
        badge: "CÂU HỎI Q4 (MYSTERY ROUND)",
        hint: "Thách đố",
        filename: "geo-flag-puzzle_q4.mp3",
        text: "Mystery flag round! Can you identify this national symbol?",
      },
      {
        key: "a4",
        type: "a",
        badge: "KẾT VIDEO A4 (CALL TO ACTION)",
        hint: "Kêu gọi tương tác",
        filename: "geo-flag-puzzle_a4.mp3",
        text: "Drop your guess in the comments below!",
      },
    ],
  },
  "custom": {
    name: "Kịch bản tự do (Custom)",
    prefix: "custom-voice",
    items: [
      {
        key: "q0",
        type: "q",
        badge: "ĐOẠN 1",
        hint: "Thu âm câu đầu tiên",
        filename: "custom-voice_01.mp3",
        text: "Nhập hoặc đọc đoạn văn đầu tiên của bạn tại đây...",
      },
      {
        key: "q1",
        type: "q",
        badge: "ĐOẠN 2",
        hint: "Thu âm câu thứ hai",
        filename: "custom-voice_02.mp3",
        text: "Nhập hoặc đọc đoạn văn thứ hai của bạn tại đây...",
      },
      {
        key: "q2",
        type: "q",
        badge: "ĐOẠN 3",
        hint: "Thu âm câu thứ ba",
        filename: "custom-voice_03.mp3",
        text: "Nhập hoặc đọc đoạn văn thứ ba của bạn tại đây...",
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

async function getClip(templateId, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const id = `${templateId}_${key}`;
    const req = store.get(id);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
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

// ─── Audio Recording Engine & MP3 Encoder ───
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
const viewToggleBtn = document.getElementById("viewToggleBtn");
const viewToggleIcon = document.getElementById("viewToggleIcon");
const prompterView = document.getElementById("prompterView");
const listView = document.getElementById("listView");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const stepIndicator = document.getElementById("stepIndicator");
const prompterBadge = document.getElementById("prompterBadge");
const voiceHintText = document.getElementById("voiceHintText");
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
let cachedClips = {}; // key -> { blob, duration }
let activeView = "prompter"; // "prompter" | "list"

// ─── Toast System ───
function showToast(msg, icon = "check") {
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<i data-lucide="${icon}" style="width: 16px; height: 16px;"></i><span>${msg}</span>`;
  toastContainer.appendChild(el);
  lucide.createIcons({ root: el });
  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transition = "opacity 0.3s";
    setTimeout(() => el.remove(), 300);
  }, 2500);
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

    // Start Visualizer
    drawWaveform();
  } catch (err) {
    console.error("Mic Access Error:", err);
    showToast("Không thể mở Micro. Vui lòng cấp quyền micro!", "alert-circle");
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

  // Stop MediaStream Tracks
  if (mediaStream) {
    mediaStream.getTracks().forEach((track) => track.stop());
  }
  if (scriptProcessor) scriptProcessor.disconnect();
  if (audioInput) audioInput.disconnect();
  if (analyserNode) analyserNode.disconnect();
  if (audioContext && audioContext.state !== "closed") audioContext.close();

  // Reset Canvas
  clearWaveform();

  // Flatten PCM Float32
  let totalLength = 0;
  for (const chunk of pcmChunks) totalLength += chunk.length;
  const mergedFloat = new Float32Array(totalLength);
  let offset = 0;
  for (const chunk of pcmChunks) {
    mergedFloat.set(chunk, offset);
    offset += chunk.length;
  }

  // Encode to MP3 using lamejs
  let audioBlob;
  try {
    audioBlob = encodePCMToMp3(mergedFloat, 44100);
  } catch (err) {
    console.warn("lamejs encoding fallback to WAV:", err);
    audioBlob = encodePCMToWav(mergedFloat, 44100);
  }

  // Save to IndexedDB
  const currentItem = getCurrentItem();
  await saveClip(currentTemplateId, currentItem.key, audioBlob, durationSec);
  cachedClips[currentItem.key] = { blob: audioBlob, duration: durationSec };

  showToast(`Đã lưu "${currentItem.filename}" (${durationSec.toFixed(1)}s)!`);
  updateUI();
}

function encodePCMToMp3(floatSamples, sampleRate) {
  if (typeof lamejs === "undefined") {
    throw new Error("lamejs not loaded");
  }

  // Convert Float32 [-1.0, 1.0] to Int16 [-32768, 32767]
  const int16Samples = new Int16Array(floatSamples.length);
  for (let i = 0; i < floatSamples.length; i++) {
    const s = Math.max(-1, Math.min(1, floatSamples[i]));
    int16Samples[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }

  const mp3encoder = new lamejs.Mp3Encoder(1, sampleRate, 160); // 1 channel, 160 kbps
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
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, 1, true); // Mono
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

// ─── UI Rendering & State ───
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
  progressText.textContent = `Đã thu: ${recordedCount} / ${totalCount} câu`;
  const pct = Math.round((recordedCount / totalCount) * 100);
  progressFill.style.width = `${pct}%`;

  // Prompter Step & Badge
  stepIndicator.textContent = `Câu ${currentIndex + 1} / ${totalCount}`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === totalCount - 1;

  prompterBadge.className = `prompter-badge ${item.type}`;
  prompterBadge.textContent = item.badge;
  voiceHintText.textContent = item.hint;
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

  // Download Zip Button
  if (recordedCount > 0) {
    downloadZipBtn.disabled = false;
    downloadZipBtnText.textContent = `Tải về trọn bộ ZIP (${recordedCount} file .mp3)`;
  } else {
    downloadZipBtn.disabled = true;
    downloadZipBtnText.textContent = "Tải về trọn bộ ZIP (.zip)";
  }

  // Render List View if open
  renderListView();
  lucide.createIcons();
}

function renderListView() {
  const tmpl = getCurrentTemplate();
  listView.innerHTML = "";

  tmpl.items.forEach((it, idx) => {
    const isRecorded = Boolean(cachedClips[it.key]);
    const duration = cachedClips[it.key]?.duration;
    const durStr = duration ? `(${duration.toFixed(1)}s)` : "";

    const el = document.createElement("div");
    el.className = `list-item ${idx === currentIndex ? "active" : ""}`;
    el.innerHTML = `
      <div class="list-item-left">
        <div class="status-dot ${isRecorded ? "recorded" : ""}"></div>
        <div class="list-item-text">
          <div class="list-item-title">
            <span>${it.badge}</span>
            <code style="font-size: 0.72rem; color: var(--text-muted);">${it.filename}</code>
            <span style="font-size: 0.72rem; color: var(--accent-emerald);">${durStr}</span>
          </div>
          <div class="list-item-desc">${it.text}</div>
        </div>
      </div>
      <div class="clip-actions">
        ${
          isRecorded
            ? `<button class="icon-btn" title="Nghe lại" onclick="playClip('${it.key}')">
                <i data-lucide="play" style="width: 15px; height: 15px;"></i>
               </button>`
            : ""
        }
      </div>
    `;
    el.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      currentIndex = idx;
      setView("prompter");
    });
    listView.appendChild(el);
  });
}

window.playClip = function (key) {
  const rec = cachedClips[key];
  if (!rec) return;
  const audio = new Audio(URL.createObjectURL(rec.blob));
  audio.play();
};

function setView(view) {
  activeView = view;
  if (view === "prompter") {
    prompterView.style.display = "flex";
    listView.style.display = "none";
    viewToggleBtn.classList.remove("active");
    viewToggleIcon.setAttribute("data-lucide", "list");
  } else {
    prompterView.style.display = "none";
    listView.style.display = "flex";
    viewToggleBtn.classList.add("active");
    viewToggleIcon.setAttribute("data-lucide", "tv");
  }
  lucide.createIcons();
  updateUI();
}

// ─── Export ZIP (JSZip) ───
async function exportZip() {
  const tmpl = getCurrentTemplate();
  const recordedItems = tmpl.items.filter((it) => cachedClips[it.key]);

  if (recordedItems.length === 0) {
    showToast("Chưa có đoạn thu âm nào để tải!", "alert-circle");
    return;
  }

  showToast("Đang đóng gói file ZIP...", "loader");
  const zip = new JSZip();

  // Add all audio files
  for (const it of recordedItems) {
    const clip = cachedClips[it.key];
    zip.file(it.filename, clip.blob);
  }

  // Add manifest.json for reference
  const manifest = {
    template: tmpl.name,
    prefix: tmpl.prefix,
    exportedAt: new Date().toISOString(),
    totalClips: recordedItems.length,
    instructions: "Giải nén các file .mp3 này vào thư mục: Geo Trivia X/remotion/public/audio/tts/",
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
  a.download = `${tmpl.prefix}-voice-package.zip`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(downloadUrl);

  showToast(`Đã tải về gói ZIP ${recordedItems.length} file!`, "check-circle-2");
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

viewToggleBtn.addEventListener("click", () => {
  setView(activeView === "prompter" ? "list" : "prompter");
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
  showToast(`Đã xóa clip cũ của ${item.badge}. Sẵn sàng thu lại!`);
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
  if (confirm(`Bạn có chắc muốn xóa TẤT CẢ các đoạn thu âm của "${tmpl.name}"?`)) {
    await clearTemplateClips(currentTemplateId);
    cachedClips = {};
    showToast(`Đã dọn sạch các file của "${tmpl.name}"`);
    updateUI();
  }
});

// Spacebar Shortcut
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

// Canvas Resize
function setupCanvas() {
  const rect = waveformCanvas.getBoundingClientRect();
  waveformCanvas.width = rect.width * window.devicePixelRatio;
  waveformCanvas.height = rect.height * window.devicePixelRatio;
  clearWaveform();
}

// ─── Initialization ───
async function init() {
  setupCanvas();
  window.addEventListener("resize", setupCanvas);
  await loadClipsForTemplate();
  updateUI();
  lucide.createIcons();
}

window.addEventListener("DOMContentLoaded", init);
