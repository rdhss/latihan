<template>
    <main class="bg-gradient-to-r from-sky-500 to-indigo-500 h-screen">
        <div class="flex justify-center items-center h-full">
            <div>
                <p class="text-center text-3xl font-bold text-white mb-5">Login</p>
                <div class="bg-black-rgba p-10 rounded-md">
                    <Textfield label="email" @change="inputChange" class="pt-5" name="email"/>
                    <Textfield label="password" @change="inputChange" class="pt-5" name="password"/>
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
            inputChange(data){
                const { name , val } = data
                if(name == "email"){
                    this.email = val
                } else if (name == "password"){
                    this.password = val
                }

            },
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
                console.log(this.password)
                const user = JSON.parse(localStorage.getItem('user'))
                if(user == undefined){
                    this.Datare = true
                }
                else if (user.email === this.email && user.password === this.password) {
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