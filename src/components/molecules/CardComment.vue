<template>
    <div class="mt-3">
        <div class="bg-white p-5 shadow-md rounded-md">
            <p class="font-bold text-lg">{{name}}</p>
            <p class="text-xs text-slate-600">{{email}}</p>
            <p class="pt-1">{{body}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardCommentComponent',
        props: {
            name: {
                type:String,
                required:false,
                default:'None'
            }, email: {
                type:String,
                required:true,
            }, body: {
                type:String,
                required:false,
                default:'None'
            }, 
        }
    }
</script>