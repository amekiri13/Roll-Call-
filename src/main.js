import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "./components/Home.vue"

const routes  = [
    {path: '/', name: 'home', component: Home},
    {path: '/edit', name: 'edit', component: { render() {return "Edit"} }},
    {path: '/setting', name: 'setting', component: { render() {return "Setting"} }},
    {path: '/about', name: 'about', component: { render() {return ""}}}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App).use(router).mount('#app');
