class Rating {
    constructor(elem) {
        this.$rating = $(elem);
        this.initStar();
    }

    initStar() {
        this.$rating.on('click', function onClick() {
            const $clickedStar = $(this);
            const $parentClickedStar = $clickedStar.parent();
            $clickedStar
                .siblings()
                .removeClass('rating__button_active')
                .end()
                .toggleClass('rating__button_active');
            const isActive = Boolean($parentClickedStar.find(
                '.rating__button.rating__button_active',
            ).length);
            if (isActive) {
                $parentClickedStar.addClass('rating_rated');
            } else {
                $parentClickedStar.removeClass('rating_rated');
            }
        });
    }
}

export default Rating;
