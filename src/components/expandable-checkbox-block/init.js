import ExpandableCheckboxBox from './ExpandableCheckboxBlock';

$(() => {
    const $ExpandableCheckbox = $(
        '.js-expandable-checkbox-block',
    );

    $ExpandableCheckbox.each((_i, val) => {
        /* eslint-disable no-unused-vars */
        const newExpandableCheckbox = new ExpandableCheckboxBox(val);
    });
});
