class DatePicker {
  constructor(elem) {
    this.$datePicker = $(elem);
    this.initDatePicker();
  }

  initDatePicker() {
    this.$datePicker.datepicker({
      inline: false,
      clearButton: true,
      dateFormat: 'dd M',
      navTitles: {
        days: 'MM yyyy',
      },
      prevHtml: '<i class="datepicker--nav-arrow-left">arrow_back</i>',
      nextHtml: '<i class="datepicker--nav-arrow-right">arrow_forward</i>',
    });
    const okButton = '<span class="datepicker--button datepicker--button-apply" data-action="hide">Применить</span>';
    $('.datepicker--button[data-action="clear"]').each(function addButton() { $(okButton).insertAfter($(this)); });
  }
}
export default DatePicker;
