import ExpandableCheckbox from './ExpandableCheckbox';

$(() => {
    const $ExpandableCheckbox = $(
        '.js-expandable-checkbox-block > .expandable-checkbox__arrow',
    );

    $ExpandableCheckbox.each((_i, val) => {
        /* eslint-disable no-unused-vars */
        const newExpandableCheckbox = new ExpandableCheckbox(val);
    });
});
