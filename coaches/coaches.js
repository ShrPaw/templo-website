/* ============================================================
   COACHES PAGE — /coaches/
   Renders the team grid from shared coach data
   ============================================================ */
(function() {
  'use strict';

  // Coach data — mirrors script.js exactly (no invention)
  var coaches = [
    {
      id: 'lucas',
      name: 'Lucas Bustamante',
      alias: 'Lucoach',
      role: 'Fundador',
      isFounder: true,
      initial: 'L',
      photo: '../assets/placeholders/coach-lucas.webp',
      specialtyIcon: 'founder',
      mission: 'Guiar a las personas a entrenar con intención, técnica y disciplina.',
      vision: 'Construir un estudio donde cada meta tenga método, dirección y carácter.',
      ability: 'Leer el cuerpo en movimiento y corregir el detalle que cambia el entrenamiento.',
      quote: 'Entrenar no es repetir. Es construirte con intención.',
      whatsappMessage: 'Hola, me interesa recibir orientación en TEMPLO. ¿Me pueden ayudar con la disponibilidad de Lucas?',
      socials: {}
    },
    {
      id: 'nicolas-zegarra',
      name: 'Nicolas Zegarra',
      initial: 'NZ',
      photo: '../assets/placeholders/coach-nicolas-z.webp',
      specialtyIcon: 'precision',
      ability: 'Precisión técnica y progresión estructurada para cada nivel.',
      quote: 'La técnica bien aplicada es el atajo que todos ignoran.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Nicolas Zegarra. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'andres-balderrama',
      name: 'Andres Balderrama',
      initial: 'AB',
      photo: '../assets/placeholders/coach-andres.webp',
      specialtyIcon: 'intensity',
      ability: 'Intensidad controlada y capacidad de llevar al límite sin perder forma.',
      quote: 'El esfuerzo sin técnica se pierde. La técnica sin esfuerzo no avanza.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Andres Balderrama. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'nicolas-aranibar',
      name: 'Nicolas Aranibar',
      initial: 'NA',
      photo: '../assets/placeholders/coach-nicolas-a.webp',
      specialtyIcon: 'calisthenics',
      ability: 'Dominio corporal y progresiones de calistenia desde cero hasta avanzado.',
      quote: 'Tu cuerpo es la máquina. Aprende a usarla.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Nicolas Aranibar. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'andrea-sejas',
      name: 'Andrea Sejas',
      initial: 'AS',
      photo: '../assets/placeholders/coach-andrea.webp',
      specialtyIcon: 'strength',
      ability: 'Entrenamiento enfocado en fuerza, tonificación y confianza corporal.',
      quote: 'Fuerte no es un físico. Es una decisión que se entrena.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Andrea Sejas. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'santiago-lavayen',
      name: 'Santiago Lavayen',
      initial: 'SL',
      photo: '../assets/placeholders/coach-santiago-l.webp',
      specialtyIcon: 'functional',
      ability: 'Funcional, resistencia y acondicionamiento desde múltiples ángulos.',
      quote: 'El cuerpo se adapta. Tu trabajo es exigirle que lo haga bien.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Santiago Lavayen. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'oscar-encinas',
      name: 'Oscar Encinas',
      initial: 'OE',
      photo: '../assets/placeholders/coach-oscar.webp',
      specialtyIcon: 'power',
      ability: 'Fuerza aplicada y técnica de levantamiento con atención al detalle.',
      quote: 'Cada repetición cuenta si la haces con intención.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Oscar Encinas. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'santiago-rojas',
      name: 'Santiago Rojas',
      initial: 'SR',
      photo: '../assets/placeholders/coach-santiago-r.webp',
      specialtyIcon: 'guide',
      ability: 'Acompañamiento, seguimiento y motivación constante durante el proceso.',
      quote: 'Aparecer es la mitad. Sostenerlo es lo que construye.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Santiago Rojas. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    }
  ];

  // Specialty icons — mirrors script.js exactly
  var specialtyIcons = {
    founder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9"/></svg>',
    precision: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>',
    intensity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M13 2 L8 14 L12 14 L11 22 L18 10 L14 10 L17 2Z"/></svg>',
    calisthenics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><line x1="3" y1="8" x2="21" y2="8"/><circle cx="12" cy="16" r="3"/><line x1="12" y1="13" x2="12" y2="8"/></svg>',
    strength: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 4 C12 4 8 8 8 14 C8 18 10 20 12 20 C14 20 16 18 16 14 C16 8 12 4 12 4Z"/><line x1="12" y1="14" x2="12" y2="20" opacity="0.4"/></svg>',
    functional: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M4 20 L10 8 L14 16 L20 4"/><circle cx="10" cy="8" r="1.5" fill="currentColor" opacity="0.5"/><circle cx="20" cy="4" r="1.5" fill="currentColor" opacity="0.5"/></svg>',
    power: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="2" y="10" width="4" height="4" rx="0.5"/><rect x="18" y="10" width="4" height="4" rx="0.5"/><line x1="6" y1="12" x2="18" y2="12"/><rect x="7" y="8" width="3" height="8" rx="0.5"/><rect x="14" y="8" width="3" height="8" rx="0.5"/></svg>',
    guide: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="8"/><line x1="12" y1="4" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="4" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="20" y2="12"/></svg>'
  };

  function getInstagramSvg() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>';
  }

  function getSpecialtyIcon(type) {
    return specialtyIcons[type] || specialtyIcons.guide;
  }

  // Fill founder specialty icon
  var founderIconEl = document.querySelector('.founder-card__specialty-icon');
  if (founderIconEl) {
    founderIconEl.innerHTML = getSpecialtyIcon('founder');
  }

  // Render team grid (non-founders only)
  var grid = document.getElementById('teamGrid');
  if (!grid) return;

  var teamCoaches = coaches.filter(function(c) { return !c.isFounder; });
  var html = '';

  teamCoaches.forEach(function(coach) {
    var socialsHtml = '';
    var socialItems = '';

    if (coach.socials && coach.socials.instagram) {
      socialItems += '<a href="' + coach.socials.instagram + '" class="team-card__social-link" target="_blank" rel="noopener" aria-label="Instagram de ' + coach.name + '">' + getInstagramSvg() + '</a>';
    }
    if (socialItems) {
      socialsHtml = '<div class="team-card__socials">' + socialItems + '</div>';
    }

    var specialtyHtml = '<div class="team-card__specialty-icon">' + getSpecialtyIcon(coach.specialtyIcon) + '</div>';
    var portraitHtml = coach.photo
      ? '<div class="team-card__portrait"><img src="' + coach.photo + '" alt="' + coach.name + ' - Coach en TEMPLO" loading="lazy" width="68" height="68">' + specialtyHtml + '</div>'
      : '<div class="team-card__portrait"><span class="team-card__initial">' + coach.initial + '</span>' + specialtyHtml + '</div>';

    html += '<article class="team-card">' +
      portraitHtml +
      '<h3 class="team-card__name">' + coach.name + '</h3>' +
      '<p class="team-card__ability">' + coach.ability + '</p>' +
      '<div class="team-card__quote">"' + coach.quote + '"</div>' +
      socialsHtml +
      '<a href="https://wa.me/59172001680?text=' + encodeURIComponent(coach.whatsappMessage) + '" class="btn btn--ghost team-card__cta" target="_blank" rel="noopener" data-cta="coach-' + coach.id + '-whatsapp">Consultar con ' + coach.name.split(' ')[0] + '</a>' +
      '</article>';
  });

  grid.innerHTML = html;

  // Reveal observer — same pattern as homepage
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.team-card').forEach(function(card) {
    observer.observe(card);
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
