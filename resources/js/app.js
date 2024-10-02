import './bootstrap';
import '@/assets/scss/app.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JavaScript (includes Popper.js)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createPinia } from 'pinia';
// Import BootstrapVueNext components
import { createApp } from 'vue';
import App from '@/App.vue'

const pinia = createPinia();
const app = createApp(App);

import router from '@/router';
app.use(router);
app.use(pinia);
app.mount('#app');


