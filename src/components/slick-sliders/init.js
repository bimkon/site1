import SlickSliders from './SlickSliders';

$(() => {
    const $slickSlider = $('.slick-sliders__content');

    $slickSlider.each((_i, item) => {
        /* eslint-disable no-unused-vars */
        const newSlider = new SlickSliders(item);
    });
});
