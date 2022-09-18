<template>
    <div>
        <Navbar/>
        <div class="grid grid-cols-3 gap-2 mt-5 gap-y-4">
                <CardUser
                v-for="(element, index) in userList" :key="index"
                :id="element.id"
                :name="element.name"
                :username="element.username"
                :email="element.email"
                :street="element.address.street"
                :suite="element.address.suite"
                :city="element.address.city"
                :zipcode="element.address.zipcode"
                :lat="element.address.geo.lat"
                :lng="element.address.geo.lng"
                :phone="element.phone"
                :website="element.website"
                :Cname="element.company.name"
                :catchPhrase="element.company.catchPhrase"
                :bs="element.company.bs"
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
            userList : []
        }
    },
async mounted (){
        const resultPostingList = await getListUsers()
        this.userList = resultPostingList.data
    },
}
</script>