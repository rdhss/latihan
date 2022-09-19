<template>
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="flex space-x-4" :class="!payload.title && 'animate-pulse' ">
                <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                        <div :class="!payload.title && 'h-2 bg-slate-700 rounded'">
                            <p class="font-bold">{{payload.title}}</p>
                        </div>
                        <div v-if="!payload.title" class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div class="h-2 bg-slate-700 rounded"></div>
                        </div>
                        <div v-else>
                            <p class="text-xs text-slate-700">{{payload.body}}</p>
                            <p class="pt-3 bottom-0 text-sm text-blue-700 hover:text-blue-900 cursor-pointer" @click="this.$router.push(`/posting/${payload.id}`)">Read More...</p>
                        </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
    name: "CardPosting",
    props: {
        payload : {
            type: Object,
            require: true
        }
    }
}
</script>