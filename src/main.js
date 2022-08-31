import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHashHistory} from "vue-router";

const routes = [
    {path: '/', components: 'Basic'},
    {path: '/edit', components: 'Edit'},
    {path: '/setting', components: 'Setting'}
];

createRouter({
    history: createWebHashHistory(),
    routes
});

createApp(App).mount('#app')
