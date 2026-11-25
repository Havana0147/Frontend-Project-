document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.hamburger');
  const nav = document.querySelector('.header-links');

  if (menuButton && nav) {
    menuButton.setAttribute('aria-expanded', 'false');

    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => nav.classList.remove('is-open'));
    });
  }

  const contactForm = document.querySelector('.contact form');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Thanks for reaching out. Our team will get back to you shortly.');
      contactForm.reset();
    });
  }

  const adminLoginForm = document.getElementById('adminLoginForm');
  const adminDashboard = document.getElementById('adminDashboard');
  const adminMessage = document.getElementById('adminMessage');

  if (adminLoginForm && adminDashboard && adminMessage) {
    adminLoginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const password = document.getElementById('adminPassword').value;

      if (password !== 'Havana2026!') {
        adminMessage.textContent = 'Invalid password. Please try again.';
        adminMessage.style.color = '#b42318';
        return;
      }

      adminMessage.textContent = '';
      adminLoginForm.classList.add('hidden');
      adminDashboard.classList.remove('hidden');
    });

    const logoutButton = document.querySelector('#adminDashboard .btn-secondary');

    logoutButton.addEventListener('click', () => {
      adminLoginForm.reset();
      adminDashboard.classList.add('hidden');
      adminLoginForm.classList.remove('hidden');
      adminMessage.textContent = 'You have been logged out.';
      adminMessage.style.color = '#087443';
    });
  }

  const signupForm = document.getElementById('signupForm');
  const signupMessage = document.getElementById('signupMessage');

  if (signupForm && signupMessage) {
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.getElementById('fullName').value.trim();
      const password = document.getElementById('password').value;

      if (!name || password.length < 8) {
        signupMessage.textContent = 'Please complete the form and use a password of at least 8 characters.';
        signupMessage.style.color = '#b42318';
        return;
      }

      signupMessage.textContent = `Welcome, ${name}. Your account has been created.`;
      signupMessage.style.color = '#087443';
      signupForm.reset();
    });
  }

  const signinForm = document.getElementById('signinForm');
  const signinMessage = document.getElementById('signinMessage');
  const passwordToggle = document.querySelector('.password-toggle');
  const signinPassword = document.getElementById('signinPassword');

  if (passwordToggle && signinPassword) {
    passwordToggle.addEventListener('click', () => {
      const showing = signinPassword.type === 'text';
      signinPassword.type = showing ? 'password' : 'text';
      passwordToggle.textContent = showing ? 'Show' : 'Hide';
      passwordToggle.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
      passwordToggle.setAttribute('aria-pressed', String(!showing));
    });
  }

  if (signinForm && signinMessage) {
    signinForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.getElementById('signinEmail').value.trim();
      const password = signinPassword.value;

      if (!email || password.length < 8) {
        signinMessage.textContent = 'Enter a valid email address and password to continue.';
        signinMessage.style.color = '#b42318';
        return;
      }

      signinMessage.textContent = 'Sign-in verified. Welcome back to Havana Autos.';
      signinMessage.style.color = '#087443';
    });
  }
});
