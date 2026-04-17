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




document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.getElementById("header-placeholder");

    if (headerContainer) {
        fetch("header.html")
            .then(response => response.text())
            .then(data => {
                headerContainer.innerHTML = data;
                initMenu();
            })
            .catch(error => console.error("Header konnte nicht geladen werden:", error));
    } else {
        initMenu();
    }

    function initMenu() {
        const toggle = document.getElementById("menu-toggle");
        const menu = document.getElementById("nav-menu");

        if (!toggle || !menu) return;

        // Burger öffnen/schließen
        toggle.addEventListener("click", function (e) {
            e.stopPropagation();
            menu.classList.toggle("active");
        });

        // Klick auf Link = Menü schließen
        const links = menu.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", function () {
                menu.classList.remove("active");
            });
        });

        // Klick außerhalb = schließen
        document.addEventListener("click", function (e) {
            if (!menu.contains(e.target) && !toggle.contains(e.target)) {
                menu.classList.remove("active");
            }
        });

        // Desktop-Wechsel = Menü reset
        window.addEventListener("resize", function () {
            if (window.innerWidth > 1024) {
                menu.classList.remove("active");
            }
        });
    }
});
