import 'jquery-ui/ui/widgets/datepicker.js';
import 'jquery-ui/ui/widgets/slider.js';
import 'jquery-ui/themes/base/all.css';
function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
importAll(require.context('../src/', true, /\.js$|\.scss$/));
// require("node_modules/jquery-ui/themes/black-tie/jquery-ui.css");
// require("node_modules/jquery-ui/themes/black-tie/jquery-ui.theme.css");