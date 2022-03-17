const $headerButton = document.querySelector('.header__button')
const $headerNav = document.querySelector('.header__nav')

$headerButton.addEventListener('click', () => {
  $headerButton.classList.toggle('header__button--close')
  $headerNav.classList.toggle('header__nav--hidden')
})
