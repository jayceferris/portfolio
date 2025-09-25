document.addEventListener("DOMContentLoaded", function() {
    const tiles = document.querySelectorAll('.portfolio-tile');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else{
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    tiles.forEach(tile => {
        observer.observe(tile);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const tiles = document.querySelectorAll('.portfolio-text');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else{
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    tiles.forEach(tile => {
        observer.observe(tile);
    });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar") || document.querySelector('.static-navbar');

  // Background fade-in
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Text color fade
  const navTextItems = document.querySelectorAll(".nav-links a p");
  const maxScroll = 200;
  const scrollTop = window.scrollY;

  // This gets recalculated every scroll — up or down
  const fadePercent = Math.min(scrollTop / maxScroll, 1);
  const grayValue = Math.floor(255 * (1 - fadePercent)); // 255 → 0
  const color = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;

  navTextItems.forEach(item => {
    item.style.color = color;
  });
  });

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('primary-menu');
const navbar = document.querySelector('.navbar');

// Toggle dropdown
hamburger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
});

// Close on link click (nice on mobile)
menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    menu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// Close if you click outside
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// Hide dropdown if resizing to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 1000) {
    menu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// Optional: add/remove .scrolled to your navbar for logo/text swap
const toggleScrolled = () => {
  if (window.scrollY > 8) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
};
toggleScrolled();
window.addEventListener('scroll', toggleScrolled);