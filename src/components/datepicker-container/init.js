import DatePickerSingleInput from './DatePickerSingleInput';
import DatePickerTwoInputs from './DatePickerTwoInputs';

$(() => {
    const $DatePicker = $('.datepicker-here');
    const $DatePickerTwoInputs = $('.datepicker-two-inputs');

    $DatePickerTwoInputs.each((index, val) => new DatePickerTwoInputs(index, val));

    $DatePicker.each((index, val) => new DatePickerSingleInput(index, val));
});
