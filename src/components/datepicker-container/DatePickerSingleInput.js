class DatePickerSingleInput {
    constructor(index, elem) {
        this.index = index;
        this.$datePicker = $(elem);
        this.initDatePicker();
    }

    initDatePicker() {
        this.$datePicker.datepicker({

            clearButton: true,
            dateFormat: 'dd M',
            inline: false,
            navTitles: {
                days: 'MM yyyy',
            },
            prevHtml: '<i class="datepicker--nav-arrow-left">arrow_back</i>',
            nextHtml:
                '<i class="datepicker--nav-arrow-right">arrow_forward</i>',
            position: 'bottom left',
        });
        const okButton = '<span class="datepicker--button datepicker--button-apply" data-action="hide">Применить</span>';
        $(okButton).insertAfter(
            $('.datepicker--button[data-action="clear"]').eq(this.index),
        );
    }
}
export default DatePickerSingleInput;
