<template>
  <main>
      <Navbar />
      <h1 v-if="!token" class="text-center border-2 p-5 text-3xl font-serif">
        Please Login For Full Content
      </h1>
      <h1 v-else class="text-center border-2 p-5 text-3xl font-serif">
        Welcome
      </h1>
  </main>
</template>

<script>
  import Navbar from '@/components/molecules/Navbar.vue';

  import { getListPosting } from '@/utils/posting';

  export default {
  name: "HomePage",
  data(){
      return{
          postingList : [],
          token: localStorage.getItem('token')
    }
  },
  async mounted (){
      const resultPostingList = await getListPosting()
      this.postingList = resultPostingList.data
  },
  components: {
      Navbar,
  }
}
</script>