let thumbsEl = document.querySelector("#thumbs");
console.log(thumbsEl);
thumbsEl.addEventListener("click", eventHandler);
function eventHandler(event) {
  event.preventDefault();
  const el = event.target;
  if (el.tagName === "IMG") {
    let largeImg = document.getElementById("largeImg");
    largeImg.src = el.src;
  }
}
