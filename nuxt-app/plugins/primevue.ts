import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import Tooltip from 'primevue/tooltip';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(PrimeVue);
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.provide("toast", nuxtApp.vueApp.config.globalProperties.toast);

  // Directives
  nuxtApp.vueApp.directive("tooltip", Tooltip);
});