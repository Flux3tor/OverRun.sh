import "./style.css";

const topbar = document.createElement("div");
topbar.id = "topbar";

const left = document.createElement("div");
left.className = "topbar-left";

const menuIcon = document.createElement("img");
menuIcon.src = "./assets/icons/menu.svg";
menuIcon.className = "panel-icon";

const lang = document.createElement("span");
lang.innerText = "us";

const accessibility = document.createElement("img");
accessibility.src = "./assets/icons/accessibility.svg";
accessibility.className = "panel-icon";

left.appendChild(menuIcon);
left.appendChild(lang);
left.appendChild(accessibility);

const right = document.createElement("div");
right.className = "topbar-right";

const dateTime = document.createElement("span");

const power = document.createElement("img");
power.src = "./assets/icons/power.svg";
power.className = "panel-icon";

right.appendChild(dateTime);
right.appendChild(power);

topbar.appendChild(left);
topbar.appendChild(right);

document.body.appendChild(topbar);

function updateDateTime(){
  const now = new Date();

  const options={
    day:"2-digit",
    month:"short",
    hour:"2-digit",
    minute:"2-digit"
  };

  dateTime.innerText=now.toLocaleString("en-GB",options);
}

setInterval(updateDateTime,1000);
updateDateTime();

const container=document.createElement("div");
container.id="login-container";

const avatar=document.createElement("img");
avatar.id="avatar";
avatar.src="./assets/kali-dragon.png";

container.appendChild(avatar);

const username=document.createElement("input");
username.className="input-field";
username.placeholder="Username";

const password=document.createElement("input");
password.className="input-field";
password.placeholder="Password";
password.type="password";

container.appendChild(username);
container.appendChild(password);

const buttonRow=document.createElement("div");
buttonRow.className="button-row";

const cancelBtn=document.createElement("button");
cancelBtn.className="cancel-btn";
cancelBtn.innerText="Cancel";

const loginBtn=document.createElement("button");
loginBtn.className="login-btn";
loginBtn.innerText="Log In";

buttonRow.appendChild(cancelBtn);
buttonRow.appendChild(loginBtn);

container.appendChild(buttonRow);

const errorMessage=document.createElement("div");
errorMessage.className="error-message";

container.appendChild(errorMessage);

const devlogHint=document.createElement("div");
devlogHint.className="devlog-hint";
devlogHint.innerHTML=
'ps: creds are in <a href="https://flavortown.hackclub.com/projects/14018" target="_blank">devlog #1</a>';

container.appendChild(devlogHint);

document.body.appendChild(container);

loginBtn.addEventListener("click",()=>{
  if(username.value==="Flux3tor" && password.value==="1247016"){
    startDesktop();
  }else{
    errorMessage.innerText="Incorrect password";
    container.classList.add("shake");
    setTimeout(()=>container.classList.remove("shake"),300);
  }
});

password.addEventListener("keydown",(e)=>{
  if(e.key==="Enter") loginBtn.click();
});

function startDesktop(){

  document.body.style.transition="opacity .4s";
  document.body.style.opacity="0";

  setTimeout(()=>{
    document.body.innerHTML="";
    launchDesktop();
    document.body.style.opacity="1";
  },400);
}

function launchDesktop(){

  document.body.style.background=
  'url("./assets/kali-wallpaper.jpg") center/cover no-repeat';

  const panel=document.createElement("div");
  panel.id="xfce-panel";

  const panelLeft=document.createElement("div");
  panelLeft.className="panel-left";

  const kaliIcon=document.createElement("img");
  kaliIcon.src="./assets/kali-icon.png";
  kaliIcon.className="panel-icon";

  const workspaceContainer=document.createElement("div");
  workspaceContainer.className="workspace-container";

  for(let i=1;i<=4;i++){
    const ws=document.createElement("div");
    ws.className="workspace";
    ws.innerText=i;
    workspaceContainer.appendChild(ws);
  }

  panelLeft.appendChild(kaliIcon);
  panelLeft.appendChild(workspaceContainer);

  const panelCenter=document.createElement("div");
  panelCenter.className="panel-center";

  const panelRight=document.createElement("div");
  panelRight.className="panel-right";

  const network=document.createElement("img");
  network.src="./assets/icons/network.svg";
  network.className="panel-icon";

  const volume=document.createElement("img");
  volume.src="./assets/icons/volume.svg";
  volume.className="panel-icon";

  const clock=document.createElement("span");

  panelRight.appendChild(network);
  panelRight.appendChild(volume);
  panelRight.appendChild(clock);

  panel.appendChild(panelLeft);
  panel.appendChild(panelCenter);
  panel.appendChild(panelRight);

  document.body.appendChild(panel);

  function updateClock(){
    const now=new Date();

    clock.innerText=now.toLocaleTimeString([],{
      hour:"2-digit",
      minute:"2-digit"
    });
  }

  setInterval(updateClock,1000);
  updateClock();
}