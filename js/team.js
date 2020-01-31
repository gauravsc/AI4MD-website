$(document).ready(function(){

  if (window.innerWidth < 600) {
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
})

