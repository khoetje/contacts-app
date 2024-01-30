<template>
  <label :for="for" class="font-bold py-1">
    {{ labelText }}
  </label>
</template>

<script>
export default {
  props: {
    labelText: {
      type: String,
      required: true,
    },
    for: {
      type: String,
      default: '',
    },
  },
};
</script>
