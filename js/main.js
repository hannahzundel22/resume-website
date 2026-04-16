// Highlight the active nav link based on scroll position (index.html only)
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  function onScroll() {
    let current = '';
    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
