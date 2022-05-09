document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector(".header");
  let anchors = document.querySelectorAll('a[href*="#"]');
  let hamburger = document.querySelector(".hamburger");
  let menu = document.querySelector(".nav");
  let menuItem = document.querySelectorAll(".nav__link");
  let accordBtn = document.querySelectorAll(".accordion__btn");

  function fixHeader() {
    if (window.pageYOffset >= header.offsetHeight - 10) {
      header.classList.add("header--fixed");
    } else {
      header.classList.remove("header--fixed");
    };
  };

  window.addEventListener('scroll', fixHeader);

  hamburger.addEventListener("click", function (e) {
    this.classList.toggle("is-active");
    menu.classList.toggle("active");
  });

  for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", function () {
      this.closest(".nav").classList.remove("active");
      hamburger.classList.remove("is-active")
    });
  };

  for (let i = 0; i < accordBtn.length; i++) {
    accordBtn[i].addEventListener("click", function () {
      this.classList.toggle("active");
      this.closest(".accordion__item").classList.toggle("active");
      let accordInfo = this.parentNode.nextElementSibling;
      if (accordInfo.style.maxHeight) {
        accordInfo.style.maxHeight = null;
      } else {
        accordInfo.style.maxHeight = accordInfo.scrollHeight + "px";
      }
    });
  };

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
});
const swiper = new Swiper('.swiper-container', {
  speed: 700,
  spaceBetween: 10,
  slidesPerView: 1,
  breakpoints: {
    476: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    576: {
      spaceBetween: 60,
    },
    769: {
      spaceBetween: 110,
      slidesPerView: 2
    },
    1025: {
      slidesPerView: 2,
      spaceBetween: 165
    },
  },

  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',

  },
});

let header = document.querySelector(".header");

function fixHeader() {
  if (window.pageYOffset >= header.offsetHeight - 10) {
    header.classList.add("header--fixed");
  } else {
    header.classList.remove("header--fixed");
  };
};
window.addEventListener("load", fixHeader);