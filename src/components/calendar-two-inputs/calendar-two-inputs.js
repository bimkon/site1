$('.datepicker-two-inputs').datepicker({
    inline: false,
    clearButton: true,
    dateFormat: 'dd.mm.yyyy',
    onSelect: function (fd, d, picker) { 
        $(".datepicker__start").val(fd.split("-")[0]);
        $(".datepicker__end").val(fd.split("-")[1]);
        },
    navTitles: {
        days: 'MM yyyy'
    },
    prevHtml: '<i classs="ma">arrow_back</i>',
    nextHtml: '<i classs="ma">arrow_forward</i>'
});


    if($('.datepicker-here').hasClass('inline')){
        $('.datepicker-here').datepicker({
            inline: true
        })
    }
 
// кнопка уже добавляется другими календарями
// var okButton = '<span class="datepicker--button datepicker--button-apply" data-action="hide">Применить</span>'; 
// $('.datepicker--button[data-action="clear"]').each(function( index ) { $(okButton).insertAfter($(this)); });

