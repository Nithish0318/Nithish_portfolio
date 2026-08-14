/* ==========================================================================
   MAIN APPLICATION LOGIC - NITHISHKUMAR S. PORTFOLIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 1. Particle Canvas System
  initParticleCanvas();

  // 2. Dynamic Typist Engine
  initTypistEngine();

  // 3. Header Scroll & Nav Active Observer
  initNavbarObserver();

  // 4. Projects Showcase & Modal
  initProjectsShowcase();

  // 5. Skills Progress Animation on Scroll
  initSkillsObserver();

  // 6. Cmd+K Command Palette
  initCommandPalette();

  // 7. Contact Form Handler & Toast System
  initContactForm();
});

/* ==========================================================================
   1. PARTICLE CANVAS ANIMATION
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 18), 70);
  const maxDistance = 140;

  const mouse = { x: null, y: null, radius: 180 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? '#00f2fe' : '#7f00ff';
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse attraction / repulsion
      if (mouse.x && mouse.y) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${1 - dist / maxDistance})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. DYNAMIC TYPIST ENGINE
   ========================================================================== */
function initTypistEngine() {
  const typist = document.getElementById('typing-text');
  if (!typist) return;

  const words = [
    "Flutter Monorepos (Melos)",
    "Full-Stack Software Architecture",
    "Go Microservices & Financial Engines",
    "Scalable Mobile & Web Ecosystems"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const delayAfterType = 2000;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typist.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typist.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => { isDeleting = true; type(); }, delayAfterType);
      return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
  }

  type();
}

/* ==========================================================================
   3. NAVBAR SCROLL OBSERVER
   ========================================================================== */
function initNavbarObserver() {
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
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

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

/* ==========================================================================
   4. PROJECTS SHOWCASE & MODAL
   ========================================================================== */
const projectData = {
  ezkart: {
    title: "EzKart Consumer E-Commerce Platform",
    subtitle: "Flutter Mobile Monorepo with Razorpay Payment Gateway & FCM",
    image: "assets/ezkart.jpg",
    tags: ["Flutter", "Dart", "Melos Monorepo", "Razorpay API", "Firebase FCM", "Google Mobile Ads"],
    overview: `
      EzKart is an enterprise-grade mobile e-commerce platform built as part of the <strong>ezapps</strong> monorepo. It features intuitive organic product browsing, real-time cart state management, seamless Razorpay checkout, live order status push notifications, and high-performance offline caching.
    `,
    highlights: [
      "Monorepo Architecture using Melos for shared package reuse across apps.",
      "Razorpay Payment Gateway integration with secure checksum handling.",
      "Firebase Cloud Messaging (FCM) push notifications for real-time order status updates.",
      "Integrated Google Mobile Ads for targeted product promotions."
    ],
    github: "https://github.com/Nithish0318"
  },
  ezkartadmin: {
    title: "EzKart Multi-Role Admin & Delivery Suite",
    subtitle: "Unified Application for Farmers, Delivery Drivers & System Admins",
    image: "assets/ezkart_admin.jpg",
    tags: ["Flutter Web & Mobile", "Route Optimization", "Inventory System", "Melos"],
    overview: `
      The administrative backbone of the EzKart ecosystem (` + "`apps/ezkartadmin`" + `). Engineered to empower Farmers to manage fresh crop listings, Delivery Drivers with live GPS route maps, and System Admins with full user analytics.
    `,
    highlights: [
      "Role-based authentication & view rendering tailored for Farmer/Driver/Admin profiles.",
      "GPS route optimization interface reducing delivery turnaround time.",
      "Live harvest inventory stock updates synchronized with the consumer app.",
      "Real-time analytics dashboard monitoring daily order volumes."
    ],
    github: "https://github.com/Nithish0318"
  },
  accounting: {
    title: "Financial Accounting Engine & Migration",
    subtitle: "Go Microservices Engine for Double-Entry Ledger & P&L Calculation",
    image: "assets/accounting.jpg",
    tags: ["Go (Golang)", "Flutter", "MongoDB", "Dispatcher Pattern", "Int64 Paisa Precision"],
    overview: `
      Engineered a high-precision financial accounting engine migrated from legacy Flutter logic to a high-performance Go backend microservice. Implements a robust Dispatcher Pattern handling General Ledgers, Day Books, Profit & Loss reports, and Trial Balances without floating-point inaccuracies.
    `,
    highlights: [
      "Int64 (Paisa) representation preventing floating-point rounding errors in currency.",
      "Dispatcher pattern architecture managing multi-ledger financial transactions.",
      "MongoDB backend optimization for fast date-range aggregated balance querying.",
      "Seamless RESTful API connection with Flutter frontend accounting app."
    ],
    github: "https://github.com/Nithish0318"
  },
  ezbroker: {
    title: "EzBroker Real Estate Marketplace",
    subtitle: "Cross-Platform Property Search & Brokerage Platform",
    image: "assets/ezbroker.jpg",
    tags: ["Flutter", "Node.js", "Express", "Geo-Search", "MongoDB"],
    overview: `
      A modern mobile brokerage marketplace platform connecting property buyers, sellers, and real-estate agents. Features location-based filtering, detailed property media carousels, instant inquiry messaging, and saved property bookmarks.
    `,
    highlights: [
      "Geo-location filtering allowing users to explore nearby properties on interactive maps.",
      "Interactive media showcase with high-res photo carousels and property specs.",
      "Real-time inquiry forms connecting prospective buyers directly with listing agents."
    ],
    github: "https://github.com/Nithish0318"
  }
};

function initProjectsShowcase() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const modalOverlay = document.getElementById('project-detail-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBody = document.getElementById('project-modal-body');

  // Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Modal Detail Handlers
  document.querySelectorAll('.open-project-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const data = projectData[id];
      if (!data) return;

      modalBody.innerHTML = `
        <img src="${data.image}" alt="${data.title}" style="width: 100%; max-height: 300px; object-fit: cover; border-radius: 16px; margin-bottom: 1.5rem; border: 1px solid var(--glass-border);">
        <h2 style="font-size: 2rem; font-weight: 800; color: #fff; margin-bottom: 0.5rem;">${data.title}</h2>
        <div style="color: var(--accent-cyan); font-weight: 600; font-size: 1rem; margin-bottom: 1.25rem;">${data.subtitle}</div>
        
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
          ${data.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>

        <div style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 1.75rem;">
          ${data.overview}
        </div>

        <h3 style="font-size: 1.2rem; font-weight: 700; color: #fff; margin-bottom: 0.75rem;">Key Architecture Highlights</h3>
        <ul style="color: var(--text-muted); padding-left: 1.25rem; line-height: 1.6; margin-bottom: 2rem;">
          ${data.highlights.map(h => `<li style="margin-bottom: 0.5rem;">${h}</li>`).join('')}
        </ul>

        <div style="display: flex; gap: 1rem;">
          <a href="${data.github}" target="_blank" class="btn btn-primary">
            <i data-lucide="github" style="width: 18px; height: 18px;"></i>
            <span>View GitHub Repository</span>
          </a>
        </div>
      `;

      if (window.lucide) lucide.createIcons();
      modalOverlay.classList.add('active');
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });
}

/* ==========================================================================
   5. SKILLS OBSERVER ANIMATION
   ========================================================================== */
function initSkillsObserver() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-progress');
        bar.style.width = targetWidth;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });

  skillBars.forEach(bar => observer.observe(bar));
}

/* ==========================================================================
   6. CMD+K COMMAND PALETTE
   ========================================================================== */
function initCommandPalette() {
  const modal = document.getElementById('cmd-modal');
  const trigger = document.getElementById('cmd-k-trigger');
  const searchInput = document.getElementById('cmd-search-input');
  const resultsList = document.getElementById('cmd-results-list');

  const commands = [
    { title: "Go to About & Bio", icon: "user", action: () => scrollToSection('about') },
    { title: "View Featured Projects", icon: "folder-git-2", action: () => scrollToSection('projects') },
    { title: "Inspect Technical Skills", icon: "code-2", action: () => scrollToSection('skills') },
    { title: "View Career Timeline (Radpro Infotech)", icon: "briefcase", action: () => scrollToSection('experience') },
    { title: "Get In Touch / Contact", icon: "mail", action: () => scrollToSection('contact') },
    { title: "Open GitHub Profile (@Nithish0318)", icon: "github", action: () => window.open('https://github.com/Nithish0318', '_blank') },
    { title: "EzKart Consumer Case Study", icon: "shopping-bag", action: () => openModalById('ezkart') },
    { title: "EzKart Admin Suite Case Study", icon: "shield-check", action: () => openModalById('ezkartadmin') },
    { title: "Financial Accounting Engine Case Study", icon: "line-chart", action: () => openModalById('accounting') }
  ];

  function openCmd() {
    modal.classList.add('active');
    searchInput.focus();
    renderCommands(commands);
  }

  function closeCmd() {
    modal.classList.remove('active');
    searchInput.value = '';
  }

  function renderCommands(items) {
    resultsList.innerHTML = items.map((cmd, i) => `
      <li class="cmd-item" data-index="${i}">
        <div class="cmd-item-left">
          <i data-lucide="${cmd.icon}" style="width: 18px; height: 18px; color: var(--accent-cyan);"></i>
          <span>${cmd.title}</span>
        </div>
        <i data-lucide="corner-down-left" style="width: 14px; height: 14px; opacity: 0.5;"></i>
      </li>
    `).join('');

    if (window.lucide) lucide.createIcons();

    document.querySelectorAll('.cmd-item').forEach((el, index) => {
      el.addEventListener('click', () => {
        items[index].action();
        closeCmd();
      });
    });
  }

  function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }

  function openModalById(id) {
    const btn = document.querySelector(`.open-project-modal[data-id="${id}"]`);
    if (btn) btn.click();
  }

  if (trigger) trigger.addEventListener('click', openCmd);

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (modal.classList.contains('active')) closeCmd();
      else openCmd();
    }
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeCmd();
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCmd();
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const filtered = commands.filter(c => c.title.toLowerCase().includes(q));
      renderCommands(filtered);
    });
  }
}

/* ==========================================================================
   7. CONTACT FORM & TOAST SYSTEM
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const message = document.getElementById('form-message').value;

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    showToast(`Thank you, ${name}! Your message has been sent successfully.`);
    form.reset();
  });
}

function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}" style="width: 20px; height: 20px; color: ${type === 'success' ? '#00f5a0' : '#ff0050'};"></i>
    <span>${msg}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
