<template>
    <div>
        <Navbar/>
        <div class="grid gap-3 grid-cols-3 mt-8">
            <CardPhoto 
            v-for="(element, index) in photoList" :key="index"
            :id="element.id"
            :albumId="element.albumId"
            :url="element.url"
            :title="element.title"
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
            photoList : []
        }
    },
    async mounted (){
      const resultPostingList = await getListPhoto()
      this.photoList = resultPostingList.data
  },

}
</script>