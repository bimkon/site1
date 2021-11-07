class RoomCard {
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
        this.$slider = $('.room-card');
        this.$slider.find('.slick-arrow').hide();
    }

    toggleArrows() {
        this.$slickSlider
            .on('mouseenter', function show() {
                $(this).find('.slick-arrow').show();
            })
            .on('mouseleave', () => {
                $('.room-card').find('.slick-arrow').hide();
            });
    }
}
export default RoomCard;
