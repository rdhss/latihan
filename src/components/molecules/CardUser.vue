<template>
  <div
    class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
  >
    <h1>id : {{data.id}}</h1>
    <h1>name : {{data.name}}</h1>
    <h1>username : {{data.username}}</h1>
    <h1>email : {{data.email}}</h1>
    <h1>address : </h1>
    <ul class="list-disc pl-10">
      <li>
        street : {{data.address.street}}
      </li>
      <li>
        suite : {{data.address.suite}}
      </li>
      <li>
        city : {{data.address.city}}
      </li>
      <li>
        zipcode : {{data.address.zipcode}}
      </li>
      <li>
        geo : {{data.address.geo.lat}}, {{data.address.geo.lng}}
      </li>
    </ul>
    <h1>phone : {{data.phone}}</h1>
    <h1>website : {{data.website}}</h1>
    <h1>company :</h1>
    <ul class="list-disc pl-10">
      <li>
        name : {{data.company.name}}
      </li>
      <li>
        catchPhrase : {{data.company.catchPhrase}}
      </li>
      <li>
        bs : {{data.company.bs}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CardUser",
  props: [
  "data"],
};
</script>
