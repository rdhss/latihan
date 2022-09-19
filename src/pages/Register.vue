<template>
    <main class="bg-gradient-to-r from-sky-500 to-indigo-500 h-screen">
        <div class="flex absolute top-10 left-10 items-center w-16 justify-between font-bold cursor-pointer hover:text-white" @click="backHandler">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
            </svg>
            <p>Back</p>
        </div>
        <div class="flex justify-center items-center h-full">
            <div>
                <p class="text-center text-3xl font-bold text-white mb-5">Register</p>
                <div class="bg-black-rgba p-10 rounded-md">
                    <Textfield label="username" @change="inputChange" name="username" />
                    <Textfield label="email" @change="inputChange" class="pt-5" name="email" />
                    <Textfield label="password" @change="inputChange" class="pt-5" name="password" />
                    <div class="flex justify-end pt-5">
                        <ButtonSubmit label="Register" @onsubmit="registerHandler" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>    
    import Textfield from '@/components/Atom/Textfield.vue';
    import ButtonSubmit from '@/components/Atom/ButtonSubmit.vue';

    export default {
        name:'RegisterPages',
        data(){
            return{
                username:'',
                email:'',
                password:''
            }
        },
        methods: {
            inputChange(data){
                const { name, val } = data
                if(name === "username") this.username = val
                if(name === "email") this.email = val
                if(name === "password") this.password = val
            },
            registerHandler(){
                const user = {
                    username : this.username,
                    email:this.email,
                    password: this.password
                }
                localStorage.setItem('user', JSON.stringify(user))
                setTimeout(() => {
                    this.$router.push('/login')
                }, 1500)
            },
            backHandler(){
                this.$router.back()
            }
        },
        components: {
            Textfield,
            ButtonSubmit
        }
    }
</script>