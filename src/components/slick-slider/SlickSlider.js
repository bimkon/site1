class SlickSlider {
    constructor(elem) {
        this.$slickSlider = $(elem);
        this.initSlickSlider();
        this.hideAllArrows();
        this.toggleArrows();
    }

    initSlickSlider() {
        this.$slickSlider.slick({
            dots: true,
            arrows: true,
        });
    }

    hideAllArrows() {
        this.$slider = $('.slick__slider');
        this.$slider.find('.slick-arrow').hide();
    }

    toggleArrows() {
        this.$slider
            .on('mouseenter', function () {
                $(this).find('.slick-arrow').show();
            })
            .on('mouseleave', () => {
                $('.slick__slider').find('.slick-arrow').hide();
            });
    }
}
export default SlickSlider;
