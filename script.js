/*$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.menu').toggleClass('active')
  })
});*/
"use strict"

const burgerBtn = document.querySelector('.header__burger')
const menu = document.querySelector('.menu')

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active')
  menu.classList.toggle('active')
})