// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

// Close mobile menu on nav link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// Contact form submission
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    form.style.display = 'none';
    formSuccess.style.display = 'flex';
  }, 1200);
});

// Scroll-reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.service-card, .testimonial-card, .process-step, .about-content, .about-visual, .contact-info, .contact-form-wrap'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
  observer.observe(el);
});

document.addEventListener('animationend', () => {}, { once: true });

// Add visible class styles via JS (avoids needing extra CSS class)
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
    .service-card:nth-child(2) { transition-delay: .1s !important; }
    .service-card:nth-child(3) { transition-delay: .2s !important; }
    .service-card:nth-child(4) { transition-delay: .05s !important; }
    .service-card:nth-child(5) { transition-delay: .15s !important; }
    .service-card:nth-child(6) { transition-delay: .25s !important; }
    .testimonial-card:nth-child(2) { transition-delay: .1s !important; }
    .testimonial-card:nth-child(3) { transition-delay: .2s !important; }
    .process-step:nth-child(3) { transition-delay: .1s !important; }
    .process-step:nth-child(5) { transition-delay: .2s !important; }
    .process-step:nth-child(7) { transition-delay: .3s !important; }
  </style>
`);
