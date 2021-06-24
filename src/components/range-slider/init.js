import RangeSlider from './range-slider';

$(() => {
  const $sliders = $('.js-range-slider');

  $sliders.each((i, val) => {
    /* eslint-disable no-unused-vars */
    const newSlider = new RangeSlider(val);
  });
});
