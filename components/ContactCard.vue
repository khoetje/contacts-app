<template>
  <div class="contact-card">
    {{ contact.name }}
  </div>
</template>

<script>
import ContactCard from './ContactCard.vue';
export default {
  props: ['contact'],
  components: { ContactCard },
  setup(props) {
    console.log('props', props.contacts);
  },
};
</script>

<style lang="scss" scoped></style>
