document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function() {
      menu.classList.toggle('show');
  });

  document.addEventListener('click', function(event) {
      if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
          menu.classList.remove('show');
      }
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Accordion functionality
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
          this.classList.toggle('active');
          const content = this.nextElementSibling;
          content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
  });
});
