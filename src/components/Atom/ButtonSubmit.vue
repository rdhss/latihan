<template>
  <div>
    <button class="px-4 py-2 bg-blue-500" @click="submit">{{ label }}</button>
  </div>
</template>
<script>
export default {
  name: "ButtonSubmit",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    submit() {
      this.$emit("onsubmit", true);
    },
  },
};
</script>
