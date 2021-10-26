import Rating from './Rating';

$(() => {
    const $rating = $('.rating__button');

    $rating.each((_i, item) => {
        /* eslint-disable no-unused-vars */
        const newSlider = new Rating(item);
    });
});
