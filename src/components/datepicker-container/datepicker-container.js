$('.datepicker-two-inputs').datepicker({
    inline: false,
    clearButton: true,
    dateFormat: 'dd.mm.yyyy',
    onSelect: function (fd, d, picker) { 
        $(".datepicker-two-inputs_start").val(fd.split("-")[0]);
        $(".datepicker-two-inputs_end").val(fd.split("-")[1]);
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
 