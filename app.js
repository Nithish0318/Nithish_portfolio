/* ==========================================================================
   Nithishkumar S - Ultra Cyberpunk Glassmorphic Interactive Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initMouseSpotlight();
  initThemeToggle();
  initTypingEffect();
  initHeaderScroll();
  initMobileMenu();
  initCounterStats();
  initProjectFilters();
  initProjectModals();
  initSearchPlayground();
  initContactForm();
  initScrollTop();
});

/* --- Interactive Particle Constellation --- */
function initParticleCanvas() {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 16), 75);

  let mouse = { x: null, y: null, radius: 160 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? 'rgba(0, 242, 254, ' : 'rgba(157, 78, 221, '
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Mouse repulsion/attraction
      if (mouse.x !== null) {
        let dx = mouse.x - p.x;
        let dy = mouse.y - p.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          p.x -= dx * 0.015;
          p.y -= dy * 0.015;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + '0.7)';
      ctx.shadowBlur = 12;
      ctx.shadowColor = p.color.includes('0, 242') ? '#00f2fe' : '#9d4edd';
      ctx.fill();

      // Constellation connection lines
      for (let j = i + 1; j < particles.length; j++) {
        let p2 = particles[j];
        let dx = p.x - p2.x;
        let dy = p.y - p2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${0.22 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* --- Mouse Spotlight Follower --- */
function initMouseSpotlight() {
  const spotlight = document.createElement('div');
  spotlight.className = 'mouse-spotlight';
  document.body.appendChild(spotlight);

  window.addEventListener('mousemove', (e) => {
    spotlight.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  });
}

/* --- Theme Switcher --- */
function initThemeToggle() {
  const themeBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(themeBtn, savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateThemeIcon(themeBtn, newTheme);
      showToast(`Switched to ${newTheme.toUpperCase()} theme`);
    });
  }
}

function updateThemeIcon(btn, theme) {
  if (!btn) return;
  btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
}

/* --- Typing Effect --- */
function initTypingEffect() {
  const typedSpan = document.getElementById('typedText');
  if (!typedSpan) return;

  const roles = [
    "Mobile Engineer (Flutter)",
    "Backend Developer (Go / Golang)",
    "Full-Stack Web Dev (React & TS)",
    "Database & Search Architect (Bleve / Mongo)"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const delayBetweenRoles = 2200;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typedSpan.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typedSpan.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenRoles);
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    }
  }

  type();
}

/* --- Header Scroll & ScrollSpy --- */
function initHeaderScroll() {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --- Mobile Drawer --- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '☰';
      });
    });
  }
}

/* --- Animated Counter Stats --- */
function initCounterStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = parseFloat(stat.getAttribute('data-target'));
          const suffix = stat.getAttribute('data-suffix') || '';
          let count = 0;
          const duration = 1600;
          const increment = target / (duration / 16);

          const updateCount = () => {
            count += increment;
            if (count < target) {
              stat.textContent = (target % 1 === 0 ? Math.floor(count) : count.toFixed(1)) + suffix;
              requestAnimationFrame(updateCount);
            } else {
              stat.textContent = target + suffix;
            }
          };
          updateCount();
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.getElementById('stats');
  if (statsSection) observer.observe(statsSection);
}

/* --- Project Category Filter --- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* --- Project Modals --- */
const projectDataDetails = {
  project1: {
    title: "Direct Agri-Tech Platform (Farmers to Consumers)",
    category: "Flutter / Go / Mongo / Hive / BoltDB / AWS S3 / FCM / Bleve",
    image: "assets/project1.png",
    overview: "Direct-to-consumer agri-tech mobile ecosystem connecting local farmers directly with end consumers, eliminating middlemen to guarantee fair agricultural pricing and fresh produce delivery.",
    tech: ["Flutter", "Go (Golang)", "MongoDB", "Hive DB", "BoltDB", "AWS S3", "Firebase (FCM)", "Bleve Indexing"],
    highlights: [
      "Sub-10ms crop & produce search indexing powered by Bleve Engine written in Go.",
      "Offline-first order queue built with Flutter, Hive DB, and local BoltDB caching.",
      "Real-time price updates & harvest alert push notifications via Firebase (FCM).",
      "Secure AWS S3 storage pipeline for farmer verification docs and produce photos."
    ]
  },
  project2: {
    title: "Full-Stack Enterprise E-Commerce Platform",
    category: "Go / React / Node.js / MongoDB / MSSQL",
    image: "assets/project2.png",
    overview: "Scalable multi-vendor e-commerce web platform handling high-throughput catalog browsing, cart checkouts, and transactional financial auditing.",
    tech: ["Go (Golang)", "React", "Node.js", "MongoDB", "MSSQL"],
    highlights: [
      "Hybrid DB system: MongoDB for dynamic product catalogs + MSSQL for ACID financial transactions.",
      "High-concurrency checkout microservices built in Go for inventory locks & reservations.",
      "Modern React portal featuring interactive vendor dashboards & customer checkout flows.",
      "Node.js integration layer for payment webhooks, notifications, and order processing."
    ]
  }
};

function initProjectModals() {
  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.project-action-link')) return;

      const projectId = card.getAttribute('data-project-id');
      const data = projectDataDetails[projectId];
      if (!data) return;

      document.getElementById('modalTitle').textContent = data.title;
      document.getElementById('modalCategory').textContent = data.category;
      document.getElementById('modalImg').src = data.image;
      document.getElementById('modalOverview').textContent = data.overview;

      const techContainer = document.getElementById('modalTech');
      techContainer.innerHTML = data.tech.map(t => `<span class="project-tag">${t}</span>`).join('');

      const highlightsContainer = document.getElementById('modalHighlights');
      highlightsContainer.innerHTML = data.highlights.map(h => `<li>${h}</li>`).join('');

      modalOverlay.classList.add('active');
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }
}

/* --- Search & Dispatcher Simulator --- */
function initSearchPlayground() {
  const searchInput = document.getElementById('demoSearchInput');
  const searchBtn = document.getElementById('demoSearchBtn');
  const consoleContainer = document.getElementById('demoConsole');

  const demoDatabase = [
    { query: "flutter", title: "Direct Agri-Tech Farmer App (Flutter)", latency: "0.9ms", matches: 38 },
    { query: "go", title: "Go Order Checkout & Bleve Search Engine", latency: "0.4ms", matches: 64 },
    { query: "mongo", title: "MongoDB Produce & Catalog Storage", latency: "1.8ms", matches: 29 },
    { query: "bleve", title: "Bleve Full-Text Crop Search Index", latency: "0.3ms", matches: 72 },
    { query: "react", title: "Enterprise E-Commerce React Portal", latency: "1.2ms", matches: 21 },
    { query: "hive", title: "Hive Offline Order Queue Cache", latency: "0.2ms", matches: 15 }
  ];

  function runSimulation(term) {
    if (!consoleContainer) return;
    const queryTerm = term.trim().toLowerCase();

    appendConsoleLine(`<span class="console-prompt">[$] bleve-query --term="${queryTerm}" --shards=4</span>`);

    setTimeout(() => {
      appendConsoleLine(`<span class="console-info">[DEBUG] Scanning Bleve Inverted Index & MongoDB shards...</span>`);
    }, 180);

    setTimeout(() => {
      const match = demoDatabase.find(d => d.query.includes(queryTerm) || queryTerm.includes(d.query));
      if (match) {
        appendConsoleLine(`<span class="console-success">[SUCCESS] 200 OK (${match.latency}) - ${match.matches} documents indexed</span>`);
        appendConsoleLine(` └─ Result: "${match.title}"`);
      } else {
        appendConsoleLine(`<span class="console-success">[SUCCESS] 200 OK (0.5ms) - Scanned indexes for Flutter, Go, and Database modules.</span>`);
      }
      consoleContainer.scrollTop = consoleContainer.scrollHeight;
    }, 450);
  }

  function appendConsoleLine(htmlContent) {
    const line = document.createElement('div');
    line.className = 'console-line';
    line.innerHTML = htmlContent;
    consoleContainer.appendChild(line);
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      const text = searchInput.value || "flutter";
      runSimulation(text);
    });

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const text = searchInput.value || "go";
        runSimulation(text);
      }
    });
  }
}

/* --- Contact Form --- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('formName').value;

    showToast(`Thank you ${name}! Message sent successfully.`);
    form.reset();
  });
}

/* --- Scroll To Top --- */
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --- Toast Function --- */
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
