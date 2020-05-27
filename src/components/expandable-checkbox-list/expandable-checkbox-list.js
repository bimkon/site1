$(document).ready(function () {
  $(".expandable-checkbox__block > .expandable-checkbox__arrow").click(function (e) {
    var showElementDescription = 
      $(this).parents(".expandable-checkbox__block").find("ul");

    if ($(showElementDescription).is(":visible")) {
      showElementDescription.hide("fast", "swing");
      $(this).text("expand_more");
      $(this).addClass("rotate");
    } else {
      showElementDescription.show("fast", "swing");
      $(this).text("expand_more");
      $(this).removeClass("rotate");
    }
  });
});