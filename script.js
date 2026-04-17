document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (!toggle || !nav) {
    console.error("Burger Menü nicht gefunden!");
    return;
  }

  // =========================
  // OPEN / CLOSE TOGGLE
  // =========================
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
  });

  // =========================
  // LINKS SCHLIESSEN MENÜ
  // =========================
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

  // =========================
  // ESC SCHLIESST MENÜ
  // =========================
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      nav.classList.remove("active");
    }
  });

  // =========================
  // OPTIONAL: CLICK OUTSIDE
  // (SAFE VERSION, KEIN BUG)
  // =========================
  document.addEventListener("click", (e) => {
    const isClickInsideMenu = nav.contains(e.target);
    const isClickButton = toggle.contains(e.target);

    if (!isClickInsideMenu && !isClickButton) {
      nav.classList.remove("active");
    }
  });

});


