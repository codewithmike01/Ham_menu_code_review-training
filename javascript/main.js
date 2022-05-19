const ham = document.querySelector('.menu-bars');
const cancel = document.querySelector('.cancel');
const menu = document.querySelector('#desktop-nav');
const navLinks = document.querySelectorAll('.nav_link');

// Function helper (hide and show mobile menu)
function hide_show(paramOne, paramTwo) {
  menu.style.display = paramOne;
  ham.style.display = paramTwo;
}

ham.addEventListener('click', () => {
  hide_show('block', 'none');
});

cancel.addEventListener('click', () => {
  hide_show('none', 'block');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    console.log('hello');
    hide_show('none', 'block');
  });
});
