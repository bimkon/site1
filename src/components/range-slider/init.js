import RangeSlider from './RangeSlider';

$(() => {
    const $sliders = $('.js-range-slider');

    $sliders.each((_i, val) => {
        /* eslint-disable no-unused-vars */
        const newSlider = new RangeSlider(val);
    });
});
