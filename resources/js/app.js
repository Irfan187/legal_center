import './bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import { createPinia } from 'pinia'
// Import BootstrapVueNext components
import BootstrapVueNext from 'bootstrap-vue-next';
import { createApp } from 'vue';
import App from '@/App.vue'

const pinia = createPinia();
const app = createApp(App);

import router from '@/router';

app.use(router);
app.use(BootstrapVueNext);
app.use(pinia);
app.mount('#app');


