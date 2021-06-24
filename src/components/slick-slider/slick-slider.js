$(document).ready(() => {
  $('.slick__content').slick({
    dots: true,
    arrows: true,
  });
});
$(document).ready(() => {
  if ($('.slick__slider').hasClass('noarrow')) {
    $('.noarrow').find('.slick-arrow').hide();
  }
});
