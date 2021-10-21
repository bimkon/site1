import ExpandableCheckbox from './Expandable-checkbox-block';

$(() => {
    const $ExpandableCheckbox = $(
        '.js-expandable-checkbox-block > .expandable-checkbox-block__arrow',
    );

    $ExpandableCheckbox.each((_i, val) => {
        /* eslint-disable no-unused-vars */
        const newExpandableCheckbox = new ExpandableCheckbox(val);
    });
});
