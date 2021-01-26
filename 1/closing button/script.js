let msgs = document.getElementsByClassName("pane");
for (let msg of msgs) {
  let button = document.createElement("button");
  msg.appendChild(button);
  button.textContent = "[x]";
  button.onclick = (e) => msg.remove();
}
