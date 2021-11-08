import NavigationBar from './NavigationBar';

$(() => {
    const $textField = $('.navigation-bar__burger');

    $textField.each((_i, item) => new NavigationBar(item));
});
