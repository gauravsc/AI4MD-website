$(document).ready(function(){

  if (window.innerWidth < 600) {
    // $('.card-img-top').removeAttr("min-height");
    // $('.card-img-top').css({"min-height": "210px"});
    if ($('.timg').hasClass('card-img-top')){
      $('.timg').removeClass('card-img-top');
    }
    $('.timg').addClass('card-img-top-mobile');
  }
  if (window.innerWidth > 600){
    if($('.timg').hasClass('card-img-top-mobile')){
      $('.timg').removeClass('card-img-top-mobile');
    }
    $('.timg').addClass('card-img-top');
  }

  $(window).on('resize', function(){
    if (window.innerWidth < 767) {
      // $('.card-img-top').removeAttr("min-height");
      // $('.card-img-top').css({"min-height": "210px"});
      if ($('.timg').hasClass('card-img-top')){
        $('.timg').removeClass('card-img-top');
      }
      $('.timg').addClass('card-img-top-mobile');
    }
    if (window.innerWidth > 767){
      if($('.timg').hasClass('card-img-top-mobile')){
        $('.timg').removeClass('card-img-top-mobile');
      }
      $('.timg').addClass('card-img-top');
    }
  })
  
  $('header.homeheader').hide()
  $('.improved').hide()
  $('.reduced').hide()
  $('.increased').hide()
  $(".contentcon").hide()
  $(".teamcard").hide()
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 350){
      $('header.homeheader').fadeIn(1000)
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 700){
      $('.improved').fadeIn(1000)
    }
  });
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 700){
      $('.reduced').fadeIn(1500)
    }
  });
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 700){
      $('.increased').fadeIn(2000)
    }
  });


  
 

  $(".contentcon").fadeIn(1000)
  $(".card1").fadeIn(1000)
  $(".card2").fadeIn(1500)
  $(".card3").fadeIn(2000)
  $(".card4").fadeIn(2500)
  $(".card5").fadeIn(3000)
 
})
