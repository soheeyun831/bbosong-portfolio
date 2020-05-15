<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <slot></slot>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from "vee-validate";

export default {
  name: "SForm",
  components: {
    ValidationObserver,
  },
  props: {
    formData: {
      type: Object,
      default: undefined,
    },
  },
  methods: {
    onSubmit() {
      this.$emit("submitData");
    },
    reset() {
      this.$refs.observer.reset();
    },
  },
};
</script>
