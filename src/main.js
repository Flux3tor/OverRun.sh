import "./style.css";7
console.log("%cOverRun.sh", "color:#50fa7b;font-size:24px;font-weight:bold;");
console.log("%cUsername: Flux3tor", "color:#8be9fd;font-size:14px;");
console.log("%cPassword: 1247016", "color:#8be9fd;font-size:14px;");
console.log("%c(open DevTools > Console to see this)", "color:#6272a4;font-size:12px;");

const topbar = document.createElement("div");
topbar.id = "topbar";

const topbarLeft = document.createElement("div");
topbarLeft.className = "topbar-left";

const menuSvg = document.createElement("div");
menuSvg.className = "topbar-icon";
menuSvg.innerHTML = `<svg viewBox="0 0 20 20" fill="currentColor"><rect y="3" width="20" height="2" rx="1"/><rect y="9" width="20" height="2" rx="1"/><rect y="15" width="20" height="2" rx="1"/></svg>`;

const langSpan = document.createElement("span");
langSpan.innerText = "us";
langSpan.style.fontSize = "12px";

const a11ySvg = document.createElement("div");
a11ySvg.className = "topbar-icon";
a11ySvg.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="4" r="2"/><path d="M15.89 8.11C15.5 7.72 14.83 7 13 7H11C9.17 7 8.5 7.72 8.11 8.11L6 10.22 7.41 11.64 9.5 9.5V16l-1.9 5.7 1.9.6L11 19h2l1.6 3.3 1.9-.6L14.5 16V9.5l2.09 2.14L18 10.22 15.89 8.11z"/></svg>`;

topbarLeft.appendChild(menuSvg);
topbarLeft.appendChild(langSpan);
topbarLeft.appendChild(a11ySvg);

const topbarRight = document.createElement("div");
topbarRight.className = "topbar-right";

const dtSpan = document.createElement("span");
dtSpan.id = "login-dt";

const powerSvg = document.createElement("div");
powerSvg.className = "topbar-icon";
powerSvg.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2h-2v10h2V2zm4.83 2.17-1.42 1.42A6.92 6.92 0 0 1 19 12c0 3.87-3.13 7-7 7A7 7 0 0 1 7.58 5.58L6.17 4.17A8.932 8.932 0 0 0 3 12a9 9 0 0 0 9 9 9 9 0 0 0 9-9 8.99 8.99 0 0 0-3.17-6.83z"/></svg>`;

topbarRight.appendChild(dtSpan);
topbarRight.appendChild(powerSvg);

topbar.appendChild(topbarLeft);
topbar.appendChild(topbarRight);
document.body.appendChild(topbar);

function updateLoginClock() {
  const now = new Date();
  const d = now.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
  const t = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  dtSpan.innerText = d + ", " + t;
}
setInterval(updateLoginClock, 1000);
updateLoginClock();

const loginBox = document.createElement("div");
loginBox.id = "login-box";

const avatar = document.createElement("img");
avatar.src = "./assets/kali-dragon.png";
avatar.id = "login-avatar";

const usernameInput = document.createElement("input");
usernameInput.id = "login-username";
usernameInput.className = "login-input";
usernameInput.placeholder = "Username";
usernameInput.autocomplete = "off";

const passwordInput = document.createElement("input");
passwordInput.id = "login-password";
passwordInput.className = "login-input";
passwordInput.type = "password";
passwordInput.placeholder = "Password";

const btnRow = document.createElement("div");
btnRow.id = "login-btn-row";

const cancelBtn = document.createElement("button");
cancelBtn.className = "btn-cancel";
cancelBtn.innerText = "Cancel";
cancelBtn.onclick = () => {
  usernameInput.value = "";
  passwordInput.value = "";
  errMsg.innerText = "";
};

const loginBtn = document.createElement("button");
loginBtn.className = "btn-login";
loginBtn.innerText = "Log In";

btnRow.appendChild(cancelBtn);
btnRow.appendChild(loginBtn);

const errMsg = document.createElement("div");
errMsg.id = "login-error";

const consoleHint = document.createElement("div");
consoleHint.id = "console-hint";
consoleHint.innerText = "hint: check the browser console";

loginBox.appendChild(avatar);
loginBox.appendChild(usernameInput);
loginBox.appendChild(passwordInput);
loginBox.appendChild(btnRow);
loginBox.appendChild(errMsg);
loginBox.appendChild(consoleHint);
document.body.appendChild(loginBox);

const kaliBrand = document.createElement("div");
kaliBrand.id = "kali-brand";
kaliBrand.innerText = "KALI";
document.body.appendChild(kaliBrand);

function doLogin() {
  if (usernameInput.value === "Flux3tor" && passwordInput.value === "1247016") {
    document.body.style.transition = "opacity 0.35s";
    document.body.style.opacity = "0";
    setTimeout(() => {
      document.body.innerHTML = "";
      document.body.style.transition = "opacity 0.35s";
      document.body.style.opacity = "0";
      launchDesktop();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => { document.body.style.opacity = "1"; });
      });
    }, 350);
  } else {
    errMsg.innerText = "Incorrect username or password";
    loginBox.classList.add("shake");
    setTimeout(() => loginBox.classList.remove("shake"), 350);
  }
}

loginBtn.addEventListener("click", doLogin);
passwordInput.addEventListener("keydown", e => { if (e.key === "Enter") doLogin(); });

let zTop = 100;
const windows = {};

function launchDesktop() {
  document.body.className = "desktop";
  document.body.style.backgroundImage = 'url("./assets/kali-wallpaper.jpg")';

  buildPanel();
  buildDesktopIcons();
  buildContextMenu();
}

function buildPanel() {
  const panel = document.createElement("div");
  panel.id = "panel";

  const left = document.createElement("div");
  left.id = "panel-left";

  const dragonWrap = document.createElement("div");
  dragonWrap.id = "panel-dragon";
  dragonWrap.title = "Applications";
  const dragonImg = document.createElement("img");
  dragonImg.src = "./assets/kali-dragon.png";
  dragonImg.className = "panel-app-icon";
  dragonWrap.appendChild(dragonImg);
  dragonWrap.addEventListener("click", e => { e.stopPropagation(); toggleAppMenu(); });

  const sep1 = document.createElement("div"); sep1.className = "panel-sep";

  const launchDefs = [
    { title: "Terminal", svg: `<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zM6 10h2v2H6zm0 4h2v2H6zm4-4h8v2h-8zm0 4h5v2h-5z"/></svg>`, action: () => openWindow("terminal") },
    { title: "Files", svg: `<svg viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>`, action: () => openWindow("files") },
    { title: "Firefox ESR", svg: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 2a10 10 0 0 0-7.07 17.07C6 17 7 15 7 13c0-2 1-3 2-4s1-3 0-4c2 0 4 1 5 3 1-1 3-1 4 0 1 2 0 4-1 5s-1 3 0 5A10 10 0 0 0 22 12 10 10 0 0 0 12 2z"/></svg>`, action: () => openWindow("browser") },
  ];

  const launcherContainer = document.createElement("div");
  launcherContainer.id = "panel-launchers";
  launchDefs.forEach(def => {
    const btn = document.createElement("div");
    btn.className = "panel-launcher";
    btn.title = def.title;
    btn.innerHTML = def.svg;
    btn.addEventListener("click", def.action);
    launcherContainer.appendChild(btn);
  });

  const sep2 = document.createElement("div"); sep2.className = "panel-sep";

  const wsContainer = document.createElement("div");
  wsContainer.id = "ws-container";
  for (let i = 1; i <= 4; i++) {
    const ws = document.createElement("div");
    ws.className = "ws-btn" + (i === 1 ? " ws-active" : "");
    ws.innerText = i;
    ws.addEventListener("click", () => {
      document.querySelectorAll(".ws-btn").forEach(w => w.classList.remove("ws-active"));
      ws.classList.add("ws-active");
    });
    wsContainer.appendChild(ws);
  }

  left.appendChild(dragonWrap);
  left.appendChild(sep1);
  left.appendChild(launcherContainer);
  left.appendChild(sep2);
  left.appendChild(wsContainer);

  const center = document.createElement("div");
  center.id = "panel-center";

  const right = document.createElement("div");
  right.id = "panel-right";

  const trayDefs = [
    `<svg viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 0 0-6 0zm-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>`,
    `<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
    `<svg viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>`,
  ];

  trayDefs.forEach(svg => {
    const icon = document.createElement("div");
    icon.className = "tray-icon";
    icon.innerHTML = svg;
    right.appendChild(icon);
  });

  const clock = document.createElement("div");
  clock.id = "panel-clock";
  right.appendChild(clock);

  function tickClock() {
    const now = new Date();
    clock.innerHTML = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
      + "<br>" + now.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
  }
  setInterval(tickClock, 1000);
  tickClock();

  panel.appendChild(left);
  panel.appendChild(center);
  panel.appendChild(right);
  document.body.appendChild(panel);

  buildAppMenu();
}

const APP_MENU_ITEMS = [
  { label: "Terminal", action: () => openWindow("terminal") },
  { label: "File Manager", action: () => openWindow("files") },
  { label: "Text Editor", action: () => openWindow("editor") },
  { label: "Firefox ESR", action: () => openWindow("browser") },
  { label: "System Info", action: () => openWindow("sysinfo") },
  { label: "Settings", action: () => openWindow("settings") },
  { label: "Calculator", action: () => openWindow("calc") },
];

function buildAppMenu() {
  const menu = document.createElement("div");
  menu.id = "app-menu";
  APP_MENU_ITEMS.forEach(item => {
    const el = document.createElement("div");
    el.className = "app-menu-item";
    el.innerText = item.label;
    el.addEventListener("click", () => { closeAppMenu(); item.action(); });
    menu.appendChild(el);
  });
  document.body.appendChild(menu);
  document.addEventListener("click", e => {
    if (!e.target.closest("#panel-dragon") && !e.target.closest("#app-menu")) closeAppMenu();
  });
}

function toggleAppMenu() {
  const m = document.getElementById("app-menu");
  m.classList.toggle("open");
}
function closeAppMenu() {
  const m = document.getElementById("app-menu");
  if (m) m.classList.remove("open");
}

function buildDesktopIcons() {
  const iconDefs = [
    { label: "Home", icon: "🏠", action: () => openWindow("files") },
    { label: "File System", icon: "💾", action: () => openWindow("files") },
    { label: "Trash", icon: "🗑️", action: () => {} },
  ];
  iconDefs.forEach((def, i) => {
    const el = document.createElement("div");
    el.className = "desktop-icon";
    el.style.top = (48 + i * 88) + "px";
    el.style.left = "12px";
    el.innerHTML = `<div class="di-icon">${def.icon}</div><div class="di-label">${def.label}</div>`;
    el.addEventListener("dblclick", def.action);
    document.body.appendChild(el);
  });
}

function buildContextMenu() {
  const ctx = document.createElement("div");
  ctx.id = "ctx-menu";
  const items = [
    { label: "Open Terminal Here", action: () => openWindow("terminal") },
    { label: "Open File Manager", action: () => openWindow("files") },
    { label: "─────────────", action: null },
    { label: "Desktop Settings", action: () => openWindow("settings") },
  ];
  items.forEach(item => {
    const el = document.createElement("div");
    if (item.action === null) { el.className = "ctx-sep"; }
    else { el.className = "ctx-item"; el.innerText = item.label; el.addEventListener("click", () => { ctx.classList.remove("open"); item.action(); }); }
    ctx.appendChild(el);
  });
  document.body.appendChild(ctx);
  document.addEventListener("contextmenu", e => {
    if (e.target.closest(".window") || e.target.closest("#panel")) return;
    e.preventDefault();
    ctx.style.left = Math.min(e.clientX, window.innerWidth - 180) + "px";
    ctx.style.top = Math.min(e.clientY, window.innerHeight - 150) + "px";
    ctx.classList.add("open");
  });
  document.addEventListener("click", () => ctx.classList.remove("open"));
}

function createWindow(id, title, contentEl, w = 720, h = 480) {
  if (windows[id]) { focusWin(windows[id]); unminimize(id); return; }

  const win = document.createElement("div");
  win.className = "window";
  win.style.width = w + "px";
  win.style.height = h + "px";
  win.style.left = (60 + Math.random() * 180) + "px";
  win.style.top = (36 + Math.random() * 80) + "px";
  win.style.zIndex = ++zTop;

  const tb = document.createElement("div");
  tb.className = "win-titlebar";

  const titleIco = document.createElement("div");
  titleIco.className = "win-title";
  titleIco.innerText = title;

  const ctrls = document.createElement("div");
  ctrls.className = "win-ctrls";

  const makeBtn = (cls, label, fn) => {
    const b = document.createElement("div");
    b.className = "win-btn " + cls;
    b.title = label;
    b.addEventListener("click", fn);
    return b;
  };

  const closeB = makeBtn("wb-close", "Close", () => closeWin(id));
  const minB = makeBtn("wb-min", "Minimize", () => minimizeWin(id));
  const maxB = makeBtn("wb-max", "Maximize", () => toggleMaximize(id));

  ctrls.appendChild(minB);
  ctrls.appendChild(maxB);
  ctrls.appendChild(closeB);
  tb.appendChild(titleIco);
  tb.appendChild(ctrls);

  const body = document.createElement("div");
  body.className = "win-body";
  body.appendChild(contentEl);

  win.appendChild(tb);
  win.appendChild(body);
  document.body.appendChild(win);

  windows[id] = { el: win, minimized: false, maximized: false };
  makeDraggable(win, tb);
  addTaskbarBtn(id, title);
  win.addEventListener("mousedown", () => focusWin(win));
  focusWin(win);
}

function focusWin(win) {
  const el = win.el || win;
  el.style.zIndex = ++zTop;
}

function closeWin(id) {
  if (!windows[id]) return;
  windows[id].el.remove();
  delete windows[id];
  removeTaskbarBtn(id);
}

function minimizeWin(id) {
  if (!windows[id]) return;
  windows[id].el.classList.add("win-minimized");
  windows[id].minimized = true;
}

function unminimize(id) {
  if (!windows[id]) return;
  windows[id].el.classList.remove("win-minimized");
  windows[id].minimized = false;
  focusWin(windows[id]);
}

function toggleMaximize(id) {
  if (!windows[id]) return;
  const w = windows[id];
  w.maximized = !w.maximized;
  w.el.classList.toggle("win-maximized", w.maximized);
}

function makeDraggable(winEl, handle) {
  let ox = 0, oy = 0, dragging = false;
  handle.addEventListener("mousedown", e => {
    if (e.target.closest(".win-ctrls")) return;
    if (windows[Object.keys(windows).find(k => windows[k].el === winEl)]?.maximized) return;
    dragging = true;
    ox = e.clientX - winEl.offsetLeft;
    oy = e.clientY - winEl.offsetTop;
    e.preventDefault();
  });
  document.addEventListener("mousemove", e => {
    if (!dragging) return;
    winEl.style.left = Math.max(0, e.clientX - ox) + "px";
    winEl.style.top = Math.max(28, e.clientY - oy) + "px";
  });
  document.addEventListener("mouseup", () => { dragging = false; });
}

function addTaskbarBtn(id, title) {
  const center = document.getElementById("panel-center");
  if (!center) return;
  const btn = document.createElement("div");
  btn.className = "taskbar-btn";
  btn.id = "tb-" + id;
  btn.innerText = title;
  btn.addEventListener("click", () => {
    if (!windows[id]) return;
    if (windows[id].minimized) { unminimize(id); }
    else { minimizeWin(id); }
  });
  center.appendChild(btn);
}

function removeTaskbarBtn(id) {
  const btn = document.getElementById("tb-" + id);
  if (btn) btn.remove();
}

function openWindow(type) {
  closeAppMenu();
  const map = {
    terminal: () => buildTerminal(),
    files: () => buildFiles(),
    editor: () => buildEditor(),
    browser: () => buildBrowser(),
    sysinfo: () => buildSysInfo(),
    settings: () => buildSettings(),
    calc: () => buildCalc(),
  };
  if (map[type]) map[type]();
}

const VFS = {
  "/": { type: "dir" },
  "/home": { type: "dir" },
  "/home/flux": { type: "dir" },
  "/home/flux/Desktop": { type: "dir" },
  "/home/flux/Documents": { type: "dir" },
  "/home/flux/Downloads": { type: "dir" },
  "/home/flux/Pictures": { type: "dir" },
  "/home/flux/.bashrc": { type: "file", content: "# ~/.bashrc: executed by bash for non-login shells.\nexport PATH=\"$HOME/.local/bin:$PATH\"\nalias ll='ls -la'\nalias la='ls -A'" },
  "/home/flux/Documents/notes.txt": { type: "file", content: "TODO:\n- finish the project\n- deploy to github pages\n- write devlog\n" },
  "/etc": { type: "dir" },
  "/etc/hostname": { type: "file", content: "overrun" },
  "/etc/os-release": { type: "file", content: 'PRETTY_NAME="Kali GNU/Linux Rolling"\nNAME="Kali GNU/Linux"\nID=kali\nID_LIKE=debian\nVERSION="2024.1"' },
  "/etc/passwd": { type: "file", content: "root:x:0:0:root:/root:/bin/zsh\nflux:x:1000:1000:,,,:/home/flux:/bin/zsh" },
  "/var": { type: "dir" },
  "/var/log": { type: "dir" },
  "/var/log/syslog": { type: "file", content: "Apr 26 12:00:01 overrun kernel: Linux version 6.6.9-amd64\nApr 26 12:00:02 overrun kernel: Command line: BOOT_IMAGE=/vmlinuz-6.6.9-amd64\nApr 26 12:00:05 overrun systemd[1]: Started Session 1 of User flux." },
  "/bin": { type: "dir" },
  "/usr": { type: "dir" },
  "/usr/share": { type: "dir" },
  "/tmp": { type: "dir" },
  "/root": { type: "dir" },
};

function vfsChildren(path) {
  const norm = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
  return Object.entries(VFS)
    .filter(([k]) => {
      if (k === norm) return false;
      const rel = k.startsWith(norm + "/") ? k.slice(norm.length + 1) : null;
      return rel && !rel.includes("/");
    })
    .map(([k, v]) => ({ name: k.split("/").pop(), path: k, type: v.type }));
}

function vfsGet(path) {
  return VFS[path] || null;
}

function buildTerminal() {
  const id = "terminal-" + Date.now();
  let cwd = "/home/flux";
  let history = [];
  let histIdx = -1;

  const wrap = document.createElement("div");
  wrap.className = "term-wrap";

  const out = document.createElement("div");
  out.className = "term-out";

  const inputRow = document.createElement("div");
  inputRow.className = "term-input-row";

  const promptEl = document.createElement("span");
  promptEl.className = "term-prompt";

  const inp = document.createElement("input");
  inp.className = "term-inp";
  inp.autocomplete = "off";
  inp.spellcheck = false;

  inputRow.appendChild(promptEl);
  inputRow.appendChild(inp);
  wrap.appendChild(out);
  wrap.appendChild(inputRow);

  const print = (text, color) => {
    text.split("\n").forEach(line => {
      const d = document.createElement("div");
      d.className = "term-line";
      if (color) d.style.color = color;
      d.textContent = line;
      out.appendChild(d);
    });
    out.scrollTop = out.scrollHeight;
  };

  const setPrompt = () => {
    const display = cwd.replace("/home/flux", "~");
    promptEl.textContent = "┌──(flux㉿overrun)-[" + display + "]\n└─$ ";
    promptEl.style.whiteSpace = "pre";
  };
  setPrompt();

  print("OverRun.sh v0.1 — Kali GNU/Linux Rolling (web simulation)", "#50fa7b");
  print('Type "help" for available commands.\n');

  const resolvePath = (p) => {
    if (!p || p === "~") return "/home/flux";
    if (p.startsWith("~/")) return "/home/flux/" + p.slice(2);
    if (p.startsWith("/")) return p.replace(/\/+$/, "") || "/";
    if (p === "..") {
      const parts = cwd.split("/").filter(Boolean);
      parts.pop();
      return "/" + parts.join("/") || "/";
    }
    if (p === ".") return cwd;
    return (cwd === "/" ? "" : cwd) + "/" + p;
  };

  const cmds = {
    help: () => {
      print("Available commands:", "#8be9fd");
      print("  ls [path]       list directory");
      print("  cd [path]       change directory");
      print("  cat [file]      read file contents");
      print("  pwd             print working directory");
      print("  whoami          current user");
      print("  hostname        show hostname");
      print("  uname [-a]      kernel info");
      print("  echo [text]     print text");
      print("  clear           clear terminal");
      print("  date            current date/time");
      print("  history         command history");
      print("  mkdir [name]    make directory");
      print("  touch [file]    create empty file");
      print("  ifconfig        network interfaces");
      print("  ip a            ip addresses");
      print("  ping [host]     ping host");
      print("  nmap [ip]       port scan (simulated)");
      print("  neofetch        system info");
    },
    clear: () => { out.innerHTML = ""; },
    pwd: () => print(cwd),
    whoami: () => print("flux"),
    hostname: () => print("overrun"),
    date: () => print(new Date().toString()),
    history: () => history.forEach((cmd, i) => print(`  ${i + 1}  ${cmd}`)),
    ls: (args) => {
      const target = resolvePath(args[0] || "");
      const node = vfsGet(target);
      if (!node) { print("ls: cannot access '" + (args[0] || cwd) + "': No such file or directory", "#ff5555"); return; }
      if (node.type === "file") { print(target.split("/").pop()); return; }
      const children = vfsChildren(target);
      if (!children.length) return;
      const names = children.map(c => c.type === "dir" ? c.name + "/" : c.name);
      print(names.join("  "), "#8be9fd");
    },
    cd: (args) => {
      const target = resolvePath(args[0] || "~");
      const norm = target.replace(/\/+$/, "") || "/";
      const node = vfsGet(norm);
      if (!node) { print("cd: " + (args[0] || "~") + ": No such file or directory", "#ff5555"); return; }
      if (node.type !== "dir") { print("cd: " + args[0] + ": Not a directory", "#ff5555"); return; }
      cwd = norm;
      setPrompt();
    },
    cat: (args) => {
      if (!args[0]) { print("cat: missing operand", "#ff5555"); return; }
      const target = resolvePath(args[0]);
      const node = vfsGet(target);
      if (!node) { print("cat: " + args[0] + ": No such file or directory", "#ff5555"); return; }
      if (node.type === "dir") { print("cat: " + args[0] + ": Is a directory", "#ff5555"); return; }
      print(node.content);
    },
    mkdir: (args) => {
      if (!args[0]) { print("mkdir: missing operand", "#ff5555"); return; }
      const target = resolvePath(args[0]);
      if (VFS[target]) { print("mkdir: cannot create directory '" + args[0] + "': File exists", "#ff5555"); return; }
      VFS[target] = { type: "dir" };
      print("");
    },
    touch: (args) => {
      if (!args[0]) { print("touch: missing file operand", "#ff5555"); return; }
      const target = resolvePath(args[0]);
      if (!VFS[target]) VFS[target] = { type: "file", content: "" };
    },
    echo: (args) => print(args.join(" ")),
    uname: (args) => {
      if (args[0] === "-a") print("Linux overrun 6.6.9-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.6.9-1kali1 (2024-01-08) x86_64 GNU/Linux");
      else print("Linux");
    },
    ifconfig: () => {
      print("eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500");
      print("      inet 192.168.1.105  netmask 255.255.255.0  broadcast 192.168.1.255");
      print("      ether 08:00:27:ab:cd:ef  txqueuelen 1000  (Ethernet)");
      print("");
      print("lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536");
      print("    inet 127.0.0.1  netmask 255.0.0.0");
    },
    "ip": (args) => {
      if (args[0] === "a" || args[0] === "addr") {
        print("1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN");
        print("    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00");
        print("    inet 127.0.0.1/8 scope host lo");
        print("2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 state UP");
        print("    link/ether 08:00:27:ab:cd:ef brd ff:ff:ff:ff:ff:ff");
        print("    inet 192.168.1.105/24 brd 192.168.1.255 scope global eth0");
      } else print("ip: command needs arguments");
    },
    ping: (args) => {
      const host = args[0] || "localhost";
      print(`PING ${host}: 56 data bytes`);
      [1,2,3].forEach((_, i) => setTimeout(() => print(`64 bytes from ${host}: icmp_seq=${i} ttl=64 time=${(Math.random()*2+0.4).toFixed(3)} ms`), i * 500));
      setTimeout(() => { print(`\n--- ${host} ping statistics ---`); print("3 packets transmitted, 3 received, 0% packet loss"); }, 1700);
    },
    nmap: (args) => {
      const host = args[0] || "192.168.1.1";
      print(`Starting Nmap 7.94 ( https://nmap.org ) at ${new Date().toLocaleString()}`, "#f1fa8c");
      setTimeout(() => {
        print(`Nmap scan report for ${host}`);
        print("Host is up (0.0012s latency).");
        print("Not shown: 995 closed tcp ports (reset)");
        print("PORT     STATE SERVICE");
        print("22/tcp   open  ssh");
        print("80/tcp   open  http");
        print("443/tcp  open  https");
        print("3306/tcp open  mysql");
        print("8080/tcp open  http-proxy");
        print(`\nNmap done: 1 IP address (1 host up) scanned in 2.31 seconds`, "#50fa7b");
      }, 1200);
    },
    neofetch: () => {
      print("       .-.          flux@overrun", "#50fa7b");
      print("      (.. |         ──────────────────────────", "#50fa7b");
      print("      <>  |         OS:     Kali GNU/Linux Rolling x86_64", "#50fa7b");
      print("     / --- \\        Kernel: 6.6.9-amd64", "#50fa7b");
      print("    ( |   | |       DE:     Xfce 4.18", "#50fa7b");
      print("  |\\_)___/\\)/\\      WM:     Xfwm4", "#50fa7b");
      print(" <__)------(__/     Shell:  zsh 5.9", "#50fa7b");
      print("                    CPU:    AMD Ryzen 9 9950X3D2 Dual Edition (64) @ 5.70GHz", "#50fa7b");
      print("                    GPU:    NVIDIA GeForce RTX 9090 Ti Ultra (48GB)", "#50fa7b");
      print("                    Memory: 3.2GiB / 192GiB (DDR5-8000)", "#50fa7b");
      print("                    Disk:   420GB / 8.0TB NVMe Gen 5", "#50fa7b");
      print("                    Uptime: 4 hours, 12 mins", "#50fa7b");
    },
  };

  inp.addEventListener("keydown", e => {
    if (e.key === "ArrowUp") {
      if (histIdx < history.length - 1) histIdx++;
      inp.value = history[history.length - 1 - histIdx] || "";
    }
    if (e.key === "ArrowDown") {
      if (histIdx > 0) histIdx--;
      else { histIdx = -1; inp.value = ""; return; }
      inp.value = history[history.length - 1 - histIdx] || "";
    }
    if (e.key !== "Enter") return;
    const raw = inp.value.trim();
    inp.value = "";
    histIdx = -1;
    if (!raw) return;
    history.push(raw);

    const promptText = "┌──(flux㉿overrun)-[" + cwd.replace("/home/flux", "~") + "]\n└─$ ";
    print(promptText + raw, "#bd93f9");

    const parts = raw.split(/\s+/);
    const cmd = parts[0];
    const args = parts.slice(1);

    if (cmds[cmd]) {
      cmds[cmd](args);
    } else if (cmd === "sudo") {
      print("[sudo] password for flux: ", "#f1fa8c");
      setTimeout(() => print("flux is not in the sudoers file. This incident will be reported.", "#ff5555"), 600);
    } else if (cmd === "exit" || cmd === "logout") {
      closeWin(id);
    } else if (cmd === "man") {
      print("RTFM — but this is a web sim, so no man pages here.", "#6272a4");
    } else {
      print(`zsh: command not found: ${cmd}`, "#ff5555");
    }
    out.scrollTop = out.scrollHeight;
  });

  wrap.addEventListener("click", () => inp.focus());
  setTimeout(() => inp.focus(), 50);

  createWindow(id, "flux@overrun: ~", wrap, 780, 500);
}

function buildFiles(startPath) {
  const id = "files";
  let cwd = startPath || "/home/flux";

  const wrap = document.createElement("div");
  wrap.className = "fm-wrap";

  const sidebar = document.createElement("div");
  sidebar.className = "fm-sidebar";

  const sidebarItems = [
    { label: "Home", path: "/home/flux", icon: "🏠" },
    { label: "Desktop", path: "/home/flux/Desktop", icon: "🖥️" },
    { label: "Documents", path: "/home/flux/Documents", icon: "📄" },
    { label: "Downloads", path: "/home/flux/Downloads", icon: "📥" },
    { label: "Pictures", path: "/home/flux/Pictures", icon: "🖼️" },
    { label: "File System", path: "/", icon: "💾" },
    { label: "Trash", path: null, icon: "🗑️" },
  ];

  sidebarItems.forEach(item => {
    const el = document.createElement("div");
    el.className = "fm-sidebar-item";
    el.innerHTML = `<span class="fm-si-icon">${item.icon}</span><span>${item.label}</span>`;
    el.addEventListener("click", () => {
      if (!item.path) return;
      cwd = item.path;
      renderFiles();
    });
    sidebar.appendChild(el);
  });

  const main = document.createElement("div");
  main.className = "fm-main";

  const toolbar = document.createElement("div");
  toolbar.className = "fm-toolbar";

  const backBtn = document.createElement("button");
  backBtn.className = "fm-btn";
  backBtn.innerText = "‹";
  backBtn.title = "Back";

  const fwdBtn = document.createElement("button");
  fwdBtn.className = "fm-btn";
  fwdBtn.innerText = "›";
  fwdBtn.title = "Forward";

  const upBtn = document.createElement("button");
  upBtn.className = "fm-btn";
  upBtn.innerText = "↑";
  upBtn.title = "Up";
  upBtn.addEventListener("click", () => {
    const parts = cwd.split("/").filter(Boolean);
    parts.pop();
    cwd = "/" + parts.join("/") || "/";
    renderFiles();
  });

  const pathBar = document.createElement("div");
  pathBar.className = "fm-pathbar";

  toolbar.appendChild(backBtn);
  toolbar.appendChild(fwdBtn);
  toolbar.appendChild(upBtn);
  toolbar.appendChild(pathBar);

  const grid = document.createElement("div");
  grid.className = "fm-grid";

  main.appendChild(toolbar);
  main.appendChild(grid);
  wrap.appendChild(sidebar);
  wrap.appendChild(main);

  function renderFiles() {
    grid.innerHTML = "";
    pathBar.innerText = cwd;

    const node = vfsGet(cwd);
    if (!node || node.type !== "dir") { grid.innerText = "Permission denied or invalid path."; return; }

    const children = vfsChildren(cwd);
    if (!children.length) {
      const empty = document.createElement("div");
      empty.className = "fm-empty";
      empty.innerText = "(empty)";
      grid.appendChild(empty);
      return;
    }

    children.forEach(child => {
      const item = document.createElement("div");
      item.className = "fm-item";
      const icon = child.type === "dir" ? "📁" : "📄";
      item.innerHTML = `<div class="fm-item-icon">${icon}</div><div class="fm-item-name">${child.name}</div>`;
      item.addEventListener("dblclick", () => {
        if (child.type === "dir") {
          cwd = child.path;
          renderFiles();
        } else {
          const fileNode = vfsGet(child.path);
          if (fileNode) openTextWindow(child.name, fileNode.content);
        }
      });
      grid.appendChild(item);
    });
  }

  renderFiles();
  createWindow(id, "File Manager", wrap, 800, 520);
}

function openTextWindow(name, content) {
  const wrap = document.createElement("div");
  wrap.className = "editor-wrap";
  const pre = document.createElement("pre");
  pre.className = "editor-pre";
  pre.textContent = content;
  wrap.appendChild(pre);
  createWindow("view-" + name, name, wrap, 640, 420);
}

function buildEditor() {
  const wrap = document.createElement("div");
  wrap.className = "editor-wrap";
  const ta = document.createElement("textarea");
  ta.className = "editor-ta";
  ta.placeholder = "Start typing...";
  wrap.appendChild(ta);
  createWindow("editor", "Text Editor", wrap, 720, 500);
  setTimeout(() => ta.focus(), 100);
}

function buildBrowser() {
  const id = "browser-" + Date.now();
  const wrap = document.createElement("div");
  wrap.className = "browser-wrap";

  const toolbar = document.createElement("div");
  toolbar.className = "browser-toolbar";

  const backBtn = document.createElement("button");
  backBtn.className = "browser-nav-btn";
  backBtn.title = "Back";
  backBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>`;

  const fwdBtn = document.createElement("button");
  fwdBtn.className = "browser-nav-btn";
  fwdBtn.title = "Forward";
  fwdBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`;

  const reloadBtn = document.createElement("button");
  reloadBtn.className = "browser-nav-btn";
  reloadBtn.title = "Reload";
  reloadBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>`;

  const homeBtn = document.createElement("button");
  homeBtn.className = "browser-nav-btn";
  homeBtn.title = "Home";
  homeBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`;

  const urlBar = document.createElement("input");
  urlBar.className = "browser-url-bar";
  urlBar.spellcheck = false;
  urlBar.autocomplete = "off";

  const goBtn = document.createElement("button");
  goBtn.className = "browser-go-btn";
  goBtn.innerText = "Go";

  toolbar.appendChild(backBtn);
  toolbar.appendChild(fwdBtn);
  toolbar.appendChild(reloadBtn);
  toolbar.appendChild(homeBtn);
  toolbar.appendChild(urlBar);
  toolbar.appendChild(goBtn);

  const frameWrap = document.createElement("div");
  frameWrap.className = "browser-frame-wrap";

  const frame = document.createElement("iframe");
  frame.className = "browser-frame";
  frame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms allow-popups");

  const overlay = document.createElement("div");
  overlay.className = "browser-overlay";
  overlay.innerHTML = `
    <div class="browser-start-page">
      <div style="font-size:64px;margin-bottom:16px;">🐉</div>
      <div class="bsp-title">Firefox ESR</div>
      <div class="bsp-sub">Kali Linux Web Browser</div>
      <div class="bsp-shortcuts">
        <div class="bsp-shortcut" data-url="https://kali.org">kali.org</div>
        <div class="bsp-shortcut" data-url="https://hackclub.com">hackclub.com</div>
        <div class="bsp-shortcut" data-url="https://github.com">github.com</div>
        <div class="bsp-shortcut" data-url="https://wikipedia.org">wikipedia.org</div>
        <div class="bsp-shortcut" data-url="https://duckduckgo.com">duckduckgo.com</div>
        <div class="bsp-shortcut" data-url="https://news.ycombinator.com">hackernews</div>
      </div>
    </div>
  `;

  frameWrap.appendChild(frame);
  frameWrap.appendChild(overlay);
  wrap.appendChild(toolbar);
  wrap.appendChild(frameWrap);

  const HOME = "about:blank";
  let currentUrl = "";

  function normalizeUrl(raw) {
    raw = raw.trim();
    if (!raw) return null;
    if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
    if (/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/.test(raw)) return "https://" + raw;
    return "https://duckduckgo.com/?q=" + encodeURIComponent(raw);
  }

  function showOverlay() { overlay.style.display = "flex"; frame.style.display = "none"; }
  function hideOverlay() { overlay.style.display = "none"; frame.style.display = "block"; }

  function navigate(raw) {
    const url = normalizeUrl(raw);
    if (!url) { showOverlay(); urlBar.value = ""; return; }

    urlBar.value = url;
    currentUrl = url;
    hideOverlay();
    frame.src = url;
  }

  urlBar.addEventListener("keydown", e => { if (e.key === "Enter") navigate(urlBar.value); });
  goBtn.addEventListener("click", () => navigate(urlBar.value));
  reloadBtn.addEventListener("click", () => { if (currentUrl) navigate(currentUrl); });
  homeBtn.addEventListener("click", () => { currentUrl = ""; showOverlay(); urlBar.value = ""; });
  backBtn.addEventListener("click", () => { try { frame.contentWindow.history.back(); } catch {} });
  fwdBtn.addEventListener("click", () => { try { frame.contentWindow.history.forward(); } catch {} });

  overlay.querySelectorAll(".bsp-shortcut").forEach(el => {
    el.addEventListener("click", () => navigate(el.dataset.url));
  });

  showOverlay();
  urlBar.placeholder = "Search or type a URL";

  createWindow(id, "Firefox ESR", wrap, 1000, 640);
  setTimeout(() => urlBar.focus(), 100);
}

function buildSysInfo() {
  const wrap = document.createElement("div");
  wrap.className = "sysinfo-wrap";

  const rows = [
    ["OS", "Kali GNU/Linux Rolling"],
    ["Kernel", "6.6.9-amd64"],
    ["Shell", "zsh 5.9"],
    ["DE / WM", "Xfce 4.18 / Xfwm4"],
    ["User", "flux"],
    ["Hostname", "overrun"],
    ["Uptime", "4h 12m"],
    ["CPU", "AMD Ryzen 9 9950X3D2 Dual Edition (64) @ 5.70GHz"],
    ["GPU", "NVIDIA GeForce RTX 9090 Ti Ultra 48GB"],
    ["RAM", "3.2 GiB / 192 GiB (DDR5-8000 MHz)"],
    ["Disk", "420 GB / 8.0 TB NVMe Gen 5"],
    ["Resolution", window.screen.width + "x" + window.screen.height],
  ];

  rows.forEach(([k, v]) => {
    const row = document.createElement("div");
    row.className = "sysinfo-row";
    row.innerHTML = `<span class="si-key">${k}</span><span class="si-val">${v}</span>`;
    wrap.appendChild(row);
  });

  createWindow("sysinfo", "System Information", wrap, 520, 440);
}

function buildSettings() {
  const wrap = document.createElement("div");
  wrap.className = "settings-wrap";

  const sections = [
    { label: "Theme", value: "Kali-Dark" },
    { label: "Icons", value: "Flat-Remix-Blue-Dark" },
    { label: "Font", value: "Noto Sans 10" },
    { label: "WM", value: "Xfwm4" },
    { label: "Terminal", value: "xfce4-terminal" },
    { label: "Version", value: "OverRun.sh v0.1.0-alpha" },
  ];

  sections.forEach(item => {
    const row = document.createElement("div");
    row.className = "settings-row";
    row.innerHTML = `<span class="set-key">${item.label}</span><span class="set-val">${item.value}</span>`;
    wrap.appendChild(row);
  });

  createWindow("settings", "Settings Manager", wrap, 480, 380);
}

function buildCalc() {
  const wrap = document.createElement("div");
  wrap.className = "calc-wrap";

  let expr = "";
  const display = document.createElement("div");
  display.className = "calc-display";
  display.innerText = "0";

  const buttons = [
    "C", "±", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "−",
    "1", "2", "3", "+",
    "0", ".", "⌫", "=",
  ];

  const grid = document.createElement("div");
  grid.className = "calc-grid";

  buttons.forEach(label => {
    const btn = document.createElement("button");
    btn.className = "calc-btn";
    if (["÷", "×", "−", "+", "="].includes(label)) btn.className += " calc-op";
    if (label === "=") btn.className += " calc-eq";
    if (label === "C") btn.className += " calc-clear";
    btn.innerText = label;
    btn.addEventListener("click", () => {
      if (label === "C") { expr = ""; display.innerText = "0"; return; }
      if (label === "⌫") { expr = expr.slice(0, -1); display.innerText = expr || "0"; return; }
      if (label === "=") {
        try {
          const safe = expr.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-");
          const result = Function('"use strict"; return (' + safe + ')')();
          display.innerText = String(parseFloat(result.toFixed(10)));
          expr = String(result);
        } catch { display.innerText = "Error"; expr = ""; }
        return;
      }
      if (label === "±") {
        try { expr = String(-parseFloat(expr)); display.innerText = expr; } catch {}
        return;
      }
      if (label === "%") {
        try { expr = String(parseFloat(expr) / 100); display.innerText = expr; } catch {}
        return;
      }
      expr += label;
      display.innerText = expr;
    });
    grid.appendChild(btn);
  });

  wrap.appendChild(display);
  wrap.appendChild(grid);
  createWindow("calc", "Calculator", wrap, 280, 380);
}