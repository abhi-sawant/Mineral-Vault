// === === === === Navbar logic === === === ===
let hamburgers = document.querySelectorAll('.hamburger');
let headerLinks = document.querySelector('#headerLinks');

hamburgers.forEach((hamburger) =>
  hamburger.addEventListener('click', () => {
    hamburgers.forEach((hamburger) => hamburger.classList.toggle('is-active'));
    headerLinks.classList.toggle('header__links--open');
  })
);
// === === === === Navbar logic === === === ===
