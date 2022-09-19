<template>
    <main class="bg-gradient-to-r from-sky-500 to-indigo-500 h-screen">
        <div class="flex justify-center items-center h-full">
            <div>
                <p class="text-center text-3xl font-bold text-white mb-5">Login</p>
                <div class="bg-black-rgba p-10 rounded-md">
                    <Textfield label="email" @change="emailChange" class="pt-5" />
                    <Textfield label="password" @change="passwordChange" class="pt-5" />
                    <div class="flex justify-end pt-5">
                        <ButtonSubmit class="mr-3"  label="Register" @onsubmit="registerHandler" />
                        <ButtonSubmit label="Login" @onsubmit="LoginHandler" />
                    </div>
                </div>
                <div class="pt-10">
                    <h1 v-if="wrongData" class="text-center text-white font-bold text-xl">Wrong Password / Email</h1>
                    <h1 v-if="Datare" class="text-center text-white font-bold text-xl">user not registered</h1>
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
                user : localStorage.getItem(''),
                wrongData: false,
                Datare: false,
                email:'',
                password:''
            }
        },
        methods: {
            emailChange(value){
                this.email = value
            },
            passwordChange(value){
                this.password = value
            },
            registerHandler(){
                this.$router.push('/register')        
            },
            LoginHandler(){
                this.Datare = false
                this.wrongData = false
                const user = JSON.parse(localStorage.getItem('user'))
                if(user == undefined){
                    this.Datare = true
                }
                else if (user.email === this.email.target.value && user.password === this.password.target.value) {
                    localStorage.setItem('token', 1)
                    this.$router.push('/')      
                } 
                else {
                    this.wrongData = true
                }
                
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