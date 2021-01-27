let list = document.getElementsByTagName("li");
let selectedLi = null;
for (let li of list) {
  li.addEventListener("click", eventHandler);
  function eventHandler(event) {
    li.classList.toggle("selected");
    if (selectedLi !== null) {
      selectedLi.classList.remove("selected");
    }
    selectedLi = li;
  }
}
