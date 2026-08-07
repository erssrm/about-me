(function () {
  "use strict";

  var root = document.documentElement;
  var THEME_KEY = "srm-theme";

  function applyTheme(theme) {
    if (theme === "dark" || theme === "light") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function currentTheme() {
    var stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  applyTheme(localStorage.getItem(THEME_KEY));

  var themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

  var navToggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Project detail modals -----------------------------------------------
  var backdrop = document.getElementById("modal-backdrop");
  var openTrigger = null;
  var galleryTimer = null;
  var GALLERY_INTERVAL_MS = 3500;

  function buildGalleryDots(gallery, images, goToIndex) {
    var existing = gallery.parentNode.querySelector(".modal__gallery-dots");
    if (existing) existing.remove();

    var dots = document.createElement("div");
    dots.className = "modal__gallery-dots";
    var buttons = images.map(function (img, i) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "modal__gallery-dot";
      dot.setAttribute("aria-label", "Show image " + (i + 1) + " of " + images.length);
      dot.addEventListener("click", function () {
        goToIndex(i, true);
      });
      dots.appendChild(dot);
      return dot;
    });
    gallery.insertAdjacentElement("afterend", dots);

    return function setActive(i) {
      buttons.forEach(function (dot, di) {
        dot.classList.toggle("is-active", di === i);
      });
    };
  }

  function startGalleryAutoSlide(modal) {
    var gallery = modal.querySelector(".modal__gallery");
    if (!gallery) return;
    var images = Array.prototype.slice.call(gallery.querySelectorAll("img"));
    if (images.length < 2) return;

    var index = 0;
    var setActiveDot = buildGalleryDots(gallery, images, goToIndex);
    setActiveDot(0);

    function goToIndex(i, userInitiated) {
      index = i;
      gallery.scrollTo({ left: images[index].offsetLeft, behavior: "smooth" });
      setActiveDot(index);
      if (userInitiated) stopOnInteraction();
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    galleryTimer = setInterval(function () {
      goToIndex((index + 1) % images.length, false);
    }, GALLERY_INTERVAL_MS);

    function stopOnInteraction() {
      clearInterval(galleryTimer);
      galleryTimer = null;
      gallery.removeEventListener("pointerdown", stopOnInteraction);
      gallery.removeEventListener("wheel", stopOnInteraction);
    }
    gallery.addEventListener("pointerdown", stopOnInteraction, { once: true });
    gallery.addEventListener("wheel", stopOnInteraction, { once: true });
  }

  function stopGalleryAutoSlide() {
    if (galleryTimer) {
      clearInterval(galleryTimer);
      galleryTimer = null;
    }
  }

  function openModal(modal) {
    if (!modal) return;
    openTrigger = document.activeElement;
    modal.hidden = false;
    if (backdrop) backdrop.hidden = false;
    document.body.style.overflow = "hidden";
    var closeBtn = modal.querySelector("[data-modal-close]");
    if (closeBtn) closeBtn.focus();
    startGalleryAutoSlide(modal);
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.hidden = true;
    if (backdrop) backdrop.hidden = true;
    document.body.style.overflow = "";
    stopGalleryAutoSlide();
    if (openTrigger && typeof openTrigger.focus === "function") {
      openTrigger.focus();
    }
  }

  function currentOpenModal() {
    return document.querySelector(".modal:not([hidden])");
  }

  document.querySelectorAll("[data-modal]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      openModal(document.getElementById(trigger.getAttribute("data-modal")));
    });
  });

  document.querySelectorAll("[data-modal-close]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      closeModal(btn.closest(".modal"));
    });
  });

  if (backdrop) {
    backdrop.addEventListener("click", function () {
      closeModal(currentOpenModal());
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal(currentOpenModal());
    }
  });

  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navAnchors = Array.prototype.slice.call(document.querySelectorAll(".site-nav__links a"));

  if (sections.length && navAnchors.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var id = entry.target.getAttribute("id");
          var link = navAnchors.filter(function (a) {
            return a.getAttribute("href") === "#" + id;
          })[0];
          if (!link) return;
          if (entry.isIntersecting) {
            navAnchors.forEach(function (a) {
              a.classList.remove("is-active");
            });
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  var yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
