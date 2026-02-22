import "./style.css";

const topbar = document.createElement("div");
topbar.id = "topbar";

const topbarRight = document.createElement("div");
topbarRight.id = "topbar-right";

topbar.appendChild(topbarRight);
document.body.appendChild(topbar);

function updateDateTime() {
  const now = new Date();

  const options = { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" };
  const formatted = now.toLocaleString("en-US", options);

  topbarRight.innerText = 'US   ${formatted}';
}

setInterval(updateDateTime, 1000);
updateDateTime();

const container = document.createElement("div");
container.id = "login-container";

const avatar = document.createElement("img");
avatar.id = "avatar";
avatar.src = "/assets/kali-dragon.svg";

container.appendChild(avatar);

const username = document.createElement("input");
username.className = "input-field";
username.placeholder = "Username";
container.appendChild(username);

const password = document.createElement("input");
password.className = "input-field";
password.placeholder = "Password";
password.type = "password";
container.appendChild(password);

const buttonRow = document.createElement("div");
buttonRow.className = "button-row"

const cancelBtn = document.createElement("button");
cancelBtn.className = "cancel-btn";
cancelBtn.innerText = "Cancel";

const loginBtn = document.createElement("button");
loginBtn.className = "login-btn";
loginBtn.innerText = "Log In";

const errorMessage = document.createElement("div");
errorMessage.style.color = "red";
errorMessage.style.fontSize = "12px";
errorMessage.style.marginTop = "8px";
container.appendChild(errorMessage);

loginBtn.addEventListener("click", () => {
  if (username.value === "Flux3tor" && password.value === "1247016") {
    startDesktop();
  } else {
    errorMessage.innerText = "Incorrect password";
  }
});

password.addEventListener("keydown", (e) => {
  if (e.key === "Enter") loginBtn.click();
});

function startDesktop() {
  document.body.innerHTML = "";
  document.body.style.background = "black";

  const desktop = document.createElement("div");
  desktop.innerText = "Welcome to Kali Desktop";
  desktop.style.color = "white";
  desktop.style.fontSize = "24px";
  desktop.style.position = "absolute";
  desktop.style.top = "50%";
  desktop.style.left = "50%";
  desktop.style.transform = "translate(-50%, -50%)";

  document.body.appendChild(desktop);
}

buttonRow.appendChild(cancelBtn);
buttonRow.appendChild(loginBtn);

container.appendChild(buttonRow)

document.body.appendChild(container);