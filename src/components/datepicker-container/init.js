import DatePickerSingleInput from './DatePickerSingleInput';
import DatePickerTwoInputs from './DatePickerTwoInputs';

$(() => {
  const $DatePicker = $('.datepicker-here');
  const $DatePickerTwoInputs = $('.datepicker-two-inputs');

  $DatePicker.each((i, val) => {
    /* eslint-disable no-unused-vars */
    const newDatePicker = new DatePickerSingleInput(val);
  });
  $DatePickerTwoInputs.each((i, val) => {
    /* eslint-disable no-unused-vars */
    const newDatePicker = new DatePickerTwoInputs(val);
  });
});
