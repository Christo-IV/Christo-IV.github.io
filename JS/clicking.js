const clickables = document.querySelectorAll("#clickToExpand");

// TODO - Fix bug where clicking on a previously clicked element causes it to close.
// Possible cause is the second event listener

clickables.forEach((element) => {
  element.addEventListener("click", () => {
    handleClick(element);
  });

  element.addEventListener("focus", () => {
    handleClick(element);
  });
});

let previouslyClicked = null;
const handleClick = (element) => {
  const module = element.parentElement;
  module.classList.toggle("expanded");

  if (previouslyClicked === module) return;

  if (previouslyClicked !== null) {
    previouslyClicked.classList.remove("expanded");
  }

  previouslyClicked = module;
};
