$('.datepicker-here').datepicker({
    inline: false,
    clearButton: true,
    navTitles: {
        days: 'MM yyyy'
    },
    prevHtml: '<i classs="ma">arrow_back</i>',
    nextHtml: '<i classs="ma">arrow_forward</i>'
});
var okButton = '<span class="datepicker--button" data-action="hide">Применить</span>'; 
$('.datepicker--button[data-action="clear"]').each(function( index ) { $(okButton).insertAfter($(this)); });