// ブラウザバックでも強制リロードでページ遷移フェードインを安定させる
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    // bfcache発動時の処理
    window.location.reload();
  }
});

// particlesJSの設定
particlesJS.load('particles-js', 'assets/particles.json', () => {
  console.log('callback - particles.js config loaded');
});

// DOMContentLoadedイベントを一つにまとめる
document.addEventListener('DOMContentLoaded', () => {
  initSwipers();
  initSliders();
  initSlickSliders();
  initAccordion();
  initMenuTrigger();
  initScrollReveal();
});

// Swiperの初期化
function initSwipers() {
  const swiperThumb1 = new Swiper("#swiperThumb1", {
    spaceBetween: 10,
    slidesPerView: 6,
    watchSlidesProgress: true,
  });

  const swiperThumb3 = new Swiper("#swiperThumb3", {
    watchSlidesProgress: true,
    slidesPerView: 4,  // 表示するスライド数を指定
    spaceBetween: 10,  // スライド間のスペース
    touchRatio: 0,     // タッチによるスワイプを無効化
    slideToClickedSlide: true,  // クリックしたスライドに移動する
  });
  
  new Swiper("#swiperMain1", {
    spaceBetween: 20,
    thumbs: { swiper: swiperThumb1 },
    navigation: {
      nextEl: ".next1",
      prevEl: ".prev1"
    },
    centeredSlides: true,
    slidesPerView: 1.8,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  new Swiper("#swiperMain2", {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  
  new Swiper("#swiperMain3", {
    spaceBetween: 20,
    thumbs: { swiper: swiperThumb3 },
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
  });
}

// bxSliderの初期化
let slider;
let sliderFlag = false;
const breakpoint = 1;

function initSliders() {
  sliderSet();
  $(window).on('resize', sliderSet);
}

function sliderSet() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= breakpoint && !sliderFlag) {
    slider = $('.p-fv-news__list').bxSlider({
      touchEnabled: false,
      mode: 'vertical',
      controls: false,
      auto: true,
      pager: false,
      onSliderLoad: () => {
        ScrollReveal().sync();
      }
    });
    sliderFlag = true;
  } else if (windowWidth < breakpoint && sliderFlag) {
    slider.destroySlider();
    sliderFlag = false;
  }
}

// Slickスライダーの初期化
function initSlickSliders() {
  $('.l-campaign-slider__list--pc').slick({
    autoplay: true,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '0%',
    arrows: false,
    dots: true,
  });

  $('.l-campaign-slider__list--sp').slick({
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: '0%',
    dots: true,
    arrows: false,
  });
}

// アコーディオンの初期化
function initAccordion() {
  $('.l-question__item-head').on('click', function() {
    const $findElm = $(this).next(".l-question__item-body");
    $findElm.slideToggle();
    $(this).toggleClass('close');
  });
}

// メニュートリガーの初期化
function initMenuTrigger() {
  $(".menu-trigger").click(function() {
    $(this).toggleClass('menu-1 menu-2 active');
    $("nav").toggleClass('active');
  });
}

// ScrollRevealの初期化
// ScrollRevealの初期化
function initScrollReveal() {
  const sr = ScrollReveal({
    viewFactor: 0,
    origin: "bottom",
    distance: '100px',
    duration: 200,
    opacity: 0,
    easing: 'ease'
  });

  sr.reveal(".p-recommend__item:nth-child(1)", {
  });

  sr.reveal(".p-recommend__item:nth-child(2)", {
    delay: 200,
  });

  sr.reveal(".p-recommend__item:nth-child(3)", {
    delay: 100,
  });

  sr.reveal(".l-goods__item", {
  });

  sr.reveal(".scroll-effect", {
  });
  sr.reveal(".scroll-effect-slow", {
    duration: 500,
  });
}

// 全ての初期化が終わった後にScrollRevealを同期
$(window).on('load', () => {
  setTimeout(() => {
    ScrollReveal().reveal();
  }, 100);
});

var rellax = new Rellax('.rellax', {
  speed: -2,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});