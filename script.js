/* ========================================
   TEMPLO — Coaches, Decision Tree & Interactions
   No heavy libraries. Vanilla JS only.
   ======================================== */

(function() {
  'use strict';

  // ============================================================
  // COACH DATA — rebuilt per brand direction
  // Order: Lucas (founder) first, then 7 coaches.
  // Lucas has mission, vision, ability, quote.
  // Others have ability + quote only.
  // Instagram links: structure exists, no fake URLs invented.
  //
  // NOTE: Coach abilities and quotes are draft copy and should
  // be approved by the team before final public launch.
  // ============================================================
  var coaches = [
    {
      id: 'lucas',
      name: 'Lucas Bustamante',
      alias: 'Lucoach',
      role: 'Fundador',
      isFounder: true,
      initial: 'L',
      // NOTE: Mission, vision and ability are provisional draft copy.
      // Should be confirmed/approved by Lucas before final deployment.
      mission: 'Guiar a las personas a entrenar con intención, técnica y disciplina.',
      vision: 'Construir un estudio donde cada meta tenga método, dirección y carácter.',
      ability: 'Leer el cuerpo en movimiento y corregir el detalle que cambia el entrenamiento.',
      quote: 'Entrenar no es repetir. Es construirte con intención.',
      whatsappMessage: 'Hola, me interesa recibir orientación en TEMPLO. ¿Me pueden ayudar con la disponibilidad de Lucas?',
      socials: {} // Add real Instagram URL when available
    },
    {
      id: 'nicolas-zegarra',
      name: 'Nicolas Zegarra',
      initial: 'NZ',
      ability: 'Precisión técnica y progresión estructurada para cada nivel.',
      quote: 'La técnica bien aplicada es el atajo que todos ignoran.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Nicolas Zegarra. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'andres-balderrama',
      name: 'Andres Balderrama',
      initial: 'AB',
      ability: 'Intensidad controlada y capacidad de llevar al límite sin perder forma.',
      quote: 'El esfuerzo sin técnica se pierde. La técnica sin esfuerzo no avanza.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Andres Balderrama. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'nicolas-aranibar',
      name: 'Nicolas Aranibar',
      initial: 'NA',
      ability: 'Dominio corporal y progresiones de calistenia desde cero hasta avanzado.',
      quote: 'Tu cuerpo es la máquina. Aprende a usarla.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Nicolas Aranibar. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'andrea-sejas',
      name: 'Andrea Sejas',
      initial: 'AS',
      ability: 'Entrenamiento enfocado en fuerza, tonificación y confianza corporal.',
      quote: 'Fuerte no es un físico. Es una decisión que se entrena.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Andrea Sejas. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'santiago-lavayen',
      name: 'Santiago Lavayen',
      initial: 'SL',
      ability: 'Funcional, resistencia y acondicionamiento desde múltiples ángulos.',
      quote: 'El cuerpo se adapta. Tu trabajo es exigirle que lo haga bien.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Santiago Lavayen. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'oscar-encinas',
      name: 'Oscar Encinas',
      initial: 'OE',
      ability: 'Fuerza aplicada y técnica de levantamiento con atención al detalle.',
      quote: 'Cada repetición cuenta si la haces con intención.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Oscar Encinas. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'santiago-rojas',
      name: 'Santiago Rojas',
      initial: 'SR',
      ability: 'Acompañamiento, seguimiento y motivación constante durante el proceso.',
      quote: 'Aparecer es la mitad. Sostenerlo es lo que construye.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Santiago Rojas. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    }
  ];

  // ============================================================
  // DECISION TREE — updated for new service categories
  // ============================================================
  function getRecommendation(goal, level, style) {
    var base = {
      fuerza:        { experience: 'Híbrido — Fuerza y Funcional', plan: 'Plan Híbrido', coach: 'Coach de fuerza y técnica' },
      tonificacion:  { experience: 'Mujeres / Híbrido',           plan: 'Plan Mujeres',  coach: 'Coach de tonificación y fuerza' },
      calistenia:    { experience: 'Calistenia',                   plan: 'Plan Calistenia', coach: 'Coach de control corporal' },
      'menor-impacto': { experience: 'Seniors / Entrenamiento Adaptado', plan: 'Plan Seniors', coach: 'Coach de control y adaptación' },
      premium:       { experience: 'Power Plate',                  plan: 'Plan Power Plate', coach: 'Lucas — guía casi personalizada' },
      general:       { experience: 'Entrenamiento Guiado',         plan: 'Plan Calistenia', coach: 'Coach de seguimiento' }
    };

    var rec = base[goal] || base.general;

    // Level adjustments
    if (level === 'principiante') {
      if (goal === 'fuerza') {
        rec.plan = 'Plan Calistenia';
        rec.note = 'Empezamos con técnica y progresión para construir una base sólida. Cuando estés listo, pasamos a Híbrido.';
      } else if (goal === 'tonificacion') {
        rec.plan = 'Plan Calistenia';
        rec.note = 'Arrancamos con rutinas accesibles y aumentamos la intensidad con el tiempo.';
      } else if (goal === 'calistenia') {
        rec.note = 'Aprendes las bases con técnica correcta desde el primer día.';
      } else if (goal === 'menor-impacto') {
        rec.note = 'Rutinas seguras y adaptadas a tu ritmo, con guía constante.';
      } else if (goal === 'premium') {
        rec.note = 'Sesiones guiadas para que conozcas la tecnología y sus beneficios. Máximo 3 personas por sesión.';
      } else {
        rec.note = 'Empezamos con guía, técnica y estructura para que avances con seguridad.';
      }
    } else if (level === 'experiencia') {
      if (goal === 'fuerza') {
        rec.plan = 'Plan Híbrido';
        rec.note = 'Combinamos fuerza y funcional para llevar tu progresión al siguiente nivel.';
      } else if (goal === 'tonificacion') {
        rec.plan = 'Plan Híbrido';
        rec.note = 'Entrenamiento variado para mejorar composición y rendimiento.';
      } else if (goal === 'premium') {
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
      } else if (goal === 'tonificacion') {
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
      if (goal !== 'premium') {
        rec.coach = 'Coach de seguimiento y guía';
      }
      if (!rec.note) rec.note = 'Enfoque en guía personalizada, seguimiento y técnica.';
    } else if (style === 'intenso') {
      if (goal !== 'menor-impacto' && goal !== 'premium') {
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
      fuerza: 'ganar músculo y fuerza',
      tonificacion: 'tonificarme y mejorar mi composición',
      calistenia: 'entrenar calistenia',
      'menor-impacto': 'entrenar con menor impacto',
      premium: 'una experiencia premium con más guía',
      general: 'empezar a entrenar con dirección'
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
  // RENDER COACHES — rebuilt for new structure
  // ============================================================
  function renderCoaches() {
    var grid = document.getElementById('coachesGrid');
    if (!grid) return;

    var html = '';
    coaches.forEach(function(coach) {
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

      var bodyHtml = '';

      if (coach.isFounder) {
        // Founder: mission, vision, ability, quote
        bodyHtml =
          (coach.alias ? '<div class="coach-card__alias">' + coach.alias + '</div>' : '') +
          '<div class="coach-card__role">' + coach.role + '</div>' +
          '<h3 class="coach-card__name">' + coach.name + '</h3>' +
          '<div class="coach-card__fields">' +
            '<div><div class="coach-card__field-label">Misión</div><p class="coach-card__field-text">' + coach.mission + '</p></div>' +
            '<div><div class="coach-card__field-label">Visión</div><p class="coach-card__field-text">' + coach.vision + '</p></div>' +
            '<div><div class="coach-card__field-label">Habilidad distintiva</div><p class="coach-card__field-text">' + coach.ability + '</p></div>' +
          '</div>' +
          '<div class="coach-card__quote">"' + coach.quote + '"</div>' +
          socialsHtml;
      } else {
        // Other coaches: ability + quote
        bodyHtml =
          '<h3 class="coach-card__name">' + coach.name + '</h3>' +
          '<p class="coach-card__ability">' + coach.ability + '</p>' +
          '<div class="coach-card__quote">"' + coach.quote + '"</div>' +
          socialsHtml;
      }

      var ctaLabel = coach.isFounder ? 'Consultar disponibilidad' : 'Consultar con este coach';
      var ctaClass = coach.isFounder ? 'btn btn--primary' : 'btn btn--ghost';

      html += '<article class="coach-card' + (coach.isFounder ? ' coach-card--founder' : '') + '">' +
        '<div class="coach-card__portrait"><span class="coach-card__initial">' + coach.initial + '</span></div>' +
        bodyHtml +
        '<a href="https://wa.me/59172001680?text=' + encodeURIComponent(coach.whatsappMessage) + '" class="' + ctaClass + ' coach-card__cta" target="_blank" rel="noopener" data-cta="coach-' + coach.id + '-whatsapp">' + ctaLabel + '</a>' +
        '</article>';
    });

    grid.innerHTML = html;
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

  // Smooth scroll for anchor links
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

  // ---- Scroll reveal (general fade-in) ----
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
    '.positioning, .exp-card, ' +
    '.pathfinder__tool, ' +
    '.lifestyle__content, .lifestyle__img, ' +
    '.guia-detalle__item, .objectives__item, ' +
    '.location__grid, .location__social, ' +
    '.faq__item, .final-cta__content'
  ).forEach(function(el) {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // ---- Pillar staggered reveal ----
  var pillarObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        pillarObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.method__pillar').forEach(function(pillar) {
    pillarObserver.observe(pillar);
  });

  // ---- Pricing card reveal ----
  var pricingObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        pricingObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.pricing-card').forEach(function(card) {
    card.classList.add('fade-in');
    pricingObserver.observe(card);
  });

  // ---- Coach card reveal (portrait + quote) ----
  var coachObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        coachObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.coach-card').forEach(function(card) {
    coachObserver.observe(card);
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
