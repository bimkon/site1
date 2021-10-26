class SlickSliders {
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
        $('.slick-arrow').text('');
        this.$slider = $('.slick-sliders');
        this.$slider.find('.slick-arrow').hide();
    }

    toggleArrows() {
        this.$slider
            .on('mouseenter', function () {
                $(this).find('.slick-arrow').show();
            })
            .on('mouseleave', () => {
                $('.slick-sliders').find('.slick-arrow').hide();
            });
    }
}
export default SlickSliders;
