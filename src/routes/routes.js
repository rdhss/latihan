import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import photoList from '@/pages/photoList.vue'
import userList from '@/pages/userList.vue'
import Register from "@/pages/Register.vue";
import Posting from "@/pages/Posting.vue";
import PostingById from "@/pages/PostingById.vue";

const auth = (to, from, next) => {
    const token = localStorage.getItem('token')
    if (!token) next('/login')
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
        component: Home,
        beforeEnter: auth
    },
    {
        path: "/login",
        component: Login,
        beforeEnter: noAuth
    },
    {
        path: "/userList",
        component: userList,
        beforeEnter: auth
    },
    {
        path: "/photoList",
        component: photoList,
        beforeEnter: auth
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