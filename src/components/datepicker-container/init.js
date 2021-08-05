import DatePickerSingleInput from './DatePickerSingleInput';
import DatePickerTwoInputs from './DatePickerTwoInputs';

$(() => {
  const $DatePicker = $('.datepicker-here');
  const $DatePickerTwoInputs = $('.datepicker-two-inputs');

  $DatePickerTwoInputs.each((index, val) => {
    /* eslint-disable no-unused-vars */
    const newDatePicker = new DatePickerTwoInputs(index, val);
  });
  $DatePicker.each((index, val) => {
    /* eslint-disable no-unused-vars */
    const newDatePicker = new DatePickerSingleInput(index, val);
  });
});
