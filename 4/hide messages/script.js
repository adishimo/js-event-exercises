let msgs = document.getElementsByClassName("pane");
for (let msg of msgs) {
  msg.onclick = (e) => msg.remove();
}
