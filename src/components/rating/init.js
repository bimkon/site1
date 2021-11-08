import Rating from './Rating';

$(() => {
    const $rating = $('.rating__button');

    $rating.each((_i, item) => new Rating(item));
});
