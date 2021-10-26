class LikeButton {
    constructor(elem) {
        this.$likeButton = $(elem);
        this.initLikeButton();
    }

    initLikeButton() {
        this.$likeButton.on('click', (event) => {
            const $this = $(event.currentTarget);
            event.preventDefault();
            const active = $this.hasClass('like-button_type_active');
            const multiple = $this.hasClass('multiple-count');
            const count = Number($this.attr('data-count'));
            $this
                .attr('data-count', !active || multiple ? count + 1 : count - 1)[multiple ? 'noop' : 'toggleClass']('like-button_type_active');
        });
    }
}
export default LikeButton;
