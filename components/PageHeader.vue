<template>
  <div class="header w-4/5 md:w-3/5 m-auto">
    <h1 class="text-3xl font-bold mt-8 mb-2">{{ title }}</h1>
    <p class="mb-12 mt-2">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
  },
};
</script>
