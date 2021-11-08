import ExpandableCheckboxBox from './ExpandableCheckboxBlock';

$(() => {
    const $ExpandableCheckbox = $(
        '.js-expandable-checkbox-block',
    );

    $ExpandableCheckbox.each((_i, val) => new ExpandableCheckboxBox(val));
});
