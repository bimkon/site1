import LikeButton from './LikeButton';

$(() => {
  const $likeButton = $('.like-button_type_counter');

  $likeButton.each((_i, val) => {
    /* eslint-disable no-unused-vars */
    const newLikeButton = new LikeButton(val);
  });
});
