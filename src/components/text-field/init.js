import TextField from './TextField';

$(() => {
    const $textField = $('.js-text-field_masked');

    $textField.each((_i, item) => {
        /* eslint-disable no-unused-vars */
        const newTextField = new TextField(item);
    });
});
