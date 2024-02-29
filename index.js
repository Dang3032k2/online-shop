const navbarMenu = document.getElementById('navbar-menu');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

navbarMenu.onclick = () => {
  drawer.classList.remove('drawer-close');
  drawer.classList.add('drawer-open');
  overlay.classList.remove('overlay-close');
  overlay.classList.add('overlay-open');
  document.body.style.overflowY = 'hidden';
};

const closeDrawer = document.getElementById('close-drawer');
closeDrawer.onclick = () => {
  drawer.classList.remove('drawer-open');
  drawer.classList.add('drawer-close');
  overlay.classList.remove('overlay-open');
  overlay.classList.add('overlay-close');
  document.body.style.overflowY = 'unset';
};

const changeSearchDisplay = (button, type) => {
  const navbarSearchElement = button.parentNode;
  const flagElement = navbarSearchElement.previousElementSibling;
  const cartElement = navbarSearchElement.nextElementSibling;
  if (type === 'open') {
    const searchInpElement = button.previousElementSibling;
    const closeSearchInpElement = button.nextElementSibling;
    button.classList.remove('visible');
    button.classList.add('hidden');
    closeSearchInpElement.style.display = 'unset';
    flagElement.querySelector('img').classList.remove('visible');
    flagElement.querySelector('img').classList.add('hidden');
    cartElement.classList.remove('visible');
    cartElement.classList.add('hidden');
    searchInpElement.classList.add('hidden');
    searchInpElement.classList.add('search-inp-visible');
    searchInpElement.focus();
  } else if (type === 'close') {
    const openSearchInpElement = button.previousElementSibling;
    const searchInpElement = openSearchInpElement.previousElementSibling;
    button.style.display = 'none';
    searchInpElement.classList.remove('search-inp-visible');
    searchInpElement.classList.add('hidden');
    searchInpElement.value = '';
    openSearchInpElement.classList.remove('hidden');
    openSearchInpElement.classList.add('visible');
    openSearchInpElement.style.display = 'unset';
    flagElement.querySelector('img').classList.remove('hidden');
    flagElement.querySelector('img').classList.add('visible');
    cartElement.classList.remove('hidden');
    cartElement.classList.add('visible');
  }
};
