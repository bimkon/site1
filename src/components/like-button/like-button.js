$('.like-button_type_counter').on('click', function clickHandler(event, count) {
  const $this = $(this);
  var count = $this.attr('data-count');
  event.preventDefault();
  const active = $this.hasClass('like-button_type_active');
  const multiple = $this.hasClass('multiple-count');

  $.fn.noop = $.noop;
  $this.attr('data-count', !active || multiple ? ++count : --count)[multiple ? 'noop' : 'toggleClass']('like-button_type_active');
});
