<template>
  <div
    class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
  >
    <h1>id : {{id}}</h1>
    <h1>name : {{name}}</h1>
    <h1>username : {{username}}</h1>
    <h1>email : {{email}}</h1>
    <h1>address : </h1>
    <ul class="list-disc pl-10">
      <li>
        street : {{street}}
      </li>
      <li>
        suite : {{suite}}
      </li>
      <li>
        city : {{city}}
      </li>
      <li>
        zipcode : {{zipcode}}
      </li>
      <li>
        geo : {{lat}}, {{lng}}
      </li>
    </ul>
    <h1>phone : {{phone}}</h1>
    <h1>website : {{website}}</h1>
    <h1>company :</h1>
    <ul class="list-disc pl-10">
      <li>
        name : {{Cname}}
      </li>
      <li>
        catchPhrase : {{catchPhrase}}
      </li>
      <li>
        bs : {{bs}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CardUser",
  props: ["id", 
  "name", 
  "username", 
  "email", 
  "address", 
  "street", 
  "suite", 
  "city", 
  "zipcode", 
  "geo", 
  "lat",
  "lng",
  "phone", 
  "website", 
  "company", 
  "Cname", 
  "catchPhrase", 
  "bs"],
};
</script>
