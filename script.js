document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (!toggle || !nav) return;

  // OPEN / CLOSE
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
  });

  // Links schließen Menü (wichtig für UX)
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

  // ESC schließt Menü
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      nav.classList.remove("active");
    }
  });

});