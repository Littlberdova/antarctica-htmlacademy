import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  //  Открытие меню

  const navMain = document.querySelector('.main-nav__menu');
  const navToggle = document.querySelector('.main-nav__toggle');
  const headerWrapper = document.querySelector('.page-header__wrapper');
  const header = document.querySelector('.page-header');
  navMain.classList.remove('main-nav__menu--nojs');
  headerWrapper.classList.remove('page-header__wrapper--nojs');
  navMain.classList.remove('main-nav__menu--opened');
  navMain.classList.add('main-nav__menu--closed');
  headerWrapper.classList.remove('page-header__wrapper--opened');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav__menu--closed')) {
      navMain.classList.remove('main-nav__menu--closed');
      navMain.classList.add('main-nav__menu--opened');
      headerWrapper.classList.add('page-header__wrapper--opened');
      header.style.height = '538px';
      document.querySelector('.page-header__logo-icon').style.fill = 'rgba(1, 28, 64, 1)';
      document.body.style.position = 'fixed';

    } else {
      navMain.classList.add('main-nav__menu--closed');
      navMain.classList.remove('main-nav__menu--opened');
      headerWrapper.classList.remove('page-header__wrapper--opened');
      document.querySelector('.page-header__logo-icon').style.fill = 'rgba(249, 251, 253, 1)';
      header.style.height = 'auto';
      document.body.style.position = 'static';
    }
  });

  // Плавный скролл
  const siteLinks = document.querySelectorAll('a[href*="#"]');
  if (siteLinks.length >= 1) {

    for (let siteLink of siteLinks) {
      siteLink.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = siteLink.getAttribute('href');

        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }
  }

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});
