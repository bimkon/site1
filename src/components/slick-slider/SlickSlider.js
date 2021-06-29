class SlickSlider {
  constructor(elem) {
    this.$slickSlider = $(elem);
    this.initSlickSlider();
    this.findDOMElements();
    this.initArrow();
  }

  initSlickSlider() {
    this.$slickSlider.slick({
      dots: true,
      arrows: true,
    });
  }

  findDOMElements() {
    this.$slider = $('.slick__slider');
  }

  initArrow() {
    if (this.$slider.hasClass('noarrow')) {
      $('.noarrow').find('.slick-arrow').hide();
    }
  }
}
export default SlickSlider;
