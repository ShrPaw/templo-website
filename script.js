/* ========================================
   TEMPLO — Coaches, Decision Tree & Interactions
   No heavy libraries. Vanilla JS only.
   ======================================== */

(function() {
  'use strict';

  // ============================================================
  // COACH DATA
  // Replace placeholder names/photos/specialties/socials when available.
  // Stats are visual specialty indicators, NOT medical credentials or ratings.
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
      availabilityNote: 'Agenda por confirmar',
      whatsappMessage: 'Hola, me interesa recibir orientación en TEMPLO. ¿Me pueden ayudar con la disponibilidad de Lucas o del coach adecuado?',
      socials: {} // Add real links when available: { instagram: '', facebook: '' }
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
      availability: ['Consultar disponibilidad'],
      availabilityNote: 'Agenda por confirmar',
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
      availability: ['Consultar disponibilidad'],
      availabilityNote: 'Agenda por confirmar',
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
      availability: ['Consultar disponibilidad'],
      availabilityNote: 'Agenda por confirmar',
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
      availabilityNote: 'Agenda por confirmar',
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
      availabilityNote: 'Agenda por confirmar',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con el coach de seguimiento y progresión. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    }
  ];

  // ============================================================
  // DECISION TREE — uses goal + level + style for smarter results
  // ============================================================
  function getRecommendation(goal, level, style) {
    // Base recommendation by goal
    var base = {
      fuerza:       { experience: 'Fuerza y Máquinas',    coach: 'Coach de fuerza y técnica',    plan: 'Plan Híbrido' },
      composicion:  { experience: 'Funcional y Acondicionamiento', coach: 'Coach de intensidad y progresión', plan: 'Plan Híbrido' },
      guia:         { experience: 'Entrenamiento Guiado',  coach: 'Coach de seguimiento y progresión', plan: 'Plan Calistenia' },
      calistenia:   { experience: 'Calistenia',            coach: 'Coach de control corporal',    plan: 'Plan Calistenia' },
      funcional:    { experience: 'Funcional y Acondicionamiento', coach: 'Coach funcional y acondicionamiento', plan: 'Plan Híbrido' },
      adaptado:     { experience: 'Entrenamiento Adaptado', coach: 'Coach de control y progresión', plan: 'Plan Seniors' },
      powerplate:   { experience: 'Power Plate',           coach: 'Coach Power Plate',            plan: 'Plan Power Plate' }
    };

    var rec = base[goal] || base.guia;

    // Level adjustments
    if (level === 'principiante') {
      if (goal === 'fuerza') {
        rec.plan = 'Plan Calistenia';
        rec.note = 'Empezamos con técnica y progresión para construir una base sólida.';
      } else if (goal === 'composicion') {
        rec.plan = 'Plan Calistenia';
        rec.note = 'Arrancamos con rutinas accesibles y aumentamos la intensidad con el tiempo.';
      } else if (goal === 'calistenia') {
        rec.note = 'Aprendes las bases con técnica correcta desde el primer día.';
      } else if (goal === 'adaptado') {
        rec.note = 'Rutinas seguras y adaptadas a tu ritmo, con guía constante.';
      } else if (goal === 'powerplate') {
        rec.note = 'Sesiones guiadas para que conozcas la tecnología y sus beneficios.';
      } else {
        rec.note = 'Empezamos con guía, técnica y estructura para que avances con seguridad.';
      }
    } else if (level === 'experiencia') {
      if (goal === 'fuerza') {
        rec.plan = 'Plan Híbrido';
        rec.note = 'Combinamos fuerza y funcional para llevar tu progresión al siguiente nivel.';
      } else if (goal === 'composicion') {
        rec.plan = 'Plan Híbrido';
        rec.note = 'Entrenamiento variado para mejorar composición y rendimiento.';
      } else if (goal === 'powerplate') {
        rec.plan = 'Plan Power Plate';
        rec.note = 'Potenciamos tu entrenamiento con sesiones de Power Plate complementarias.';
      } else {
        rec.note = 'Con tu base, podemos enfocar en técnica avanzada y progresión.';
      }
    } else if (level === 'avanzado') {
      if (goal === 'fuerza') {
        rec.plan = 'Plan Híbrido';
        rec.experience = 'Híbrido — Fuerza y Funcional';
        rec.note = 'Alta intensidad, progresión avanzada y combinación de metodologías.';
      } else if (goal === 'composicion') {
        rec.plan = 'Plan Híbrido';
        rec.note = 'Intensidad alta con variedad de estímulos para resultados superiores.';
      } else if (goal === 'calistenia') {
        rec.experience = 'Calistenia Avanzada';
        rec.note = 'Progresiones avanzadas, dominio corporal y técnica refinada.';
      } else {
        rec.note = 'Programación avanzada con mayor volumen, intensidad y complejidad.';
      }
    }

    // Style adjustments
    if (style === 'guiado') {
      rec.coach = rec.coach.replace('Coach de ', 'Coach de seguimiento y ');
      if (!rec.note) rec.note = 'Enfoque en guía personalizada, seguimiento y técnica.';
    } else if (style === 'intenso') {
      if (goal !== 'adaptado') {
        rec.plan = 'Plan Híbrido';
      }
      if (!rec.note) rec.note = 'Entrenamiento intenso con enfoque en resultados y constancia.';
    } else if (style === 'tecnico') {
      if (!rec.note) rec.note = 'Prioridad en técnica, control del movimiento y progresión.';
    } else if (style === 'personalizado') {
      if (!rec.note) rec.note = 'Orientación más personalizada para ajustar el entrenamiento a tu meta, nivel y disponibilidad.';
    }

    // Build WhatsApp message
    var goalLabels = {
      fuerza: 'ganar fuerza',
      composicion: 'mejorar mi físico',
      guia: 'empezar a entrenar con guía',
      calistenia: 'entrenar calistenia',
      funcional: 'entrenamiento funcional',
      adaptado: 'entrenar con menor impacto',
      powerplate: 'conocer Power Plate'
    };

    rec.message = 'Hola, me interesa entrenar en TEMPLO. Mi objetivo es ' + (goalLabels[goal] || 'entrenar') + '. ¿Me pueden orientar?';

    return rec;
  }

  var pathfinderState = { step: 1, goal: null, level: null, style: null };

  function updateProgress() {
    var fill = document.getElementById('pathfinderProgress');
    var label = document.getElementById('pathfinderStepLabel');
    if (!fill || !label) return;
    fill.style.width = (pathfinderState.step / 3) * 100 + '%';
    label.textContent = 'Paso ' + pathfinderState.step + ' de 3';
  }

  function showStep(step) {
    var currentStep = document.querySelector('.pathfinder__step--active');
    if (currentStep) {
      currentStep.style.opacity = '0';
      currentStep.style.transform = 'translateY(8px)';
      setTimeout(function() {
        currentStep.classList.remove('pathfinder__step--active');
        currentStep.style.opacity = '';
        currentStep.style.transform = '';
        activateStep(step);
      }, 250);
    } else {
      activateStep(step);
    }
  }

  function activateStep(step) {
    var target = document.querySelector('.pathfinder__step[data-step="' + step + '"]');
    if (target) {
      target.classList.add('pathfinder__step--active');
    }
    pathfinderState.step = step;
    updateProgress();
  }

  function showResult() {
    var rec = getRecommendation(pathfinderState.goal, pathfinderState.level, pathfinderState.style);
    var resultEl = document.getElementById('pathfinderResult');
    var bodyEl = document.getElementById('pathfinderResultBody');
    if (!resultEl || !bodyEl) return;

    var waUrl = 'https://wa.me/59172001680?text=' + encodeURIComponent(rec.message);

    bodyEl.innerHTML =
      '<h3 class="pathfinder__result-experience">' + rec.experience + '</h3>' +
      '<p class="pathfinder__result-coach">Coach sugerido: ' + rec.coach + '</p>' +
      '<p class="pathfinder__result-plan">Plan sugerido: ' + rec.plan + '</p>' +
      '<p class="pathfinder__result-text">' + rec.note + '</p>' +
      '<a href="' + waUrl + '" class="btn btn--primary" target="_blank" rel="noopener" data-cta="pathfinder-whatsapp">Quiero recibir orientación</a>' +
      '<button class="pathfinder__restart" id="pathfinderRestart">Empezar de nuevo</button>';

    resultEl.classList.add('pathfinder__result--visible');
    document.querySelectorAll('.pathfinder__step').forEach(function(el) {
      el.classList.remove('pathfinder__step--active');
    });

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

    resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function handleOptionClick(e) {
    var btn = e.target.closest('.process-option');
    if (!btn) return;
    var step = btn.closest('.pathfinder__step');
    if (!step) return;
    var stepNum = parseInt(step.getAttribute('data-step'), 10);

    step.querySelectorAll('.process-option').forEach(function(opt) {
      opt.classList.remove('process-option--active');
    });
    btn.classList.add('process-option--active');

    if (stepNum === 1) pathfinderState.goal = btn.getAttribute('data-goal');
    else if (stepNum === 2) pathfinderState.level = btn.getAttribute('data-level');
    else if (stepNum === 3) pathfinderState.style = btn.getAttribute('data-style');

    setTimeout(function() {
      if (stepNum < 3) showStep(stepNum + 1);
      else showResult();
    }, 300);
  }

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
          '</div>';
      });

      var availHtml = '';
      coach.availability.forEach(function(day) {
        availHtml += '<span class="coach-availability__day">' + day + '</span>';
      });

      // Social links — only render if URLs are provided
      var socialsHtml = '';
      var socialLabels = { instagram: 'Instagram', facebook: 'Facebook' };
      var socialKeys = ['instagram', 'facebook'];
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

      var ctaLabel = coach.isFounder ? 'Consultar disponibilidad' : 'Consultar con este coach';
      var ctaClass = coach.isFounder ? 'btn btn--primary' : 'btn btn--ghost';

      html += '<article class="coach-card' + (coach.isFounder ? ' coach-card--founder' : '') + '">' +
        '<div class="coach-card__portrait"><span class="coach-card__initial">' + coach.initial + '</span></div>' +
        '<div class="coach-card__role">' + coach.role + '</div>' +
        '<h3 class="coach-card__name">' + coach.name + '</h3>' +
        '<p class="coach-card__specialty">' + coach.specialty + '</p>' +
        '<div class="coach-stats">' +
          '<div class="coach-stats__header"><span class="coach-stats__title">Especialidades</span></div>' +
          statsHtml +
        '</div>' +
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
      var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.coach-stat__fill').forEach(function(fill) {
              fill.style.width = fill.style.getPropertyValue('--value');
            });
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      grid.querySelectorAll('.coach-card').forEach(function(card) {
        card.querySelectorAll('.coach-stat__fill').forEach(function(fill) {
          fill.style.width = '0%';
        });
        obs.observe(card);
      });
    }, 100);
  }

  // ============================================================
  // NAV & SCROLL
  // ============================================================
  var nav = document.getElementById('nav');

  function handleScroll() {
    if (window.scrollY > 60) nav.classList.add('nav--scrolled');
    else nav.classList.remove('nav--scrolled');
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

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

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ---- Scroll reveal ----
  var observerOpts = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOpts);

  document.querySelectorAll(
    '.positioning, .exp-card, .method__card, ' +
    '.pathfinder__tool, .coach-card, ' +
    '.lifestyle__content, .lifestyle__img, ' +
    '.pricing-card, ' +
    '.location__grid, .location__social, ' +
    '.faq__item, .final-cta__content'
  ).forEach(function(el) {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // ---- Active nav link ----
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
          if (link.getAttribute('href') === '#' + id) link.style.color = 'var(--accent)';
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });

  // ============================================================
  // INIT
  // ============================================================
  renderCoaches();

  var pathfinderTool = document.querySelector('.pathfinder__tool');
  if (pathfinderTool) {
    pathfinderTool.addEventListener('click', handleOptionClick);
    updateProgress();
  }

})();
