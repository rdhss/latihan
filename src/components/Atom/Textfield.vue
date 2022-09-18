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
        this.$emit("change", val);
      },
    },
  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
