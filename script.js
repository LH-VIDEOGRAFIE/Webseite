
document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (!toggle || !nav) {
    console.error("Burger Menü nicht gefunden!");
    return;
  }

  let touchUsed = false;

  function openCloseMenu(e) {
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
  // BUTTON CLICK
  // =========================
  toggle.addEventListener("click", (e) => {
    if (touchUsed) {
      touchUsed = false;
      return;
    }
    openCloseMenu(e);
  });

  // =========================
  // TOUCH FIX (iPad/iPhone)
  // =========================
  toggle.addEventListener("touchstart", (e) => {
    touchUsed = true;
    openCloseMenu(e);
  }, { passive: false });

  // =========================
  // LINKS SCHLIESSEN MENÜ
  // =========================
  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", closeMenu);

    link.addEventListener("touchend", () => {
      closeMenu();
    });

  });

  // =========================
  // KLICK AUSSERHALB
  // =========================
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  // =========================
  // ESC
  // =========================
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // =========================
  // RESET BEI DESKTOP
  // =========================
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      closeMenu();
    }
  });


});

