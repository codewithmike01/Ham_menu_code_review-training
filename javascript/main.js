const ham = document.querySelector('.menu-bars');
const cancel = document.querySelector('.cancel');
const menu = document.querySelector('#desktop-nav');
const navLinks = document.querySelectorAll('.nav_link');

// Function helper (hide and show mobile menu)
function hideShow(paramOne, paramTwo) {
  menu.style.display = paramOne;
  ham.style.display = paramTwo;
}

ham.addEventListener('click', () => {
  hideShow('block', 'none');
});

cancel.addEventListener('click', () => {
  hideShow('none', 'block');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hideShow('none', 'block');
  });
});
