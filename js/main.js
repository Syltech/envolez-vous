const navbar = document.querySelector("#navbar");
const navbarTop = navbar.offsetTop;

const fb = document.querySelector("#fb");

const sections = document.querySelectorAll("body>section");

function scrollSpyNavbar() {
  const offset = window.pageYOffset;

  for (const el of navbar.children) {
    el.classList.remove("active");
  }

  if (offset >= navbarTop) {
    navbar.classList.add("sticky");
    fb.classList.add("top-corner");
  } else {
    navbar.classList.remove("sticky");
    fb.classList.remove("top-corner");
  }

  let topSection = "";
  for (const el of sections) {
    if (offset >= el.offsetTop) {
      topSection = el.id;
    }
  }

  try {
    document.querySelector(`[name=${topSection}]`).classList.add("active");
  } catch (e) {}
}

window.addEventListener("scroll", () => scrollSpyNavbar());
