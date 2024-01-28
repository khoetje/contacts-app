<template>
  <div class="header">
    <h1 class="text-2xl font-bold my-8">{{ title }}</h1>
    <p class="my-8">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'text'],
  setup(props) {
    // console.log('props', props.title);
    // console.log('props', props.text);
  },
};
</script>
