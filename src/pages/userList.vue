<template>
    <div>
        <Navbar/>
        <div v-if="loading" class="mt-5 flex justify-center">
            <img :src="require('@/assets/spin.svg')"  />
        </div>
        <div class="grid grid-cols-3 gap-2 mt-5 gap-y-4">
                <CardUser
                v-for="(element, index) in userList" :key="index"
                :data="element"
                />
        </div>
    </div>
</template>


<script>
import Navbar from '@/components/molecules/Navbar.vue';
import CardUser from '@/components/molecules/CardUser.vue';
import { getListUsers } from '@/utils/users';

    export default {
    name: "PhotoPage",
    components: {
    Navbar,
    CardUser,
},
data(){
        return{
            userList : [],
            loading : true,
        }
    },
async mounted (){
        this.loading = true
        const resultPostingList = await getListUsers()
        this.userList = resultPostingList.data
        this.loading = false
    },
}
</script>