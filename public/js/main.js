const hamburgerButton = document.getElementById('hamburger-button');
const mainNav = document.getElementById('main-nav');

if (hamburgerButton && mainNav) {
  hamburgerButton.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });
}