import Vue from 'vue'
import App from './App.vue'
import VueGtm from '@gtm-support/vue2-gtm';

Vue.config.productionTip = false

Vue.use(VueGtm, {
  id: "GTM-M6QCV4B", 
  defer: false, // defaults to false. Script can be set to `defer` to increase page-load-time at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible)
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
  ignoredViews: ["homepage"], // Don't trigger events for specified router names (case insensitive) (optional)
  trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
});

new Vue({
  render: h => h(App),
}).$mount('#app')
