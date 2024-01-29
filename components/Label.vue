<template>
  <label :for="forAttr" class="font-bold text-left py-1">
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
    forAttr: {
      type: String,
      default: '',
    },
  },
};
</script>
