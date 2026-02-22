import "./style.css"

const panel = document.createElement("div");
panel.id = "xfce-panel";

const panelLeft = document.createElement("div");
panelLeft.className = "panel-left";

const panelCenter = document.createElement("div");
panelCenter.className = "panel-center";

const panelRight = document.createElement("div");
panelRight.className = "panel-right";

panel.appendChild(panelLeft);
panel.appendChild(panelCenter);
panel.appendChild(panelRight);

document.body.appendChild(panel);