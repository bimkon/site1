import NavigationBar from './NavigationBar';

$(() => {
    const $textField = $('.navigation-bar__burger');

    $textField.each((_i, item) => {
        /* eslint-disable no-unused-vars */
        const newTextField = new NavigationBar(item);
    });
});
