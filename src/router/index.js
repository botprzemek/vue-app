import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/Home.vue'
import Shop from '@/views/Home.vue'
import FAQ from '@/views/Home.vue'
import Login from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/zespol', name: 'About', component: About },
    { path: '/sklep', name: 'Shop', component: Shop },
    { path: '/faq', name: 'FAQ', component: FAQ },
    { path: '/login', name: 'Login', component: Login },
    { path: '/:pathMatch(.*)*', name: '404', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router