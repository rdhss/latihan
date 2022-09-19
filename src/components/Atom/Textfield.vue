<template>
  <div class="flex justify-between w-72">
    <label>{{ label }}</label>
    <input type="text" v-model="changeInput" />
  </div>
</template>
<script>
export default {
  name: "TextField",
  data() {
    return {
      value: "",
    };
  },
  computed: {
    changeInput: {
      get() {
        return this.value;
      },
      set(val) {
        const variable = {
          name : this.name,
          val
        }
        this.$emit("change", variable);
      },
    },
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
