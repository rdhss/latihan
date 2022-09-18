<template>
    <main>
        <Navbar />
        
        <section class="p-5 border-2">
            <p class="text-xl">Posting By <span class="font-bold">{{userData.name}}</span></p>
            <p class="text-lg font-bold pt-5">{{userPostingData.title}}</p>
            <p class="text-md">{{userPostingData.body}}</p>
        </section>

        <section class="p-5">
            <p class="text-xl font-bold">Comments :</p>
            <div v-for="(data, idx) in usersComment" :key="idx">
                <CardComment :name="data.name" :email="data.email" :body="data.body" />
            </div>
        </section>

        <section class="p-5">
            <p>Give Your Comment : </p>
            <textarea v-model="inputComment" class="border-2 w-full h-32"></textarea>
            <ButtonSubmit @onsubmit="commentHandler" label="Send" />
        </section>
        {{inputComment}}
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
            inputComment: ''
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
        const resultUserPostingData = await getPostById(this.$route.params.id);
        this.userPostingData = resultUserPostingData.data;

        const resultUserData = await getUserById(this.userPostingData.userId)
        this.userData = resultUserData.data
        
        const resultUsersComment = await getPostCommentById(this.$route.params.id)
        this.usersComment = resultUsersComment.data
    },
    components: {
    Navbar,
    CardComment,
    ButtonSubmit
}
}
</script>