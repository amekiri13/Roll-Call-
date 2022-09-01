import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret,faTwitter)

const routes  = [
    {path: '/', name: 'home', component: { render() {return "Home"} }},
    {path: '/edit', name: 'edit', component: { render() {return "Edit"} }},
    {path: '/setting', name: 'setting', component: { render() {return "Setting"} }},
    {path: '/about', name: 'about', component: { render() {return ""}}}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
