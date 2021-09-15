import DropdownOption from '../dropdown-option/DropdownOption';
import OptionButton from '../option-button/OptionButton';

class Dropdown {
    constructor(htmlElem, titleCases) {
        this.dropdown = htmlElem;
        this.options = [];
        this.titleCases = titleCases;

        this.init();
    }

    init() {
        this.getHTMLElements();
        this.bindEventListeners();
        this.setOptions();
        this.selectText = this.select.textContent;
        this.setSelectText(this.selectText);
    }

    getHTMLElements() {
        this.select = this.dropdown.querySelector('.js-dropdown__select');
        this.clearButton = new OptionButton('clear', this.dropdown);
        this.applyButton = new OptionButton('apply', this.dropdown);
        if (!this.clearButton.getButton()) this.clearButton = null;
        if (!this.applyButton.getButton()) this.applyButton = null;
    }

    bindEventListeners() {
        this.select.addEventListener(
            'click',
            this.handleSelectClick.bind(this)
        );
        this.dropdown.addEventListener(
            'changeOption',
            this.handleDocumentChangeOption.bind(this)
        );
        if (this.clearButton) {
            this.clearButton.eventListenerBind(
                'click',
                this.handleClearButtonClick.bind(this)
            );
        }
        if (this.applyButton) {
            this.applyButton.eventListenerBind(
                'click',
                this.handleApplyButtonClick.bind(this)
            );
        }
    }

    setOptions() {
        const optionsList = this.dropdown.querySelectorAll(
            '.js-dropdown__option'
        );
        optionsList.forEach((currentOption) => {
            const newOption = new DropdownOption(currentOption);
            const desiredOption = this.options.find((optionIterationItem) => {
                if (optionIterationItem.group === newOption.group) return true;
                return false;
            });
            if (desiredOption) {
                desiredOption.options.push(newOption);
            } else {
                this.options.push({
                    group: newOption.group,
                    options: [newOption],
                });
            }
        });
    }

    handleDocumentChangeOption() {
        this.activateClear();
        this.calculateSelectText();
    }

    calculateSelectText() {
        const summaryText = this.options
            .map((option, item) => {
                const groupName = option.group.toLowerCase();
                const groupValue = option.options.reduce(
                    (acc, val) => acc + parseInt(val.value, 10),
                    0
                );

                if (groupValue === 0 && item !== 0) return '';

                const cases = this.checkPad(groupValue);
                const isTitlesAvailable =
                    this.titleCases ||
                    this.titleCases[groupName] ||
                    this.titleCases[groupName][cases];

                if (!isTitlesAvailable) {
                    return ` ${groupValue} ${groupName}`;
                }
                const groupText = this.titleCases[groupName][cases];

                return ` ${groupValue} ${groupText}`;
            })
            .filter((entry) => entry.trim() !== '');

        const finalText = summaryText.reduce((acc, item, i) => {
            if (i === summaryText.length - 1)
                return acc + item.replace(/,\s/g, '');
            return `${acc}${item.replace(/,\s/g, '')}, `;
        }, []);

        return this.setSelectText(finalText);
    }

    handleSelectClick() {
        if (this.select.classList.contains('dropdown__select_active')) {
            this.hideDropdown();
        } else {
            this.showDropdown();
        }
    }

    showDropdown() {
        this.select.classList.add('dropdown__select_active');
        const dropdown = this.select.parentNode;
        const selectOptions = dropdown.querySelector('.js-dropdown__options');
        selectOptions.classList.add('dropdown__options_active');

        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        document.addEventListener('click', this.handleDocumentClick);
    }

    hideDropdown() {
        this.select.classList.remove('dropdown__select_active');
        const dropdown = this.select.parentNode;
        const selectOptions = dropdown.querySelector('.js-dropdown__options');
        selectOptions.classList.remove('dropdown__options_active');
        document.removeEventListener('click', this.handleDocumentClick);
    }

    handleDocumentClick(event) {
        const { target } = event;
        const itsMenu =
            target === this.dropdown || this.dropdown.contains(target);
        if (!itsMenu) {
            this.hideDropdown(event);
        }
    }

    activateClear() {
        if (this.clearButton) this.clearButton.show();
    }

    deactivateClear() {
        if (this.clearButton) this.clearButton.hide();
    }

    handleClearButtonClick() {
        this.options.forEach((val) => {
            val.options.forEach((option) => {
                option.clear();
            });
        });
        this.deactivateClear();
        if (this.selectText) {
            this.setSelectText(this.selectText);
        } else {
            this.calculateSelectText();
        }
    }

    handleApplyButtonClick() {
        this.hideDropdown();
    }

    setSelectText(text) {
        if (text || text !== '') {
            this.select.textContent = text;
            return text;
        }
        this.select.textContent = this.selectText;
        return this.calculateSelectText();
    }

    checkPad(num) {
        this.lastOne = num.toString().split('').pop();
        this.isNumBetweenOneAndFive =
            Number(this.lastOne) > 1 && Number(this.lastOne) < 5;
        if (Number(this.lastOne) === 1) return 0;
        if (this.isNumBetweenOneAndFive) return 1;
        return 2;
    }
}

export default Dropdown;
