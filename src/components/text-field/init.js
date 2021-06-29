import TextField from './TextField';

$(() => {
  const $textField = $('.js-text-field__masked');

  $textField.each((i, item) => {
    /* eslint-disable no-unused-vars */
    const newTextField = new TextField(item);
  });
});
