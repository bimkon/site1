class DatePickerTwoInputs {
  constructor(elem) {
    this.$datePickerTwoInputs = $(elem);
    this.initDatePickerTwoInputs();
  }

  initDatePickerTwoInputs() {
    this.$datePickerTwoInputs.datepicker({
      inline: false,
      clearButton: true,
      dateFormat: 'dd.mm.yyyy',
      onSelect(fd) {
        $('.datepicker-two-inputs_start').val(fd.split('-')[0]);
        $('.datepicker-two-inputs_end').val(fd.split('-')[1]);
      },
      navTitles: {
        days: 'MM yyyy',
      },
      prevHtml: '<i class="datepicker--nav-arrow-left">arrow_back</i>',
      nextHtml: '<i class="datepicker--nav-arrow-right">arrow_forward</i>',
    });

    if ($('.datepicker-here').hasClass('inline')) {
      $('.datepicker-here').datepicker({
        inline: true,
      });
    }
  }
}
export default DatePickerTwoInputs;
