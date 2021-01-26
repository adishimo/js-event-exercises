let tree = document.getElementById("tree");
let lis = document.querySelectorAll("li");

for (li of lis) {
  let span = document.createElement("span");
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    let childCont = e.target.parentNode.querySelector("ul");
    if (childCont) {
      childCont.hidden = !childCont.hidden;
    }
  }
});
