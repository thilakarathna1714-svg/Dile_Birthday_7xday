const $ = id => document.getElementById(id);
const M = MEMORY, S = M.sad;
const opt = (u, w = 1200) => u.replace("/upload/", `/upload/f_auto,q_auto,w_${w}/`);

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  return e;
}

const slidesBox = $("slides"), fx = $("fx"), audio = $("audio"), lyricBox = $("lyric");
let phase = "idle", cur = -1, timer, raf, rainIv, lyricIdx = -1;

document.title = M.name + " 🎂";
document.documentElement.style.setProperty("--dur", M.seconds + "s");

// ---------- Cover & finale ----------
$("coverBg").style.backgroundImage = `url(${opt(M.cover, 1000)})`;
$("coverName").textContent = M.name;
$("coverSub").textContent = M.subtitle;
$("finaleBg").style.backgroundImage = `url(${opt(M.finale.cover, 1000)})`;
$("finSub").textContent = M.finale.sub;
$("finName").textContent = M.name;
$("finText").textContent = M.finale.text;

// ---------- SAD: video slide ----------
const vSlide = el("div", "slide sad");
const vFrame = el("div", "frame");
const vid = el("video", "media vid");
vid.src = S.video;
vid.muted = true; vid.defaultMuted = true; vid.playsInline = true; vid.preload = "auto";
vid.setAttribute("playsinline", ""); vid.setAttribute("muted", "");
vFrame.append(vid, el("div", "vignette"), el("div", "grain"));
vSlide.append(el("div", "bg dark"), vFrame);
slidesBox.append(vSlide);

// ---------- SAD: photo slides ----------
const sadEls = S.photos.map((u, i) => {
  const s = el("div", "slide sad");
  const bg = el("div", "bg");
  bg.style.backgroundImage = `url(${opt(u, 500)})`;
  const f = el("div", "frame");
  const img = el("img", "photo media kb" + (i % 2 ? 2 : 1));
  img.src = opt(u); img.alt = "";
  f.append(img, el("div", "vignette"), el("div", "grain"));
  s.append(bg, f);
  slidesBox.append(s);
  return s;
});

// ---------- HAPPY slides ----------
const slideEls = [], segEls = [];
M.slides.forEach((s, i) => {
  const slide = el("div", "slide");
  const bg = el("div", "bg");
  bg.style.backgroundImage = `url(${opt(s.photo, 600)})`;

  const frame = el("div", "frame in" + (i % 3 + 1));
  const img = el("img", "photo kb" + (i % 5 + 1));
  img.src = opt(s.photo); img.alt = "";

  const cap = el("div", "caption");
  cap.append(el("h3", "", s.title));
  const p = el("p");
  s.text.split(" ").forEach((w, k) => {
    const sp = el("span", "w", w);
    sp.style.animationDelay = (0.7 + k * 0.17) + "s";
    p.append(sp, " ");
  });
  cap.append(p);

  frame.append(img, el("div", "sparkles"), cap);
  slide.append(bg, frame);
  slidesBox.append(slide);
  slideEls.push(slide);

  const seg = el("i"); seg.append(el("b"));
  $("progress").append(seg);
  segEls.push(seg);
});
new Image().src = opt(M.finale.cover, 1000);

// ---------- Effects ----------
const pinks = ["#ff4d6d", "#ff758f", "#ff8fa3", "#ffb3c1", "#e8b86d"];

function heart() {
  const h = el("span", "heart", "❤");
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 12 + Math.random() * 22 + "px";
  h.style.color = pinks[Math.floor(Math.random() * pinks.length)];
  h.style.animationDuration = 5 + Math.random() * 5 + "s";
  fx.append(h); setTimeout(() => h.remove(), 10500);
}
function balloon() {
  const b = el("span", "balloon", ["🎈", "🎈", "🎉"][Math.floor(Math.random() * 3)]);
  b.style.left = 5 + Math.random() * 90 + "vw";
  b.style.fontSize = 28 + Math.random() * 20 + "px";
  b.style.animationDuration = 7 + Math.random() * 4 + "s";
  fx.append(b); setTimeout(() => b.remove(), 11500);
}
function confetti(n = 30) {
  const colors = ["#ff4d6d", "#e8b86d", "#ffd166", "#06d6a0", "#4cc9f0", "#f72585"];
  for (let i = 0; i < n; i++) {
    const c = el("span", "confetti");
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = 2.5 + Math.random() * 2.5 + "s";
    c.style.animationDelay = Math.random() * 0.6 + "s";
    fx.append(c); setTimeout(() => c.remove(), 6000);
  }
}
function startFx() { setInterval(heart, 450); setInterval(balloon, 3500); }

function sparkle(slide) {
  const box = slide.querySelector(".sparkles");
  box.innerHTML = "";
  for (let k = 0; k < 16; k++) {
    const s = el("span", "sp", "✦");
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 75 + "%";
    s.style.fontSize = 8 + Math.random() * 14 + "px";
    s.style.animationDelay = Math.random() * M.seconds + "s";
    box.append(s);
  }
}

function startRain() {
  rainIv = setInterval(() => {
    for (let k = 0; k < 3; k++) {
      const d = el("span", "drop");
      d.style.left = Math.random() * 100 + "vw";
      d.style.height = 30 + Math.random() * 50 + "px";
      d.style.animationDuration = 0.6 + Math.random() * 0.6 + "s";
      fx.append(d); setTimeout(() => d.remove(), 1300);
    }
  }, 100);
}
function stopRain() { clearInterval(rainIv); }

// ---------- Gold lyrics ----------
const LY = S.lyrics || [];
function renderLyric(text) {
  lyricBox.innerHTML = "";
  if (!text) return;
  text.split(" ").forEach((w, k) => {
    const sp = el("span", "lw", w);
    sp.style.animationDelay = k * 0.18 + "s";
    lyricBox.append(sp, " ");
  });
}
function lyricLoop() {
  const t = audio.currentTime;
  const i = LY.findIndex(l => t >= l.t && t < l.t + l.d);
  if (i !== lyricIdx) { lyricIdx = i; renderLyric(i >= 0 ? LY[i].text : ""); }
  raf = requestAnimationFrame(lyricLoop);
}

// ---------- Flow ----------
function begin() {
  $("cover").onclick = null;
  audio.src = S.music; audio.loop = false;
  audio.play().catch(() => {});

  $("cover").classList.add("gone");
  setTimeout(() => $("cover").classList.add("hide"), 900);
  $("stage").classList.remove("hide");
  $("stage").classList.add("sadmode");
  $("musicBtn").classList.remove("hide");

  phase = "video";
  vSlide.classList.add("active");
  vid.currentTime = 0;
  vid.onended = goPhotos;
  vid.onerror = goPhotos;
  const pr = vid.play(); if (pr) pr.catch(goPhotos);

  if (S.rain !== false) startRain();
  lyricLoop();
}

function goPhotos() {
  if (phase !== "video") return;
  phase = "photos";
  vSlide.classList.remove("active");

  // music එකේ ඉතිරි කාලය photos 3ට බෙදනවා
  const left = isFinite(audio.duration) ? audio.duration - audio.currentTime : 15;
  const per = Math.max(4, left / sadEls.length);

  let i = 0;
  (function next() {
    if (i >= sadEls.length) return endSad();
    sadEls.forEach((s, k) => {
      if (k === i) s.style.setProperty("--dur", per + "s");
      s.classList.toggle("active", k === i);
    });
    i++;
    timer = setTimeout(next, per * 1000);
  })();
}

function endSad() {
  phase = "happy";
  cancelAnimationFrame(raf); renderLyric("");
  stopRain();
  $("flash").classList.add("go");
  setTimeout(() => $("flash").classList.remove("go"), 1500);

  sadEls.forEach(s => s.classList.remove("active"));
  $("stage").classList.remove("sadmode");

  // sad music -> happy music
  let v = 1;
  const iv = setInterval(() => {
    v -= 0.1; audio.volume = Math.max(0, v);
    if (v <= 0) {
      clearInterval(iv);
      audio.src = M.music; audio.loop = true; audio.volume = 1;
      audio.play().catch(() => {});
    }
  }, 80);

  startFx();
  show(0);
}

function show(i) {
  clearTimeout(timer);
  if (i >= slideEls.length) return finale();
  if (i < 0) i = 0;
  cur = i;
  slideEls.forEach((s, k) => s.classList.toggle("active", k === i));
  segEls.forEach((sg, k) => { sg.className = k < i ? "done" : k === i ? "run" : ""; });
  sparkle(slideEls[i]);
  confetti(22);
  timer = setTimeout(() => show(i + 1), M.seconds * 1000);
}

function finale() {
  clearTimeout(timer);
  $("stage").classList.add("hide");
  $("finale").classList.remove("hide");
  confetti(80);
  setTimeout(() => confetti(60), 1800);
}

$("cover").onclick = begin;

$("stage").onclick = e => {
  if (phase !== "happy") return; // sad කොටසේදී tap කරන්න බෑ (music එකත් එක්ක sync වෙන්න)
  show(e.clientX < window.innerWidth * 0.3 ? cur - 1 : cur + 1);
};

$("replay").onclick = () => {
  $("finale").classList.add("hide");
  $("stage").classList.remove("hide");
  show(0);
};

$("musicBtn").onclick = e => {
  e.stopPropagation();
  audio.muted = !audio.muted;
  $("musicBtn").textContent = audio.muted ? "🔇" : "🔊";
};