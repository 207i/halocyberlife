document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".neon-nav-toggle");
  const nav = document.querySelector(".neon-nav");

  // Toggle Menu
  if (toggle && nav) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isActive = nav.classList.toggle("active");
      toggle.setAttribute("aria-expanded", isActive);
    });

    // Close menu when clicking a link
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when clicking anywhere else
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Set current year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
