import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import element3 from './plugins/element3';

createApp(App).use(createPinia()).use(router).use(element3).mount('#app');
