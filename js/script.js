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

// 3D tilt effect on grid cards
const gridCards = document.querySelectorAll(".grid-card");

gridCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(600px) rotateX(0) rotateY(0) scale(1)";
  });
});
