/* Automatically generated by './build/bin/build-entry.js' */

import Alert from "./components/alert/index.js"
import Button from "./components/button/index.js"
import Input from "./components/input/index.js"
import Divider from "./components/divider/index.js"
import Icon from "./components/icon/index.js"
import Tooltip from "./components/tooltip/index.js"
import CollapseTransition from "./components/collapse-transition/index.js"

const components = [
  Alert,
  Button,
  Input,
  Divider,
  Icon,
  Tooltip,
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$YXB = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
  Alert,
  Button,
  Input,
  Divider,
  Icon,
  Tooltip,
  CollapseTransition
};
