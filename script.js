
document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (!toggle || !nav) {
    console.error("Burger Menü nicht gefunden!");
    return;
  }

  // Verhindert Doppelauslösung bei Touch + Click
  let touchUsed = false;

  function toggleMenu(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    nav.classList.toggle("active");
  }

  function closeMenu() {
    nav.classList.remove("active");
  }

  // =========================
  // CLICK (Desktop / normale Browser)
  // =========================
  toggle.addEventListener("click", (e) => {
    if (touchUsed) {
      touchUsed = false;
      return;
    }
    toggleMenu(e);
  });

  // =========================
  // TOUCHSTART (iPad / iPhone Safari Fix)
  // =========================
  toggle.addEventListener("touchstart", (e) => {
    touchUsed = true;
    toggleMenu(e);
  }, { passive: false });

  // =========================
  // LINKS SCHLIESSEN MENÜ
  // =========================
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
   
    });
  });

  // =========================
  // ESC SCHLIESST MENÜ
  // =========================
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });

  // =========================
  // CLICK OUTSIDE
  // =========================
  document.addEventListener("click", (e) => {
    const isClickInsideMenu = nav.contains(e.target);
    const isClickButton = toggle.contains(e.target);

    if (!isClickInsideMenu && !isClickButton) {
      closeMenu();
    }
  });

  // =========================
  // DESKTOP RESET
  // =========================
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      closeMenu();
    }
  });

});


