const navButton = document.querySelector('.nav-block-button');
const mainNav = document.querySelector('.main-header__nav');

// Обработчик кликов на кнопку
navButton.addEventListener('click', function() {
  mainNav.classList.toggle('nav-closed');
});
