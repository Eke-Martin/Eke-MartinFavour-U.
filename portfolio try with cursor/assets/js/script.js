(() => {
  "use strict";

  const CONFIG = {
    cvPath: "assets/images/Eke MartinFavour CV_A_Software_Engineer.docx",
    formEndpoint: "https://formsubmit.co/ajax/ekemartinudochukwu4@gmail.com",
    contactEmail: "ekemartinudochukwu4@gmail.com",
    ccEmail: "maintellitechnologies@gmail.com",
    social: {
      github: "https://github.com/Eke-Martin",
      linkedin: "https://www.linkedin.com/in/eke-martin-50397a339/?isSelfProfile=true",
      // TODO: replace with your real Instagram profile link
      instagram: "https://www.instagram.com/",
      tiktok: "https://www.tiktok.com/@martin_nenzy",
      // TODO: replace with your real X profile link
      x: "https://x.com/nenzy01",
    },
    skills: {
      note: "Self-assessed placeholders — edit levels in assets/js/script.js",
      technical: [
        { name: "HTML5", level: 100 },
        { name: "CSS3", level: 100 },
        { name: "JavaScript", level: 82 },
        { name: "React.js", level: 75 },
        { name: "Next.js", level: 70 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Node.js", level: 65 },
        { name: "Express.js", level: 50 },
        { name: "Laravel", level: 70 },
        { name: "REST API Integration", level: 74 },
        { name: "Git and GitHub", level: 80 },
        { name: "Responsive Web Design", level: 88 },
        { name: "Forex Trading", level: 75 },
      ],
      professional: [
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 90 },
        { name: "Business Development", level: 80 },
        { name: "Leadership", level: 90 },
        { name: "Time Management", level: 82 },
        { name: "Teamwork", level: 100 },
        { name: "Analytical Thinking", level: 85 },
        { name: "Strategic Planning", level: 90 },
      ],
    },
  };

  const qs = (sel, root = document) => root.querySelector(sel);
  const qsa = (sel, root = document) => [...root.querySelectorAll(sel)];
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  const initIcons = () => {
    if (window.lucide?.createIcons) window.lucide.createIcons();
  };

  const initYear = () => {
    qsa("[data-year]").forEach((el) => {
      el.textContent = String(new Date().getFullYear());
    });
  };

  const initTheme = () => {
    const stored = localStorage.getItem("em-theme");
    const theme = stored === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    updateThemeButtons(theme);

    qsa("[data-theme-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("em-theme", next);
        updateThemeButtons(next);
      });
    });
  };

  const updateThemeButtons = (theme) => {
    qsa("[data-theme-toggle]").forEach((btn) => {
      btn.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
    });
    qsa("[data-theme-icon]").forEach((icon) => {
      const show = icon.dataset.themeIcon === theme;
      icon.classList.toggle("hidden", !show);
    });
  };

  const initNav = () => {
    const nav = qs("#site-nav");
    const toggle = qs("#nav-toggle");
    const closeBtn = qs("#nav-close");
    const panel = qs("#mobile-panel");
    const overlay = qs("#nav-overlay");
    const links = qsa("[data-nav-link]");
    const sections = qsa("main section[id]");

    const setOpen = (open) => {
      panel.classList.toggle("is-open", open);
      overlay.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    };

    toggle.addEventListener("click", () => setOpen(!panel.classList.contains("is-open")));
    closeBtn?.addEventListener("click", () => setOpen(false));
    overlay.addEventListener("click", () => setOpen(false));
    links.forEach((link) => link.addEventListener("click", () => setOpen(false)));

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });

    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 24);
      const progress = qs("#scroll-progress");
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      progress.style.width = `${pct}%`;
      qs("#to-top").classList.toggle("is-visible", window.scrollY > 500);

      let current = "home";
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top - 120 <= 0) current = section.id;
      });
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${current}`);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  };

  const initSmoothAnchors = () => {
    qsa('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const id = anchor.getAttribute("href");
        if (!id || id === "#") return;
        const target = qs(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
      });
    });
  };

  const initRoles = () => {
    const el = qs("#role-text");
    if (!el) return;
    const roles = JSON.parse(el.dataset.roles || "[]");
    let i = 0;
    if (prefersReduced || roles.length < 2) {
      el.textContent = roles[0] || "Front-End Engineer";
      return;
    }
    const cycle = () => {
      el.style.opacity = "0";
      el.style.transform = "translateY(8px)";
      setTimeout(() => {
        i = (i + 1) % roles.length;
        el.textContent = roles[i];
        el.style.opacity = "1";
        el.style.transform = "none";
      }, 280);
    };
    el.style.transition = "opacity 0.28s ease, transform 0.28s ease";
    setInterval(cycle, 2600);
  };

  const initReveals = () => {
    const items = qsa(".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger, .hero-copy");
    if (prefersReduced) {
      items.forEach((el) => {
        el.classList.add("is-in");
        if (el.hasAttribute("data-skills")) animateSkills(el);
      });
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          if (entry.target.hasAttribute("data-skills")) animateSkills(entry.target);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));
  };

  const renderSkills = () => {
    const tech = qs("#skills-technical");
    const pro = qs("#skills-professional");
    const note = qs("#skills-note");
    if (note) note.textContent = CONFIG.skills.note;
    const row = (skill) => `
      <div>
        <div class="flex justify-between text-sm mb-1">
          <span>${skill.name}</span>
          <span class="text-[var(--muted)]" data-skill-level>${skill.level}%</span>
        </div>
        <div class="skill-bar" aria-hidden="true"><span data-width="${skill.level}"></span></div>
      </div>`;
    if (tech) tech.innerHTML = CONFIG.skills.technical.map(row).join("");
    if (pro) pro.innerHTML = CONFIG.skills.professional.map(row).join("");
  };

  const animateSkills = (root) => {
    qsa(".skill-bar > span", root).forEach((bar) => {
      bar.style.width = `${bar.dataset.width}%`;
    });
  };

  const initPortfolio = () => {
    const buttons = qsa("[data-filter]");
    const cards = qsa("[data-category]");
    const empty = qs("#portfolio-empty");
    const apply = (filter) => {
      let visible = 0;
      cards.forEach((card) => {
        const cats = (card.dataset.category || "").split(/\s+/);
        const show = filter === "all" || cats.includes(filter);
        card.classList.toggle("is-hidden", !show);
        if (show) visible += 1;
      });
      empty?.classList.toggle("hidden", visible > 0);
    };
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        buttons.forEach((b) => {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-pressed", String(b === btn));
        });
        apply(filter);
      });
    });
  };

  const initCv = async () => {
    const btn = qs("#download-cv");
    const hint = qs("#cv-hint");
    if (!btn) return;
    try {
      const res = await fetch(CONFIG.cvPath, { method: "HEAD" });
      if (!res.ok) throw new Error("missing");
      btn.href = CONFIG.cvPath;
      btn.removeAttribute("aria-disabled");
      btn.classList.remove("is-disabled");
      if (hint) hint.textContent = "Downloads the local CV file.";
    } catch {
      btn.href = "#resume";
      btn.setAttribute("aria-disabled", "true");
      btn.classList.add("is-disabled");
      btn.addEventListener("click", (e) => {
        if (btn.classList.contains("is-disabled")) e.preventDefault();
      });
      if (hint) {
        hint.textContent = `Add your CV at ${CONFIG.cvPath} to enable this download.`;
      }
    }
  };

  const initSocial = () => {
    Object.entries(CONFIG.social).forEach(([key, url]) => {
      qsa(`[data-social="${key}"]`).forEach((el) => {
        if (url) {
          el.href = url;
          el.removeAttribute("hidden");
          el.classList.remove("hidden");
        } else {
          el.setAttribute("hidden", "");
          el.classList.add("hidden");
        }
      });
    });
    const empty = qsa("[data-social-empty]");
    const hasAny = Object.values(CONFIG.social).some(Boolean);
    empty.forEach((el) => el.toggleAttribute("hidden", hasAny));
  };

  const initForm = () => {
    const form = qs("#contact-form");
    if (!form) return;
    const status = qs("#form-status");
    const submit = qs("#form-submit");
    const btnText = qs("#btn-text");
    const btnLoading = qs("#btn-loading");
    let isSubmitting = false;

    const fields = {
      name: qs("#full-name"),
      email: qs("#email"),
      subject: qs("#subject"),
      message: qs("#message"),
    };

    const setError = (key, msg) => {
      qs(`[data-error="${key}"]`).textContent = msg || "";
      fields[key].setAttribute("aria-invalid", msg ? "true" : "false");
    };

    const validate = () => {
      let ok = true;
      const name = fields.name.value.trim();
      const email = fields.email.value.trim();
      const subject = fields.subject.value.trim();
      const message = fields.message.value.trim();
      if (name.length < 2) {
        setError("name", "Please enter your full name.");
        ok = false;
      } else setError("name");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError("email", "Enter a valid email address.");
        ok = false;
      } else setError("email");
      if (subject.length < 3) {
        setError("subject", "Please add a subject.");
        ok = false;
      } else setError("subject");
      if (message.length < 10) {
        setError("message", "Message should be at least 10 characters.");
        ok = false;
      } else setError("message");
      return ok;
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      // Prevent duplicate submissions
      if (isSubmitting) return;
      
      status.textContent = "";
      if (!validate()) return;

      isSubmitting = true;
      submit.disabled = true;
      if (btnText) btnText.classList.add("hidden");
      if (btnLoading) btnLoading.classList.remove("hidden");

      const formData = new FormData(form);
      formData.set("_subject", `Portfolio Inquiry: ${fields.subject.value.trim()}`);
      formData.set("_cc", CONFIG.ccEmail);

      try {
        const response = await fetch(CONFIG.formEndpoint, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        const result = await response.json().catch(() => ({}));

        if (response.ok && String(result.success) !== "false") {
          status.textContent = "Message sent successfully. I'll get back to you as soon as possible.";
          status.className = "form-status mt-3 text-sm text-[var(--gold)]";
          form.reset();
        } else {
          status.textContent = result.message || "Oops! There was a problem submitting your form. Please try again.";
          status.className = "form-status mt-3 text-sm text-red-400";
        }
      } catch (error) {
        status.textContent = "An error occurred. Please check your connection and try again.";
        status.className = "form-status mt-3 text-sm text-red-400";
      } finally {
        isSubmitting = false;
        submit.disabled = false;
        if (btnText) btnText.classList.remove("hidden");
        if (btnLoading) btnLoading.classList.add("hidden");
      }
    });
  };

  const initRipple = () => {
    qsa(".btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (prefersReduced) return;
        const rect = btn.getBoundingClientRect();
        const span = document.createElement("span");
        span.className = "ripple";
        const size = 12;
        span.style.width = span.style.height = `${size}px`;
        span.style.left = `${e.clientX - rect.left}px`;
        span.style.top = `${e.clientY - rect.top}px`;
        btn.appendChild(span);
        setTimeout(() => span.remove(), 650);
      });
    });
  };

  const initCursor = () => {
    const dot = qs(".cursor-dot");
    const ring = qs(".cursor-ring");
    if (!dot || !ring || prefersReduced || !finePointer) return;
    document.body.classList.add("has-custom-cursor");
    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    window.addEventListener(
      "mousemove",
      (e) => {
        x = e.clientX;
        y = e.clientY;
        dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      },
      { passive: true }
    );
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    loop();
    qsa("a, button, input, textarea, select").forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => ring.classList.remove("is-hover"));
    });
  };

  const initParticles = () => {
    const canvas = qs("#particles");
    if (!canvas || prefersReduced) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const spawn = () => {
      const count = Math.min(48, Math.floor(window.innerWidth / 28));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.4,
        s: Math.random() * 0.35 + 0.08,
        a: Math.random() * 0.45 + 0.12,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.s;
        if (p.y < -4) p.y = canvas.height + 4;
        ctx.beginPath();
        ctx.fillStyle = `rgba(245, 185, 66, ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    resize();
    spawn();
    draw();
    window.addEventListener("resize", () => {
      resize();
      spawn();
    });
  };

  const initParallax = () => {
    if (prefersReduced) return;
    const nodes = qsa("[data-parallax]");
    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY;
        nodes.forEach((el) => {
          const speed = Number(el.dataset.parallax) || 0.12;
          el.style.transform = `translateY(${y * speed * 0.08}px)`;
        });
      },
      { passive: true }
    );
  };

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initIcons();
    updateThemeButtons(document.documentElement.getAttribute("data-theme") || "dark");
    initYear();
    initNav();
    initSmoothAnchors();
    initRoles();
    renderSkills();
    initReveals();
    initPortfolio();
    initCv();
    initSocial();
    initForm();
    initRipple();
    initCursor();
    initParticles();
    initParallax();
    initIcons();
    updateThemeButtons(document.documentElement.getAttribute("data-theme") || "dark");
  });
})();
