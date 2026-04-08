const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");
const visitButton = document.querySelector(".visit-button");
const linkedinLogo = document.querySelector("#linkedinLogo");
const githubLogo = document.querySelector("#githubLogo");
const contactButton = document.querySelector("#contact-button");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

visitButton.onclick = () => {
  window.open("https://github.com/BraidenJH", "_blank", "noopener,noreferrer");
};

linkedinLogo.onclick = () => {
  window.open(
    "https://www.linkedin.com/in/braidenjh/",
    "_blank",
    "noopener,noreferrer",
  );
};

githubLogo.onclick = () => {
  window.open("https://github.com/BraidenJH", "_blank", "noopener,noreferrer");
};

contactButton.onclick = () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
};
