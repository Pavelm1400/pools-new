const menuBurger = $('.menu-burger');
const headerNav = $('.header__nav');
const pageBody = $('.body');
const headerCancel = $('.header__cancel-icon');

menuBurger.click(() => {
  headerNav.addClass('is-opened');
  pageBody.addClass('body_unscrolled');
});

headerCancel.click(() => {
  headerNav.removeClass('is-opened');
  pageBody.removeClass('body_unscrolled');
});
