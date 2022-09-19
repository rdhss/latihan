<template>
    <div>
        <Navbar/>
        <div v-if="loading" class="mt-5 flex justify-center">
            <img :src="require('@/assets/spin.svg')"  />
        </div>
        <div class="grid gap-3 grid-cols-3 mt-8">
            <CardPhoto 
            v-for="(element, index) in photoList" :key="index"
            :data="element"
            />
        </div>
    </div>
</template>


<script>
import Navbar from '@/components/molecules/Navbar.vue';
import CardPhoto from '@/components/molecules/CardPhoto.vue';
import { getListPhoto } from '@/utils/photo';

    export default {
    name: "PhotoPage",
    components: {
    Navbar,
    CardPhoto
},
    data(){
        return{
            photoList : [],
            loading : true,
        }
    },
    async mounted (){
      this.loading = true
      const resultPostingList = await getListPhoto()
      this.photoList = resultPostingList.data
      this.loading = false
  },

}
</script>