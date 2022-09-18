<template>
    <main>
        <Navbar />
        
        <section class="p-5">
            <p>Posting By ID</p>
            {{userData}}
        </section>
    </main>
</template>

<script>
    import { getPostById } from '@/utils/posting';
    import Navbar from '@/components/molecules/Navbar.vue';

    export default {
    name: "PostingByIdPage",
    data() {
        return {
            userData: {}
        };
    },
    async mounted() {
        const resultUserData = await getPostById(this.$route.params.id);
        this.userData = resultUserData.data;
    },
    components: { 
        Navbar
    }
}
</script>