import TextField from './TextField';

$(() => {
    const $textField = $('.js-text-field_masked');

    $textField.each((_i, item) => new TextField(item));
});
