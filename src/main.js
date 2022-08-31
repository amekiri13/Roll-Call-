import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes  = [
    {path: '/', name: 'home', component: { render() {return "Home"} }},
    {path: '/edit', name: 'edit', component: { render() {return "Edit"} }},
    {path: '/setting', name: 'setting', component: { render() {return "Setting"} }},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App).use(router).mount('#app');
