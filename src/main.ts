import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import element3 from './plugins/element3';

import './style.css';
import '@/styles/index.css';

createApp(App).use(createPinia()).use(router).use(element3).mount('#app');
