<template>
    <div class="mt-3">
        <div class="bg-white p-5 shadow-md rounded-md">
            <p class="font-bold text-lg">{{payload.name}}</p>
            <p class="text-xs text-slate-600">{{payload.email}}</p>
            <p class="pt-1">{{payload.body}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardCommentComponent',
        props: {
            payload : {
                type: Object,
                required: true
            }
        }
    }
</script>