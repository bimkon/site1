import ExpandableCheckbox from './ExpandableCheckbox';

$(() => {
  const $ExpandableCheckbox = $('.expandable-checkbox-block > .expandable-checkbox__arrow');

  $ExpandableCheckbox.each((i, val) => {
    /* eslint-disable no-unused-vars */
    const newExpandableCheckbox = new ExpandableCheckbox(val);
  });
});
