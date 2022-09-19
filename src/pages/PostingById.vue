<template>
    <main>
        <Navbar />

        <div v-if="isLoading" class="flex justify-center h-screen items-center">
            <img :src="loadingImg" alt="loading" />
        </div>

        <section v-else>
            <div class="p-5 border-2">
                <p class="text-xl">Posting By <span class="font-bold">{{userData.name}}</span></p>
                <p class="text-lg font-bold pt-5">{{userPostingData.title}}</p>
                <p class="text-md">{{userPostingData.body}}</p>
            </div>

            <div class="p-5">
                <p class="text-xl font-bold">Comments :</p>
                <div v-for="(data, idx) in usersComment" :key="idx">
                    <CardComment :payload="data" />
                </div>
            </div>

            <div class="p-5">
                <p>Give Your Comment : </p>
                <textarea v-model="inputComment" class="border-2 w-full h-32"></textarea>
                <ButtonSubmit @onsubmit="commentHandler" label="Send" />
            </div>
        </section>

    </main>
</template>

<script>
    import { getPostById, getPostCommentById } from '@/utils/posting';
    import { getUserById } from '@/utils/users'
    import Navbar from '@/components/molecules/Navbar.vue';
    import CardComment from '../components/molecules/CardComment.vue';
    import ButtonSubmit from '@/components/Atom/ButtonSubmit.vue'; 

    export default {
    name: "PostingByIdPage",
    data() {
        return {
            userPostingData: {},
            userData: {},
            usersComment : [],
            inputComment: '',
            isLoading : true,
            loadingImg : require('@/assets/spin.svg')
        };
    },
    methods: {
        commentHandler(){
            if(!this.inputComment) alert('need input')
            this.usersComment = [...this.usersComment, {
                name : this.userData.name,
                email : this.userData.email,
                body : this.inputComment
            }]
            this.inputComment = ''
        }
    },
    async mounted() {
        try {
            const resultUserPostingData = await getPostById(this.$route.params.id);
            this.userPostingData = resultUserPostingData.data;

            const resultUserData = await getUserById(this.userPostingData.userId)
            this.userData = resultUserData.data
            
            const resultUsersComment = await getPostCommentById(this.$route.params.id)
            this.usersComment = resultUsersComment.data

            this.isLoading = !this.isLoading
        } catch (error) {
            console.log(error)
        }
    },
    components: {
    Navbar,
    CardComment,
    ButtonSubmit
}
}
</script>