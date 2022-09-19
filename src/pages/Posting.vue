<template>
    <main>
        <Navbar />
        
        <div v-if="isLoading" class="flex justify-center h-screen items-center">
            <img :src="loadingImg" alt="loading" />
        </div>

        <div class="p-5 flex flex-wrap" v-else>
            <CardPosting 
                v-for="(data, idx) in postingList"
                :key="idx"
                :payload="data"
                class="mb-5"
            />
        </div>

    </main>
</template>

<script>
    import Navbar from '@/components/molecules/Navbar.vue';
    import CardPosting from '@/components/molecules/CardPosting.vue';
    import { getListPosting } from '@/utils/posting';

    export default {
    name: "PostingPage",
    data(){
        return{
            postingList : [],
            isLoading : true,
            loadingImg : require('@/assets/spin.svg')
        }
    },
    async mounted (){
        try {
            const resultPostingList = await getListPosting()
            this.postingList = resultPostingList.data
            this.isLoading = !this.isLoading
        } catch (error) {
            console.log(error)
        }
    },
    components: {
        Navbar,
        CardPosting,
    }
}
</script>