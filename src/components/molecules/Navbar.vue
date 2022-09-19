<template>
    <header class="navbar bg-base-100 shadow-lg container mx-auto p-4">
        <div class="navbar-start">
            <div v-if="token" class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul  tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <router-link to="/">
                        <li><a>Home</a></li>
                    </router-link>
                    <router-link to="#">
                        <li><a>List Users</a></li>
                    </router-link>
                    <router-link to="/posting">
                        <li><a>List Post</a></li>
                    </router-link>
                    <router-link to="#">
                        <li><a>List Photos</a></li>
                    </router-link>
                </ul>
            </div>
            <a class="btn btn-ghost normal-case text-xl">Latihan</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul v-if="token" class="menu menu-horizontal p-0">
                <router-link to="/">
                    <li><a>Home</a></li>
                </router-link>
                <router-link to="/userList">
                    <li><a>List Users</a></li>
                </router-link>
                <router-link to="/posting">
                    <li><a>List Post</a></li>
                </router-link>
                <router-link to="/photoList">
                    <li><a>List Photos</a></li>
                </router-link>
            </ul>
        </div>
        <div class="navbar-end">
            <div v-if="!token" class="flex w-48 justify-between">
                <ButtonSubmit label="Login" />
                <ButtonSubmit label="Register" @onsubmit="onRegister" />
            </div>

            <div v-else class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li @click="logoutHandler"><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    import ButtonSubmit from '@/components/Atom/ButtonSubmit.vue';
    
    export default {
    name: "NavbarComponent",
    data(){
        return {
            token: localStorage.getItem('token')
        }
    },
    methods: {
        logoutHandler(){
            localStorage.clear('token')
            setTimeout(()=> {
                this.$router.replace('/login')
            }, 1500)
        },
        onRegister(){
            this.$router.push('/register')
        }
    },
    components: { ButtonSubmit }
}
</script>
