/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// Header add class when scrolling
window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  if (header) {
    if (window.scrollY > 0) {
      header.classList.add('_scroll');
    } else {
      header.classList.remove('_scroll');
    }
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var burgerBtn = document.querySelector('.header__burger-btn');
  var nav = document.querySelector('.header__nav');
  if (burgerBtn) {
    burgerBtn.addEventListener('click', function () {
      nav.classList.toggle('_active');
      burgerBtn.classList.toggle('_active');
    });
  }
  document.addEventListener('click', function (event) {
    if (nav.classList.contains('_active') && !nav.contains(event.target) && !burgerBtn.contains(event.target)) {
      nav.classList.remove('_active');
      burgerBtn.classList.remove('_active');
    }
  });
});
/******/ })()
;