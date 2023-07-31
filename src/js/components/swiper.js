import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);




const swiper = new Swiper(".hero__swiper", {
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },

  autoplay: {
    delay: 8000,
    disableOnInteraction: false
  },
  speed: 700,

  pagination: {
    el: ".hero__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + ("0" + (index + 1)) + "</span>";
    }
  },

  navigation: {
    nextEl: '.hero__btn-next',
    prevEl: '.hero__btn-prev'
  }
});


const CardsSwiper = new Swiper(".cards__swiper", {
  slidesPerView: "auto",
  spaceBetween: -40,
  navigation: {
    nextEl: '.cards__btn-next',
    prevEl: '.cards__btn-prev'
  }
});

const TravelSwiper = new Swiper(".travel__swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },

  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.travel__btn-next',
    prevEl: '.travel__btn-prev'
  }
});

const SleepSwiper = new Swiper(".sleep__swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },

  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.sleep__btn-next',
    prevEl: '.sleep__btn-prev'
  }
});

const ShopSwiper = new Swiper(".shop__swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  slidesPerView: 1,
  navigation: {
    nextEl: '.shop__btn-next',
    prevEl: '.shop__btn-prev'
  }
});

