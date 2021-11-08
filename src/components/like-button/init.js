import LikeButton from './LikeButton';

$(() => {
    const $likeButton = $('.like-button_type_counter');

    $likeButton.each((_i, val) => new LikeButton(val));
});
