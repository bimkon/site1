class ExpandableCheckbox {
    constructor(elem) {
        this.$ExpandableCheckbox = $(elem);
        this.initExpandableCheckbox();
        this.bindEventListenersToDocument();
    }

    initExpandableCheckbox() {
        this.$ExpandableCheckbox.click(function ClickHandler(event) {
            const $this = $(event.currentTarget);
            this.showElementDescription = $(this)
                .parents('.js-expandable-checkbox-block')
                .find('ul');

            if ($(this.showElementDescription).is(':visible')) {
                this.showElementDescription.hide();
                $this.text('expand_more');
                $this.addClass('rotate');
                $this.addClass('rotate-back');
            } else {
                this.showElementDescription.show();
                $this.text('expand_more');
                $this.removeClass('rotate');
                $this.removeClass('rotate-back');
            }
        });
    }

    handleDocumentClick(event) {
        this.textElement = $(
            '.js-expandable-checkbox-block > .expandable-checkbox__arrow',
        )
            .parents('.js-expandable-checkbox-block')
            .find('ul');

        if (
            !(
                event.target.offsetParent.className
                    === 'checkbox-buttons__lable'
                || event.target.offsetParent.className
                    === 'expandable-checkbox-block js-expandable-checkbox-block'
                || event.target.offsetParent.className === undefined
            )
        ) this.textElement.hide();
    }

    bindEventListenersToDocument() {
        document.addEventListener('click', this.handleDocumentClick);
    }
}
export default ExpandableCheckbox;