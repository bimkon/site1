import RoomCard from './RoomCard';

$(() => {
    const $slickSlider = $('.room-card__content');

    $slickSlider.each((_i, item) => {
        /* eslint-disable no-unused-vars */
        const newSlider = new RoomCard(item);
    });
});
