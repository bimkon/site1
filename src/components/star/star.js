$(() => {
    $('.rating__button').on('click', function (e) {
        const $clickedStar = $(this);
        const $parentClickedStar = $clickedStar.parent();
        $clickedStar
            .siblings()
            .removeClass('is--active')
            .end()
            .toggleClass('is--active');
        $parentClickedStar.find('.rating__button.is--active').length
            ? $parentClickedStar.addClass('has--rating')
            : $parentClickedStar.removeClass('has--rating');
    });
});
