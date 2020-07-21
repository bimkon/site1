import 'jquery-ui/ui/widgets/datepicker.js';
import 'jquery-ui/ui/widgets/slider.js';
import 'jquery-ui/themes/base/all.css';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import 'ion-rangeslider/js/ion.rangeSlider.min.js';
import 'jquery-mask-plugin/dist/jquery.mask.min.js';
import 'slick-carousel/slick/slick.min.js';
// import 'slick-carousel/slick/slick-theme.scss';
// import 'slick-carousel/slick/slick.scss';
import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker/dist/js/datepicker.min.js';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
importAll(require.context('../src/', true, /\.js$|\.scss$/));
// require("node_modules/jquery-ui/themes/black-tie/jquery-ui.css");
// require("node_modules/jquery-ui/themes/black-tie/jquery-ui.theme.css");