/* ========================================
   TEMPLO — Minimal Interactions
   No heavy libraries. Just what's needed.
   ======================================== */

(function() {
  'use strict';

  // ---- Nav scroll effect ----
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ---- Mobile menu ----
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('mobile-menu--open');
      document.body.style.overflow = menu.classList.contains('mobile-menu--open') ? 'hidden' : '';
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        menu.classList.remove('mobile-menu--open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 80;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ---- Scroll reveal (subtle) ----
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply to sections (excluding hero which has its own animation)
  document.querySelectorAll(
    '.positioning, .social-hub__intro, .social-card, .method__card, .experience__item, .audience__card, ' +
    '.results__content, .testimonial, .plan-card, .founder__grid, ' +
    '.community__item, .location__grid, .location__social, .faq__item, .final-cta__content'
  ).forEach(function(el) {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // ---- Active nav link highlight ----
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav__link');

  function highlightNav() {
    var scrollY = window.scrollY + 120;
    sections.forEach(function(section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function(link) {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + id) {
            link.style.color = 'var(--accent)';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });

})();
