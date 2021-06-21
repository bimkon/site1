$('.like-button_type_counter').on('click', function(event, count) {
    event.preventDefault();
    
    var $this = $(this),
        count = $this.attr('data-count'),
        active = $this.hasClass('like-button_type_active'),
        multiple = $this.hasClass('multiple-count');
    
    $.fn.noop = $.noop;
    $this.attr('data-count', ! active || multiple ? ++count : --count  )[multiple ? 'noop' : 'toggleClass']('like-button_type_active');
    
  });