const landing = document.querySelector("section.landing");
const about = document.querySelector("section.about");
const work = document.querySelector("section.work");
const education = document.querySelector("section.education");
const internship = document.querySelector("section.internship");

const pages = [landing, about, work, education, internship];
let scrollingEnabled = true;

pages.forEach((el) => {
  console.log(el);
});

window.onwheel = (e) => {
  const viewportHeight = window.innerHeight;
  //   console.log(e.path.indexOf(landing));

  if (!scrollingEnabled) {
    return;
  }

  const scrollToPage = getPageSectionInRelationToScroll(e);
  console.log(scrollToPage);

  if (typeof scrollToPage === "string") {
    return;
  }

  const targetIndex = pages.indexOf(scrollToPage) + e.deltaY / 100;
  console.log(targetIndex);
  pages[targetIndex].scrollIntoView({ block: "center", inline: "center" });
};

const getPageSectionInRelationToScroll = (e) => {
  let sectionIndex = -1;
  for (let i = 0; i <= pages.length; i++) {
    console.log("iteration: " + i);
    if (sectionIndex == -1) {
      sectionIndex = e.path.indexOf(pages[i]);
    } else if (sectionIndex != -1) {
      return e.path[sectionIndex];
    }
  }

  return "Page not found";
};
