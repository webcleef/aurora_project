$(document).ready(function(){
  $('.legend-slider').slick();
  $('.reviews-slider').slick();






$(".main-nav").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });



$('.toggler').on('click', openCloseMenu);
  function openCloseMenu(e) {
    e.preventDefault();
    $(this).toggleClass('toggler--close');
    $('.main-nav').toggleClass('main-nav--visible');
    $('.main-nav').animate({left:'0'}, 1500);
  }



});
