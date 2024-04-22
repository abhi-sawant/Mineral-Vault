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

let points = document.querySelectorAll('.point');
let details = document.querySelectorAll('.detail');

points.forEach((point, index) => {
  point.addEventListener('click', () => {
    points.forEach((point) => point.classList.remove('point--active'));
    point.classList.toggle('point--active');
    details[index].classList.toString('detail-toggle');
  });
});

let accordionItems = document.querySelectorAll('.accordion__item');
let accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach((header, index) => {
  header.addEventListener('click', () => {
    accordionItems.forEach((item) =>
      item.classList.remove('accordion__item--active')
    );
    accordionItems[index].classList.add('accordion__item--active');
  });
});
