import Vue from 'vue';
import App from './App.vue';
//  reset CSS
import "normalize.css/normalize.css";
import router from './router/index';
import LyTab from 'ly-tab'
import store from './store/index'
import {
  Toast,
  Loadmore,
  MessageBox,
  Popup
} from 'mint-ui'
import 'mint-ui/lib/style.css';
// 配置字体图标
// import '/common/css/style.css';
import '../src/common/css/style.css';

Vue.prototype.$toast = Toast;
Vue.prototype.$messagebox = MessageBox;
Vue.component(Loadmore.name, Loadmore)
Vue.component(Popup.name, Popup);

Vue.use(LyTab)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
