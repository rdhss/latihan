import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Register from "@/pages/Register.vue";
import Posting from "@/pages/Posting.vue";
import PostingById from "@/pages/PostingById.vue";

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
        component: Register
    },
    {
        path: "/posting",
        component: Posting
    },
    {
        path: "/posting/:id",
        component: PostingById
    }

]