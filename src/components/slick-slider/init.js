import SlickSlider from './SlickSlider';

$(() => {
  const $slickSlider = $('.slick__content');

  $slickSlider.each((i, item) => {
    /* eslint-disable no-unused-vars */
    const newSlider = new SlickSlider(item);
  });
});
