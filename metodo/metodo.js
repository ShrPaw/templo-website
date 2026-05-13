/* ============================================================
   METODO PAGE — /metodo/
   Intersection reveals and nav behavior
   ============================================================ */
(function() {
  'use strict';

  // Pillar reveal observer
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.metodo-pillar').forEach(function(el) {
    observer.observe(el);
  });

  // Nav scroll behavior
  var nav = document.getElementById('nav');
  function handleScroll() {
    if (window.scrollY > 60) nav.classList.add('nav--scrolled');
    else nav.classList.remove('nav--scrolled');
  }
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Mobile menu
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      var isOpen = menu.classList.toggle('mobile-menu--open');
      toggle.classList.toggle('nav__toggle--active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        menu.classList.remove('mobile-menu--open');
        toggle.classList.remove('nav__toggle--active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
})();
