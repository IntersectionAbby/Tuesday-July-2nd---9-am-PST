(function () {
  "use strict";

  var LOGO_URL = "/oren-logo.png";

  /** LeadConnector form embed — handled by iframe + form_embed.js */

  var modal = document.getElementById("rsvp-modal");
  var progressBar = document.querySelector(".scroll-progress");
  var mobileCta = document.querySelector(".mobile-cta-bar");

  function scrollToId(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function openModal() {
    if (!modal) return;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    var closeBtn = modal.querySelector(".rsvp-modal__close");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function onScroll() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? scrollTop / docHeight : 0;

    if (progressBar) {
      progressBar.style.width = progress * 100 + "%";
      progressBar.style.opacity = String(Math.min(progress * 1.2, 0.85));
    }

    if (mobileCta) {
      var show = scrollTop > window.innerHeight * 0.75;
      mobileCta.classList.toggle("is-visible", show);
    }
  }

  function bindModalTriggers() {
    document.querySelectorAll("[data-open-modal]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        openModal();
      });
    });

    if (modal) {
      modal
        .querySelector(".rsvp-modal__backdrop")
        ?.addEventListener("click", closeModal);
      modal
        .querySelector(".rsvp-modal__close")
        ?.addEventListener("click", closeModal);
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  }

  function bindSmoothNav() {
    document.querySelectorAll("[data-scroll-to]").forEach(function (link) {
      link.addEventListener("click", function (e) {
        var target = link.getAttribute("data-scroll-to");
        if (!target) return;
        e.preventDefault();
        scrollToId(target);
      });
    });
  }

  function initScrollReveal() {
    var nodes = document.querySelectorAll("[data-scroll-reveal]");
    if (!nodes.length) return;

    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      nodes.forEach(function (node) {
        node.classList.add("scroll-reveal--visible");
      });
      return;
    }

    function reveal(node) {
      var delay = Number(node.getAttribute("data-scroll-reveal-delay") || 0);
      window.setTimeout(function () {
        node.classList.add("scroll-reveal--visible");
      }, delay);
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach(function (node) {
      var isStagger = node.getAttribute("data-scroll-reveal") === "stagger";
      node.classList.add(isStagger ? "scroll-reveal-stagger" : "scroll-reveal");

      if (node.getBoundingClientRect().top < window.innerHeight * 0.92) {
        reveal(node);
      } else {
        observer.observe(node);
      }
    });
  }

  function initCountUp() {
    var nodes = document.querySelectorAll("[data-count-up]");
    if (!nodes.length) return;

    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function parseMetric(value) {
      var match = String(value).trim().match(/^([^\d]*)([\d.]+)(.*)$/);
      if (!match) return null;
      var numStr = match[2];
      return {
        prefix: match[1],
        target: parseFloat(numStr),
        suffix: match[3],
        decimals: numStr.indexOf(".") > -1 ? numStr.split(".")[1].length : 0,
      };
    }

    function formatMetric(parsed, current) {
      var n =
        parsed.decimals > 0 ? current.toFixed(parsed.decimals) : String(Math.round(current));
      return parsed.prefix + n + parsed.suffix;
    }

    nodes.forEach(function (node) {
      var targetValue = node.getAttribute("data-count-up");
      if (!targetValue) return;
      var parsed = parseMetric(targetValue);
      if (!parsed) return;

      if (prefersReduced) {
        node.textContent = targetValue;
        return;
      }

      var delay = Number(node.getAttribute("data-count-delay") || 0);
      var duration = 1600;
      var started = false;

      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting || started) return;
            started = true;
            observer.unobserve(node);

            window.setTimeout(function () {
              var startTime = 0;
              function step(now) {
                if (!startTime) startTime = now;
                var t = Math.min((now - startTime) / duration, 1);
                var eased = 1 - Math.pow(1 - t, 3);
                node.textContent = formatMetric(parsed, parsed.target * eased);
                if (t < 1) requestAnimationFrame(step);
              }
              requestAnimationFrame(step);
            }, delay);
          });
        },
        { threshold: 0.35, rootMargin: "0px 0px -5% 0px" },
      );

      observer.observe(node);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    bindModalTriggers();
    bindSmoothNav();
    initScrollReveal();
    initCountUp();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  });

  window.FindingWinnersWebinar = {
    openModal: openModal,
    closeModal: closeModal,
    scrollToId: scrollToId,
    logoUrl: LOGO_URL,
  };
})();
