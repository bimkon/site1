import 'jquery-mask-plugin/dist/jquery.mask.min.js';

class TextField {
    constructor(elem) {
        this.$textField = $(elem);
        this.initTextField();
    }

    initTextField() {
        this.$textField.mask('00.00.0000');
    }
}

export default TextField;
