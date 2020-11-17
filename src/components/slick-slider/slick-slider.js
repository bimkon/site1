$(document).ready(function(){
    $('.slick__content').slick({
     dots:true,
     arrows: true
    });
  });
$(document).ready(function(){
  if($('.slick__slider').hasClass('noarrow')){
    $('.noarrow').find('.slick-arrow').hide();
  }
  });
