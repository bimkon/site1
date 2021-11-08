import RangeSlider from './RangeSlider';

$(() => {
    const $sliders = $('.js-range-slider');

    $sliders.each((_i, val) => new RangeSlider(val));
});
