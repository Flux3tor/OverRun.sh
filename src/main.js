import "./style.css";

const topbar = document.createElement("div");
topbar.id = "topbar";

const topbarRight = document.createElement("div");
topbarRight.id = "topbar-right";

const accessibilityIcon = document.createElement("div");
accessibilityIcon.className = "topbar-icon";
accessibilityIcon.innerText = "♿";

const powerIcon = document.createElement("div");
powerIcon.className = "topbar-icon";
powerIcon.innerText = "Power";

const dateTime = document.createElement("div");

topbarRight.appendChild(accessibilityIcon);
topbarRight.appendChild(powerIcon);
topbarRight.appendChild(dateTime);

topbar.appendChild(topbarRight);
document.body.appendChild(topbar);

function updateDateTime() {
  const now = new Date();
  const options = {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  };
  dateTime.innerText = `US   ${now.toLocaleString("en-US", options)}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();

const container = document.createElement("div");
container.id = "login-container";

const avatar = document.createElement("img");
avatar.id = "avatar";
avatar.src = "./assets/kali-dragon.png";

container.appendChild(avatar);

const username = document.createElement("input");
username.className = "input-field";
username.placeholder = "Username";

const password = document.createElement("input");
password.className = "input-field";
password.placeholder = "Password";
password.type = "password";

container.appendChild(username);
container.appendChild(password);

const buttonRow = document.createElement("div");
buttonRow.className = "button-row";

const cancelBtn = document.createElement("button");
cancelBtn.className = "cancel-btn";
cancelBtn.innerText = "Cancel";

const loginBtn = document.createElement("button");
loginBtn.className = "login-btn";
loginBtn.innerText = "Log In";

buttonRow.appendChild(cancelBtn);
buttonRow.appendChild(loginBtn);
container.appendChild(buttonRow);

const errorMessage = document.createElement("div");
errorMessage.className = "error-message";
container.appendChild(errorMessage);

const devlogHint = document.createElement("div");
devlogHint.className = "devlog-hint";
devlogHint.innerHTML =
  'ps: creds are in <a href="https://flavortown.hackclub.com/projects/14018" target="_blank">devlog #1</a>';
container.appendChild(devlogHint);

document.body.appendChild(container);

loginBtn.addEventListener("click", () => {
  if (username.value === "Flux3tor" && password.value === "1247016") {
    startDesktop();
  } else {
    errorMessage.innerText = "Incorrect password";
    container.classList.add("shake");
    setTimeout(() => container.classList.remove("shake"), 300);
  }
});

password.addEventListener("keydown", (e) => {
  if (e.key === "Enter") loginBtn.click();
});

function startDesktop() {
  document.body.style.transition = "opacity 0.4s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    document.body.innerHTML = "";
    launchDesktop();
    document.body.style.opacity = "1";
  }, 400);
}

function launchDesktop() {
  document.body.style.background =
    'url("/assets/kali-wallpaper.jpg") center/cover no-repeat';

  const panel = document.createElement("div");
  panel.id = "xfce-panel";

  const panelLeft = document.createElement("div");
  panelLeft.className = "panel-left";
  panelLeft.innerText = "Applications";

  const panelCenter = document.createElement("div");
  panelCenter.className = "panel-center";

  const panelRight = document.createElement("div");
  panelRight.className = "panel-right";

  const desktopClock = document.createElement("div");

  panelRight.appendChild(desktopClock);

  panel.appendChild(panelLeft);
  panel.appendChild(panelCenter);
  panel.appendChild(panelRight);

  document.body.appendChild(panel);

  function updateDesktopClock() {
    const now = new Date();
    desktopClock.innerText = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  setInterval(updateDesktopClock, 1000);
  updateDesktopClock();
}