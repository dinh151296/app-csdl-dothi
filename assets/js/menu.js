// menu
let menuIconToggle = document.querySelector('.burger');
let menuMain = document.querySelector('.main-menu');
menuIconToggle.addEventListener('click', function() {
  menuIconToggle.classList.toggle('active');
  menuMain.classList.toggle('show');

})