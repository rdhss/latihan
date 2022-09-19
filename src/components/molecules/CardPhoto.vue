<template>
    <div
      class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
    >
    <div class="flex justify-between">
        <h1>id : {{data.id}}</h1>
        <h1>albumId : {{data.albumId}}</h1>
    </div>
    <div class="flex justify-center mt-5">
        <img :src="data.url" alt="">
    </div>
    <h5 class="text-center mt-5">{{data.title}}</h5>
    </div>
</template>
  
  <script>
  export default {
    name: "CardUser",
    props: [
  "data" ],
  };
  </script>
  