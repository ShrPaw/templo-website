/* ========================================
   TEMPLO — Coaches, Decision Tree & Interactions
   No heavy libraries. Vanilla JS only.
   ======================================== */

(function() {
  'use strict';

  // ============================================================
  // COACH DATA
  // Replace placeholder names/photos/specialties when available.
  // Stats are specialty indicators, NOT medical credentials.
  // ============================================================
  var coaches = [
    {
      id: 'lucas',
      name: 'Lucas',
      role: 'Fundador / Dirección del Método',
      specialty: 'Estrategia de entrenamiento',
      isFounder: true,
      initial: 'L',
      stats: {
        'Fuerza': 90,
        'Técnica': 95,
        'Power Plate': 90,
        'Progresión': 95,
        'Seguimiento': 90
      },
      availability: ['Consultar disponibilidad'],
      availabilityNote: 'Disponibilidad por confirmar',
      whatsappMessage: 'Hola, me interesa recibir orientación en TEMPLO. ¿Me pueden ayudar con la disponibilidad de Lucas o del coach adecuado?',
      socials: {} // Add real links when available: { instagram: '', tiktok: '', facebook: '' }
    },
    {
      id: 'coach-fuerza',
      name: 'Coach TEMPLO',
      role: 'Fuerza y técnica',
      specialty: 'Construcción de fuerza y técnica de levantamiento',
      initial: 'FT',
      stats: {
        'Fuerza': 90,
        'Técnica': 85,
        'Intensidad': 80,
        'Progresión': 85
      },
      availability: ['Mar', 'Jue'],
      availabilityNote: 'Consultar agenda por WhatsApp',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con el coach de fuerza y técnica. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'coach-calistenia',
      name: 'Coach TEMPLO',
      role: 'Calistenia y control corporal',
      specialty: 'Progresiones de calistenia y dominio corporal',
      initial: 'CC',
      stats: {
        'Calistenia': 95,
        'Control corporal': 90,
        'Movilidad': 80,
        'Técnica': 85
      },
      availability: ['Lun', 'Mié'],
      availabilityNote: 'Consultar agenda por WhatsApp',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con el coach de calistenia. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'coach-funcional',
      name: 'Coach TEMPLO',
      role: 'Funcional y acondicionamiento',
      specialty: 'Entrenamiento funcional y capacidad física',
      initial: 'FA',
      stats: {
        'Funcional': 90,
        'Intensidad': 88,
        'Resistencia': 85,
        'Coordinación': 82
      },
      availability: ['Mar', 'Jue', 'Sáb'],
      availabilityNote: 'Consultar agenda por WhatsApp',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con el coach de funcional y acondicionamiento. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'coach-powerplate',
      name: 'Coach TEMPLO',
      role: 'Power Plate',
      specialty: 'Tecnología Power Plate para activación y fuerza',
      initial: 'PP',
      stats: {
        'Power Plate': 95,
        'Activación': 90,
        'Control': 85,
        'Progresión': 82
      },
      availability: ['Consultar disponibilidad'],
      availabilityNote: 'Consultar agenda por WhatsApp',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con el coach de Power Plate. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'coach-seguimiento',
      name: 'Coach TEMPLO',
      role: 'Seguimiento y progresión',
      specialty: 'Acompañamiento continuo y ajuste de rutinas',
      initial: 'SP',
      stats: {
        'Seguimiento': 95,
        'Técnica': 85,
        'Progresión': 90,
        'Constancia': 85
      },
      availability: ['Consultar disponibilidad'],
      availabilityNote: 'Consultar agenda por WhatsApp',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con el coach de seguimiento y progresión. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    }
  ];

  // ============================================================
  // DECISION TREE RECOMMENDATIONS
  // ============================================================
  var recommendations = {
    fuerza: {
      experience: 'Fuerza y Máquinas',
      coachType: 'Coach de fuerza y técnica',
      plan: 'Plan Guiado',
      message: 'Hola, me interesa entrenar en TEMPLO. Mi objetivo es ganar fuerza. ¿Me pueden orientar?'
    },
    composicion: {
      experience: 'Funcional y Acondicionamiento',
      coachType: 'Coach de intensidad y progresión',
      plan: 'Plan Guiado',
      message: 'Hola, me interesa entrenar en TEMPLO. Mi objetivo es mejorar mi físico. ¿Me pueden orientar?'
    },
    guia: {
      experience: 'Plan Guiado',
      coachType: 'Coach de seguimiento y progresión',
      plan: 'Plan Guiado',
      message: 'Hola, me interesa empezar a entrenar en TEMPLO con guía. ¿Me pueden orientar?'
    },
    calistenia: {
      experience: 'Calistenia',
      coachType: 'Coach de control corporal',
      plan: 'Plan Guiado',
      message: 'Hola, me interesa entrenar calistenia en TEMPLO. ¿Me pueden orientar?'
    },
    funcional: {
      experience: 'Funcional y Acondicionamiento',
      coachType: 'Coach funcional y acondicionamiento',
      plan: 'Plan Guiado',
      message: 'Hola, me interesa el entrenamiento funcional en TEMPLO. ¿Me pueden orientar?'
    },
    adaptado: {
      experience: 'Entrenamiento Adaptado',
      coachType: 'Coach de control y progresión',
      plan: 'Plan Guiado',
      message: 'Hola, me interesa entrenar en TEMPLO con menor impacto. ¿Me pueden orientar?'
    },
    powerplate: {
      experience: 'Power Plate Premium',
      coachType: 'Coach Power Plate',
      plan: 'Plan Premium',
      message: 'Hola, me interesa conocer Power Plate en TEMPLO. ¿Me pueden orientar?'
    }
  };

  // ============================================================
  // RENDER COACHES
  // ============================================================
  function renderCoaches() {
    var grid = document.getElementById('coachesGrid');
    if (!grid) return;

    var html = '';
    coaches.forEach(function(coach) {
      var statsHtml = '';
      Object.keys(coach.stats).forEach(function(key) {
        statsHtml += '<div class="coach-stat">' +
          '<span class="coach-stat__label">' + key + '</span>' +
          '<div class="coach-stat__bar"><span class="coach-stat__fill" style="--value: ' + coach.stats[key] + '%"></span></div>' +
          '<span class="coach-stat__value">' + coach.stats[key] + '</span>' +
          '</div>';
      });

      var availHtml = '';
      coach.availability.forEach(function(day) {
        availHtml += '<span class="coach-availability__day">' + day + '</span>';
      });

      var ctaLabel = coach.isFounder ? 'Consultar disponibilidad' : 'Consultar con este coach';
      var ctaClass = coach.isFounder ? 'btn btn--primary' : 'btn btn--ghost';

      // Social links — only render if URLs are provided
      var socialsHtml = '';
      var socialLabels = { instagram: 'Instagram', tiktok: 'TikTok', facebook: 'Facebook' };
      var socialKeys = ['instagram', 'tiktok', 'facebook'];
      var hasSocials = false;
      var socialItems = '';
      socialKeys.forEach(function(key) {
        if (coach.socials && coach.socials[key]) {
          hasSocials = true;
          socialItems += '<a href="' + coach.socials[key] + '" class="coach-socials__link" target="_blank" rel="noopener">' + socialLabels[key] + '</a>';
        }
      });
      if (hasSocials) {
        socialsHtml = '<div class="coach-socials">' + socialItems + '</div>';
      }

      html += '<article class="coach-card' + (coach.isFounder ? ' coach-card--founder' : '') + '">' +
        '<div class="coach-card__portrait"><span class="coach-card__initial">' + coach.initial + '</span></div>' +
        '<div class="coach-card__role">' + coach.role + '</div>' +
        '<h3 class="coach-card__name">' + coach.name + '</h3>' +
        '<p class="coach-card__specialty">' + coach.specialty + '</p>' +
        '<div class="coach-stats">' + statsHtml + '</div>' +
        socialsHtml +
        '<div class="coach-availability">' +
          '<div class="coach-availability__title">Disponibilidad</div>' +
          '<div class="coach-availability__days">' + availHtml + '</div>' +
          '<p class="coach-availability__note">' + coach.availabilityNote + '</p>' +
        '</div>' +
        '<a href="https://wa.me/59172001680?text=' + encodeURIComponent(coach.whatsappMessage) + '" class="' + ctaClass + ' coach-card__cta" target="_blank" rel="noopener" data-cta="coach-' + coach.id + '-whatsapp">' + ctaLabel + '</a>' +
        '</article>';
    });

    grid.innerHTML = html;

    // Animate stat bars on scroll
    setTimeout(function() {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var fills = entry.target.querySelectorAll('.coach-stat__fill');
            fills.forEach(function(fill) {
              fill.style.width = fill.style.getPropertyValue('--value');
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      grid.querySelectorAll('.coach-card').forEach(function(card) {
        // Start at 0
        card.querySelectorAll('.coach-stat__fill').forEach(function(fill) {
          fill.style.width = '0%';
        });
        observer.observe(card);
      });
    }, 100);
  }

  // ============================================================
  // DECISION TREE
  // ============================================================
  var pathfinderState = {
    step: 1,
    goal: null,
    level: null,
    style: null
  };

  function updateProgress() {
    var fill = document.getElementById('pathfinderProgress');
    var label = document.getElementById('pathfinderStepLabel');
    if (!fill || !label) return;

    var pct = (pathfinderState.step / 3) * 100;
    fill.style.width = pct + '%';
    label.textContent = 'Paso ' + pathfinderState.step + ' de 3';
  }

  function showStep(step) {
    document.querySelectorAll('.pathfinder__step').forEach(function(el) {
      el.classList.remove('pathfinder__step--active');
    });
    var target = document.querySelector('.pathfinder__step[data-step="' + step + '"]');
    if (target) {
      target.classList.add('pathfinder__step--active');
    }
    pathfinderState.step = step;
    updateProgress();
  }

  function showResult() {
    var rec = recommendations[pathfinderState.goal];
    if (!rec) return;

    var resultEl = document.getElementById('pathfinderResult');
    var bodyEl = document.getElementById('pathfinderResultBody');
    if (!resultEl || !bodyEl) return;

    var waMsg = rec.message;
    var waUrl = 'https://wa.me/59172001680?text=' + encodeURIComponent(waMsg);

    bodyEl.innerHTML =
      '<h3 class="pathfinder__result-experience">' + rec.experience + '</h3>' +
      '<p class="pathfinder__result-coach">Coach sugerido: ' + rec.coachType + '</p>' +
      '<p class="pathfinder__result-plan">Dirección sugerida: ' + rec.plan + '</p>' +
      '<p class="pathfinder__result-text">Por tu objetivo, te recomendamos empezar con ' + rec.experience + ' junto a un ' + rec.coachType.toLowerCase() + '.</p>' +
      '<a href="' + waUrl + '" class="btn btn--primary" target="_blank" rel="noopener" data-cta="pathfinder-whatsapp">Quiero recibir orientación</a>' +
      '<button class="pathfinder__restart" id="pathfinderRestart">Empezar de nuevo</button>';

    resultEl.classList.add('pathfinder__result--visible');

    // Hide active step
    document.querySelectorAll('.pathfinder__step').forEach(function(el) {
      el.classList.remove('pathfinder__step--active');
    });

    // Restart handler
    var restartBtn = document.getElementById('pathfinderRestart');
    if (restartBtn) {
      restartBtn.addEventListener('click', function() {
        pathfinderState = { step: 1, goal: null, level: null, style: null };
        resultEl.classList.remove('pathfinder__result--visible');
        document.querySelectorAll('.process-option--active').forEach(function(el) {
          el.classList.remove('process-option--active');
        });
        showStep(1);
      });
    }

    // Scroll to result
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function handleOptionClick(e) {
    var btn = e.target.closest('.process-option');
    if (!btn) return;

    var step = btn.closest('.pathfinder__step');
    if (!step) return;

    var stepNum = parseInt(step.getAttribute('data-step'), 10);

    // Deselect siblings
    step.querySelectorAll('.process-option').forEach(function(opt) {
      opt.classList.remove('process-option--active');
    });

    // Select this
    btn.classList.add('process-option--active');

    // Store value
    if (stepNum === 1) {
      pathfinderState.goal = btn.getAttribute('data-goal');
    } else if (stepNum === 2) {
      pathfinderState.level = btn.getAttribute('data-level');
    } else if (stepNum === 3) {
      pathfinderState.style = btn.getAttribute('data-style');
    }

    // Advance after short delay
    setTimeout(function() {
      if (stepNum < 3) {
        showStep(stepNum + 1);
      } else {
        showResult();
      }
    }, 300);
  }

  function initPathfinder() {
    var tool = document.querySelector('.pathfinder__tool');
    if (!tool) return;

    tool.addEventListener('click', handleOptionClick);
    updateProgress();
  }

  // ============================================================
  // NAV & SCROLL (preserved from original)
  // ============================================================
  var nav = document.getElementById('nav');

  function handleScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ---- Mobile menu ----
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

  // ---- Smooth scroll ----
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var offset = 80;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ---- Scroll reveal ----
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

  document.querySelectorAll(
    '.positioning, .exp-card, .method__card, ' +
    '.pathfinder__tool, ' +
    '.coach-card, ' +
    '.lifestyle__content, .lifestyle__img, ' +
    '.plan-card, ' +
    '.location__grid, .location__social, ' +
    '.faq__item, .final-cta__content'
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

  // ============================================================
  // INIT
  // ============================================================
  renderCoaches();
  initPathfinder();

})();
