import { createRouter, createWebHistory } from 'vue-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/main'
import Home from '@/views/Home'

const routes = [
    { path: '/', name: 'Home', component: Home, meta: { title: 'Start'}},
    { path: '/zespol', name: 'About', component: ()=>import('@/views/Home'), meta: { title: 'O nas'}},
    { path: '/sklep', name: 'Shop', component: ()=>import('@/views/Home'), meta: { title: 'Sklep'}},
    { path: '/faq', name: 'FAQ', component: ()=>import('@/views/Home'), meta: { title: 'FAQ'}},
    { path: '/login', name: 'Login', component: ()=>import('@/views/Login'), meta: { title: 'Zaloguj się'}},
    { path: '/panel', name: 'Panel', component: ()=>import('@/views/Panel'), meta: { auth: true, title: 'Panel' }},
    { path: '/u/:id', name: 'User', component: ()=>import('@/views/User'), meta: { title: 'Użytkownik'}},
    { path: '/:pathMatch(.*)*', name: '404',  component: ()=>import('@/views/NotFound'), meta: { title: 'Błąd 404'}},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title ? to.meta.title+' | BHIVE.PL' : 'BHIVE.PL';
    if (!to.matched.some(el => el.meta.auth)) return next();
    onAuthStateChanged(auth, (user)=>{ if (user) return next(); });
})

router.afterEach(()=>{});

export default router