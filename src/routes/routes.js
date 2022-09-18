import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Register from "@/pages/Register.vue";
import Posting from "@/pages/Posting.vue";
import PostingById from "@/pages/PostingById.vue";

const auth = (to, from, next) => {
    const token = localStorage.getItem('token')
    if (!token) next('/')
    next()
}

const noAuth = (to, from, next) => {
    const token = localStorage.getItem('token')
    if (token) next('/')
    next()
}


export default [
    {
        path: "/",
        component: Home
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register,
        beforeEnter: noAuth
    },
    {
        path: "/posting",
        component: Posting,
        beforeEnter: auth
    },
    {
        path: "/posting/:id",
        component: PostingById,
        beforeEnter: auth
    }

]