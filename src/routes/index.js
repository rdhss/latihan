import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
// import routes from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/login",
            component: Login
        },
        
    ],
});

export default router