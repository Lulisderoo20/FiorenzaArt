(function () {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (window.AOS) {
    window.AOS.init({
      duration: 850,
      once: true,
      easing: "ease-out-cubic",
    });
  }
})();
