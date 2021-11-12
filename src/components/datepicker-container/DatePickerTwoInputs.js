import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker/dist/js/datepicker.min.js';

class DatePickerTwoInputs {
    constructor(index, elem) {
        this.index = index;
        this.$datePickerTwoInputs = $(elem);
        this.initDatePickerTwoInputs(this.index);
    }

    initDatePickerTwoInputs(index) {
        this.$datePickerTwoInputs.datepicker({
            inline: false,
            clearButton: true,
            dateFormat: 'dd.mm.yyyy',
            onSelect: function onSelect(fd) {
                $('.datepicker-two-inputs_start')
                    .eq(index)
                    .val(fd.split('-')[0]);
                $('.datepicker-two-inputs_end').eq(index).val(fd.split('-')[1]);
            },
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
        const twoInputs = document.querySelectorAll(
            '.datepicker-two-inputs_end',
        );
        twoInputs[this.index].addEventListener('focus', () => {});
        $('.datepicker-two-inputs_end')
            .eq(this.index)
            .click(() => {
                $('.datepicker-two-inputs_start').eq(this.index).focus();
            });
    }
}
export default DatePickerTwoInputs;
