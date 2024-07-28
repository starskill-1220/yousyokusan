// ブラウザバックでも強制リロード
window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    // bfcache発動時の処理
    window.location.reload();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const swiperThumb1 = new Swiper("#swiperThumb1", {
    spaceBetween: 10,
    slidesPerView: 6,
    watchSlidesProgress: true,
  });
  
  const swiperMain1 = new Swiper("#swiperMain1", {
    spaceBetween: 20,
    thumbs: {
      swiper: swiperThumb1
    },
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
});

var slider;
var sliderFlag = false;
var breakpoint = 768;//768px以下の場合
function sliderSet() {
    var windowWidth = window.innerWidth;
    if (windowWidth >= breakpoint && !sliderFlag) {//768px以上は1行でスライダー表示
        slider = $('.news01').bxSlider({
          touchEnabled:false,//リンクを有効にするためスライドをマウスでドラッグした際にスライドの切り替えを可能にする機能を無効化
          mode: 'vertical',//縦スライド指定
          controls: false,//前後のコントロールを表示させない。
          auto: 'true',//自動的にスライド
          pager: false//ページ送り無効化
        });
        sliderFlag = true;
    } else if (windowWidth < breakpoint && sliderFlag) {
        slider.destroySlider();//bxSliderのOptionであるdestroySliderを使用してスライダーの動きを除去
        sliderFlag = false;
    }
}

$(window).on('load resize', function() {
        sliderSet();
});

//◆タブレット以下も1行で表示させたい場合は下記のみの記述でOK
//$('.slider').bxSlider({
//touchEnabled:false,
//mode: 'vertical',
//controls: false,
//auto: 'true',
//pager: false
//});

$(document).ready(function(){
  $('.slider01').slick({
    autoplay: true,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '0%',
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    dots: true,
  });
});



//アコーディオンをクリックした時の動作
$('.accordion-head').on('click', function() {//タイトル要素をクリックしたら
  var findElm = $(this).next(".accordion-body");//直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle();//アコーディオンの上下動作
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去し
  }else{//それ以外は
    $(this).addClass('close');//クラス名closeを付与
  }
});




$(".menu-trigger").click(function (){

  if($(this).hasClass('menu-2')){
    $(this).removeClass('menu-2');
    $(this).addClass('menu-1');
    $(this).removeClass('active');
    $('.gnav-box').removeClass('gnav-open')
    $('.gnav-shadow').removeClass('gnav-shadow-open')
    $('.gnav-item-text').removeClass('fadeUp');
    $('.gnav-item-text').addClass('fadeDown');
    $('.sns-icon').removeClass('fadeUp');
    $('.sns-icon').addClass('fadeDown');
    $('.header-logo').removeClass('hide');
  } else {
    $(this).removeClass('menu-1');
    $(this).addClass('menu-2');
    $(this).addClass('active');
    $('.gnav-box').addClass('gnav-open')
    $('.gnav-shadow').addClass('gnav-shadow-open')
    $('.gnav-item-text').removeClass('fadeDown');
    $('.gnav-item-text').addClass('fadeUp');
    $('.sns-icon').removeClass('fadeDown');
    $('.sns-icon').addClass('fadeUp');
    $('.header-logo').addClass('hide');
  };

  if($('.gnav-box').hasClass('gnav-open')){
    $(this).removeClass('gnav-open')
  }else {
    $(this).addClass('gnav-open');
  }
});

$(".gnav-shadow").click(function (){

  if($(".menu-trigger").hasClass('menu-2')){
    $(".menu-trigger").removeClass('menu-2');
    $(".menu-trigger").addClass('menu-1');
    $(".menu-trigger").removeClass('active');
    $('.gnav-box').removeClass('gnav-open')
    $('.gnav-shadow').removeClass('gnav-shadow-open')
    $('.gnav-item-text').removeClass('fadeUp');
    $('.gnav-item-text').addClass('fadeDown');
    $('.sns-icon').removeClass('fadeUp');
    $('.sns-icon').addClass('fadeDown');
    $('.header-logo').removeClass('hide');
  };
  if($('.gnav-box').hasClass('gnav-open')){
    $(this).removeClass('gnav-open')
  }else {
    $(this).addClass('gnav-open');
  }
});








$('.works-list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.works-list--sp').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});



// スクロールで要素を消す
$(function(){
  var pos = 100;
  var fvMonoImg = $('.fv-mono-img');
  // var headerLogo = $('.header-logo')
  var pcFixed = $(".pc-fixed");

  $(window).on('scroll', function(){
    if($(this).scrollTop() < pos ){
      //上にスクロールしたとき
      // fvMonoImg.removeClass('hide');
      // headerLogo.removeClass('hide');
      pcFixed.css("z-index","0");
    }else{
      //下にスクロールしたとき
      // fvMonoImg.addClass('hide');
      // headerLogo.addClass('hide');
      pcFixed.css("z-index","-1");
    }
  });

  $(window).on('scroll', function(){
    if($(this).scrollTop() < 1000 ){
      //上にスクロールしたとき
      pcFixed.css("z-index","0");
    }else{
      //下にスクロールしたとき
      pcFixed.css("z-index","-1");
    }
  });

});


// page-serviceのタブ切り替え
$(".p-page-service__list--tab > .p-page-service__item").click(function() {
  $('.p-page-service__list--tab > .p-page-service__item').removeClass('active');
  $(this).addClass('active');
  $(".p-page-service__list--panel > .p-page-service__item").css({"display":"none"}).removeClass('active');
  var clickedIndex = $('.p-page-service__list--tab > .p-page-service__item').index($(this));
  $(".p-page-service__list--panel > .p-page-service__item").eq( clickedIndex ).fadeIn(1000).css({"display":"block"}).addClass('active');
});







//ローディング時の動き
$(window).on('load', function(){
  setTimeout(function(){
      //bodyに付けているfadeのクラスを取る
      $('body').removeClass('fade');
    }, 400);
});
$(function() {
  //ページ内リンク、target属性がない場合のaタグが押された時
  $('a:not([href^="#"]):not([target])').on('click', function(e){
    e.preventDefault();
    link = $(this).attr('href');
    if (link !== '') {
      //bodyにフェードアウトさせるためのクラスを付与
      $('body').addClass('fadeout');
      setTimeout(function(){
        window.location = link;
      }, 400);
    }
    return false;
  });
});



$(window).on('load',function(){
  if (sessionStorage.getItem('visit')) {
    $("#splash").css("display", "none");
  } else {
    sessionStorage.setItem('visit', 'true'); 
    $("#splash").delay(4000).fadeOut('slow');//ローディング画面を3秒（3000ms）待機してからフェイドアウト
  $("#splash_logo").delay(4000).fadeOut('slow');//ロゴを3秒（3000ms）待機してからフェイドアウト
        stroke.play();//SVGアニメーションの実行
  }
});

// contact-confirm遷移のためのコード
$(function(){ 
  document.addEventListener( 'wpcf7mailsent', function( event ) { location = 'https://star-skill.jp/confirm'; }, 
  false );});


// 画像表示エフェクト

  // 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime(){

  // 背景色が伸びて出現（左から右）
$('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
  var elemPos = $(this).offset().top;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
  }
}); 

 // 文字列を囲う子要素
$('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
  var elemPos = $(this).offset().top-200;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
  }
});   
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述



