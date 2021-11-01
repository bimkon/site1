class ExpandableCheckboxBlock {
    constructor(elem) {
        this.$ExpandableCheckbox = $(elem);
        this.initExpandableCheckbox();
        this.bindEventListenersToDocument();
    }

    initExpandableCheckbox() {
        this.$ExpandableCheckbox.click((event) => {
            const $this = $(event.currentTarget);
            $this.toggleClass('expandable-checkbox-block_rotated');
        });
    }

    handleDocumentClick(event) {
        this.textElement = $(
            '.js-expandable-checkbox-block > .expandable-checkbox-block__arrow',
        )
            .parents('.js-expandable-checkbox-block')
            .find('ul');

        if (
            !$.contains(
                document.querySelector('.js-expandable-checkbox-block'),
                event.target,
            )
        ) this.textElement.hide();
    }

    bindEventListenersToDocument() {
        document.addEventListener('click', this.handleDocumentClick);
    }
}
export default ExpandableCheckboxBlock;
