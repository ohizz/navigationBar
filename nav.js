const primaryNav = document.querySelector('.primary-navigation');
const nav = document.querySelector('.mobile-nav');
const head = document.querySelector('header')

nav.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    nav.setAttribute('aria-expanded', true);
    document.querySelector('body').style.overflow = 'hidden';
  } else if (visibility === 'true') {
    primaryNav.setAttribute('data-visible', false);
    nav.setAttribute('aria-expanded', false);
    document.querySelector('body').style.overflow = 'auto';
  }
})

