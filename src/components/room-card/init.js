import RoomCard from './RoomCard';

$(() => {
    const $slickSlider = $('.room-card__content');

    $slickSlider.each((_i, item) => new RoomCard(item));
});
