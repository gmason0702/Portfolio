const navBackground = document.querySelector(".navigation__background");
const navLink = document.querySelector(".navigation__link");
const navLinkHome = document.getElementById("nav-home");
const navLinkContact = document.getElementById("nav-contact");
const navLinkProjects = document.getElementById("nav-projects");
const navLinkResume = document.getElementById("nav-resume");
const navCheckbox = document.getElementById("navi-toggle");

navLinkHome.addEventListener("click", function () {
  navBackground.style.visibility = "hidden";
  navLinkHome.style.visibility = "hidden";
  navLinkContact.style.visibility = "hidden";
  navLinkResume.style.visibility = "hidden";
  navLinkProjects.style.visibility = "hidden";
  navCheckbox.checked = false;
});
navLinkContact.addEventListener("click", function () {
  navBackground.style.visibility = "hidden";
  navLinkHome.style.visibility = "hidden";
  navLinkContact.style.visibility = "hidden";
  navLinkResume.style.visibility = "hidden";
  navLinkProjects.style.visibility = "hidden";
  navCheckbox.checked = false;
});
navLinkProjects.addEventListener("click", function () {
  navBackground.style.visibility = "hidden";
  navLinkHome.style.visibility = "hidden";
  navLinkContact.style.visibility = "hidden";
  navLinkResume.style.visibility = "hidden";
  navLinkProjects.style.visibility = "hidden";
  navCheckbox.checked = false;
});
navLinkResume.addEventListener("click", function () {
  navBackground.style.visibility = "hidden";
  navLinkHome.style.visibility = "hidden";
  navLinkContact.style.visibility = "hidden";
  navLinkResume.style.visibility = "hidden";
  navLinkProjects.style.visibility = "hidden";
  navCheckbox.checked = false;
});

navCheckbox.addEventListener("click", function () {
  navBackground.style.visibility = "visible";
  navLinkHome.style.visibility = "visible";
  navLinkContact.style.visibility = "visible";
  navLinkResume.style.visibility = "visible";
  navLinkProjects.style.visibility = "visible";
});
