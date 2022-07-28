const clickables = document.querySelectorAll("#clickToExpand");

clickables.forEach((element) => {
  element.addEventListener("click", () => {
    handleInteraction(element);
  });

  element.addEventListener("focus", () => {
    handleInteraction(element);
  });
});

let previouslyClicked = null;
let inProgress = false;
const handleInteraction = (element) => {
  const module = element.parentElement;

  if (previouslyClicked === module) return;

  module.classList.toggle("expanded");

  if (previouslyClicked !== null) {
    previouslyClicked.classList.remove("expanded");
  }

  previouslyClicked = module;
};
