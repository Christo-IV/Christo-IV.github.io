const clickables = document.querySelectorAll("#clickToExpand");

clickables.forEach((element) => {
  element.addEventListener("click", () => {
    const module = element.parentElement;
    resetExpanded(module);
    module.classList.toggle("expanded");
  });
});

const resetExpanded = (expandedElement) => {
  // "expandedElement" is used to specify an element which is to be ignored in this function.
  // Done so to allow for collapsing of already expanded elements.

  // Removes the "expanded" class from all elements.
  // This is to make only one description be expanded at once.
  const expandedElements = document.querySelectorAll(".expanded");

  if (expandedElements.length < 1) {
    return;
  }

  if (expandedElements[0] == expandedElement) {
    return;
  }

  expandedElements.forEach((element) => {
    element.classList.remove("expanded");
  });
};
