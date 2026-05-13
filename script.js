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
      photo: 'assets/placeholders/coach-lucas.webp',
      specialtyIcon: 'founder', // Symbolic: crown/star
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
      photo: 'assets/placeholders/coach-nicolas-z.webp',
      specialtyIcon: 'precision', // Symbolic: target/scope
      ability: 'Precisión técnica y progresión estructurada para cada nivel.',
      quote: 'La técnica bien aplicada es el atajo que todos ignoran.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Nicolas Zegarra. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'andres-balderrama',
      name: 'Andres Balderrama',
      initial: 'AB',
      photo: 'assets/placeholders/coach-andres.webp',
      specialtyIcon: 'intensity', // Symbolic: lightning/fire
      ability: 'Intensidad controlada y capacidad de llevar al límite sin perder forma.',
      quote: 'El esfuerzo sin técnica se pierde. La técnica sin esfuerzo no avanza.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Andres Balderrama. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'nicolas-aranibar',
      name: 'Nicolas Aranibar',
      initial: 'NA',
      photo: 'assets/placeholders/coach-nicolas-a.webp',
      specialtyIcon: 'calisthenics', // Symbolic: bars/control
      ability: 'Dominio corporal y progresiones de calistenia desde cero hasta avanzado.',
      quote: 'Tu cuerpo es la máquina. Aprende a usarla.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Nicolas Aranibar. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'andrea-sejas',
      name: 'Andrea Sejas',
      initial: 'AS',
      photo: 'assets/placeholders/coach-andrea.webp',
      specialtyIcon: 'strength', // Symbolic: sculpted form
      ability: 'Entrenamiento enfocado en fuerza, tonificación y confianza corporal.',
      quote: 'Fuerte no es un físico. Es una decisión que se entrena.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Andrea Sejas. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'santiago-lavayen',
      name: 'Santiago Lavayen',
      initial: 'SL',
      photo: 'assets/placeholders/coach-santiago-l.webp',
      specialtyIcon: 'functional', // Symbolic: multi-angle
      ability: 'Funcional, resistencia y acondicionamiento desde múltiples ángulos.',
      quote: 'El cuerpo se adapta. Tu trabajo es exigirle que lo haga bien.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Santiago Lavayen. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'oscar-encinas',
      name: 'Oscar Encinas',
      initial: 'OE',
      photo: 'assets/placeholders/coach-oscar.webp',
      specialtyIcon: 'power', // Symbolic: weight/barbell
      ability: 'Fuerza aplicada y técnica de levantamiento con atención al detalle.',
      quote: 'Cada repetición cuenta si la haces con intención.',
      whatsappMessage: 'Hola, me interesa entrenar en TEMPLO con Oscar Encinas. ¿Me pueden ayudar con su disponibilidad?',
      socials: {}
    },
    {
      id: 'santiago-rojas',
      name: 'Santiago Rojas',
      initial: 'SR',
      photo: 'assets/placeholders/coach-santiago-r.webp',
      specialtyIcon: 'guide', // Symbolic: compass/path
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
  // RENDER COACHES TEASER — compact name strip for homepage
  // ============================================================
  function renderCoaches() {
    var teaser = document.getElementById('coachesTeaser');
    if (!teaser) return;

    var teamCoaches = coaches.filter(function(c) { return !c.isFounder; });
    var html = '';

    teamCoaches.forEach(function(coach) {
      html += '<a href="https://wa.me/59172001680?text=' + encodeURIComponent(coach.whatsappMessage) + '" class="coaches-teaser__name" target="_blank" rel="noopener" data-cta="coach-' + coach.id + '-whatsapp">' + coach.name + '</a>';
    });

    teaser.innerHTML = html;
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
    '.guia-detalle__item, .guia-detalle__photo, ' +
    '.location__grid, .location__social, ' +
    '.faq__item, .final-cta__content, ' +
    '.activity-reel__content, ' +
    '.pathfinder-cta, ' +
    '.metrics__item'
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

  // ---- Detail section photo accent fade-in ----
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
  function initCoachObserver() {
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
  }

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
  // METRICS COUNTER ANIMATION
  // ============================================================
  function initMetricsCounter() {
    var counters = document.querySelectorAll('.metrics__number[data-target]');
    if (!counters.length) return;

    var counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-target'), 10);
          var duration = 1500;
          var start = 0;
          var startTime = null;

          function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            var progress = Math.min((currentTime - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            var current = Math.floor(eased * target);
            el.textContent = current;
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              el.textContent = target;
            }
          }

          requestAnimationFrame(animate);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function(counter) {
      counterObserver.observe(counter);
    });
  }

  // ============================================================
  // ACTIVITY REEL — Infinite horizontal marquee
  // ============================================================
  function initActivityReel() {
    var track = document.querySelector('.activity-reel__track');
    var viewport = document.querySelector('.activity-reel__viewport');
    if (!track || !viewport) return;

    // Check for reduced motion preference
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Remove animation, show all cards in a wrapped layout
      track.style.animation = 'none';
      track.style.flexWrap = 'wrap';
      track.style.justifyContent = 'center';
      return;
    }

    // Touch/drag support for mobile
    var isDragging = false;
    var startX = 0;
    var scrollLeft = 0;
    var currentTranslate = 0;
    var animationPaused = false;

    // Get current transform value
    function getTranslateX() {
      var style = window.getComputedStyle(track);
      var matrix = new DOMMatrixReadOnly(style.transform);
      return matrix.m41;
    }

    // Pause/resume animation on hover (CSS handles this, but we need it for touch)
    viewport.addEventListener('mouseenter', function() {
      track.style.animationPlayState = 'paused';
    });

    viewport.addEventListener('mouseleave', function() {
      if (!isDragging) {
        track.style.animationPlayState = 'running';
      }
    });

    // Touch events for mobile swipe
    viewport.addEventListener('touchstart', function(e) {
      isDragging = true;
      startX = e.touches[0].pageX;
      currentTranslate = getTranslateX();
      track.style.animationPlayState = 'paused';
      track.style.transition = 'none';
    }, { passive: true });

    viewport.addEventListener('touchmove', function(e) {
      if (!isDragging) return;
      var x = e.touches[0].pageX;
      var walk = x - startX;
      track.style.transform = 'translateX(' + (currentTranslate + walk) + 'px)';
    }, { passive: true });

    viewport.addEventListener('touchend', function() {
      isDragging = false;
      track.style.transition = '';
      track.style.transform = '';
      // Resume animation after a short delay
      setTimeout(function() {
        track.style.animationPlayState = 'running';
      }, 300);
    });

    // Focus accessibility: pause on focus within
    viewport.addEventListener('focusin', function() {
      track.style.animationPlayState = 'paused';
    });

    viewport.addEventListener('focusout', function() {
      track.style.animationPlayState = 'running';
    });
  }

  // ============================================================
  // INIT
  // ============================================================
  renderCoaches();
  initCoachObserver();
  initActivityReel();
  initMetricsCounter();

  var pathfinderTool = document.querySelector('.pathfinder__tool');
  if (pathfinderTool) {
    pathfinderTool.addEventListener('click', handleOptionClick);
    updateProgress();
  }

})();
