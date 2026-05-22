const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}
