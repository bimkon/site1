class ExpandableCheckbox {
    constructor(elem) {
        this.$ExpandableCheckbox = $(elem);
        this.initExpandableCheckbox();
    }

    initExpandableCheckbox() {
        this.$ExpandableCheckbox.click(function ClickHandler(event) {
            const $this = $(event.currentTarget);
            const showElementDescription = $(this)
                .parents('.js-expandable-checkbox-block')
                .find('ul');

            if ($(showElementDescription).is(':visible')) {
                showElementDescription.hide('fast', 'swing');
                $this.text('expand_more');
                $this.addClass('rotate');
                $this.addClass('rotate-back');
            } else {
                showElementDescription.show('fast', 'swing');
                $this.text('expand_more');
                $this.removeClass('rotate');
                $this.removeClass('rotate-back');
            }
        });
    }
}
export default ExpandableCheckbox;
