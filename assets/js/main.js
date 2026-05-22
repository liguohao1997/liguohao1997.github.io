/* ------------------------------------------------------------
   Guohao Li — homepage scripts
   Footer year · mobile navigation · section highlighting
   ------------------------------------------------------------ */

// Current year in the footer
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const topNav = document.querySelector(".top-nav");

if (navToggle && topNav) {
  navToggle.addEventListener("click", () => {
    const open = topNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  topNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      topNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Highlight the nav link for the section currently in view
const sections = Array.from(document.querySelectorAll(".section[id]"));
const navLinks = Array.from(document.querySelectorAll('.top-nav a[href^="#"]'));

if (sections.length && navLinks.length && "IntersectionObserver" in window) {
  const linkFor = (id) =>
    navLinks.find((a) => a.getAttribute("href") === "#" + id);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => a.classList.remove("active"));
        const link = linkFor(entry.target.id);
        if (link) link.classList.add("active");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}
