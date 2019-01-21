$(document).ready(function(){
  $('.slides').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    nextArrow:$('.next'),
    prevArrow:$('.prev')
  });
});
