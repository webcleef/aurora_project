$(document).ready(function(){
  $('.legend-slider').slick();
  $('.reviews-slider').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [


    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
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


//Бургер меню
$('.toggler').on('click', openCloseMenu);
  function openCloseMenu(e) {
    e.preventDefault();
    $(this).toggleClass('toggler--close');
    $('.main-nav').toggleClass('main-nav--visible');
  }

//Табы
$('.residence-tabs__content').hide();
$('.residence-tabs__content:first').show();
$('.residence-tabs__regions:first').addClass('residence-tabs__regions--active');

$('.residence-tabs__regions').on('click', function(){
  $('.residence-tabs__regions').removeClass('residence-tabs__regions--active');
  $(this).addClass('residence-tabs__regions--active');
  $('.residence-tabs__content').hide();

    var selectTab =$(this).attr('rel');
    var activeTab = $('#' + selectTab);
    $(activeTab).fadeIn();


});

});


