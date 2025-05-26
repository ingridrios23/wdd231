const menuBtn = document.getElementById('menuBtn');
const navUl = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  navUl.classList.toggle('hidden');
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
  menuBtn.setAttribute('aria-expanded', !expanded);
});
