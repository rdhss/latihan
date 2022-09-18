<template>
    <main>
        <Navbar />
        
        <div class="p-5 flex flex-wrap">
            <CardPosting 
                v-for="(data, idx) in postingList"
                :key="idx"
                :id="data.id"
                :title="data.title"
                :body="data.body"
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
            postingList : []
        }
    },
    async mounted (){
        const resultPostingList = await getListPosting()
        this.postingList = resultPostingList.data
    },
    components: {
        Navbar,
        CardPosting,
    }
}
</script>