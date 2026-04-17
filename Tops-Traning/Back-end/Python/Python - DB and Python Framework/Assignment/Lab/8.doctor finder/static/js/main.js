// ============================
//  DOCTOR FINDER - MAIN JS
// ============================

document.addEventListener('DOMContentLoaded', () => {

  // --- Hamburger Menu ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navCta = document.querySelector('.nav-cta');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      if (navLinks) navLinks.classList.toggle('mobile-open');
      if (navCta) navCta.classList.toggle('mobile-open');
    });
  }

  // Mobile nav CSS injection
  const mobileStyle = document.createElement('style');
  mobileStyle.textContent = `
    @media (max-width: 768px) {
      .nav-links.mobile-open {
        display: flex; flex-direction: column; gap: 0.25rem;
        position: fixed; top: 65px; left: 0; right: 0;
        background: rgba(15,15,26,0.97); backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(255,255,255,0.07);
        padding: 1.25rem 1.5rem; z-index: 99;
      }
      .nav-cta.mobile-open {
        display: inline-flex;
        position: fixed; top: 220px; left: 1.5rem; right: 1.5rem;
        justify-content: center; z-index: 99;
      }
      .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
      .hamburger.open span:nth-child(2) { opacity: 0; }
      .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    }
  `;
  document.head.appendChild(mobileStyle);

  // --- Auto-dismiss messages after 4s ---
  const alerts = document.querySelectorAll('.alert');
  alerts.forEach(alert => {
    setTimeout(() => {
      alert.style.transition = 'opacity 0.4s ease';
      alert.style.opacity = '0';
      setTimeout(() => alert.remove(), 400);
    }, 4000);
  });

  // --- Scroll reveal animation ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const animateStyle = document.createElement('style');
  animateStyle.textContent = `
    .doctor-card, .specialty-card, .step-card, .detail-section {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
  `;
  document.head.appendChild(animateStyle);

  document.querySelectorAll('.doctor-card, .specialty-card, .step-card, .detail-section')
    .forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.06}s`;
      observer.observe(el);
    });

  // --- Set min date for booking form ---
  const dateInput = document.querySelector('input[name="appointment_date"]');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // --- Navbar shadow on scroll ---
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // --- Active nav link highlight ---
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

});
