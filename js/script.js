var swiper = new Swiper(".threeSwiper", {
      slidesPerView: 3,
      spaceBetween: 40,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  breakpoints: {
    // mobile
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 30
    },
    // laptop va kattaroq
    1103: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
var swiper = new Swiper(".introSwiper ", {
  pagination: {
        el: ".swiper-pagination-grey",
        clickable: true,
      },
});
var swiper = new Swiper(".productSwiper", {
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    // mobile
    0: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    // planshet
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // desktop
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
