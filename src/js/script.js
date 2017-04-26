$(document).ready(function(){
  $('.legend-slider').slick();
  $('.reviews-slider').slick();

$('.nav-burger').on('click', function(){
  $('.main-nav').css('display', 'block').animate({left: '0'},'slow');
  $('.nav-burger__lines').css('background', 'none');
  $('.nav-burger__lines:before').animate({top:'0'},'slow');
});

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

});
