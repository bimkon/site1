$(document).ready(() => {
  $('.expandable-checkbox-block > .expandable-checkbox__arrow').click(function ClickHandler(event) {
    const $this = $(event.currentTarget);
    const showElementDescription = $(this).parents('.expandable-checkbox-block').find('ul');

    if ($(showElementDescription).is(':visible')) {
      showElementDescription.hide('fast', 'swing');
      $this.text('expand_more');
      $this.addClass('rotate');
    } else {
      showElementDescription.show('fast', 'swing');
      $this.text('expand_more');
      $this.removeClass('rotate');
    }
  });
});
