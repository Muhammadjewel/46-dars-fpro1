var elSiteHeader = document.querySelector('.site-header');
var elSiteHeaderToggler = elSiteHeader.querySelector('.js-side-header-toggler');

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener('click', function () {
    elSiteHeader.classList.toggle('site-header--open');
  });
}
