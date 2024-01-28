<template>
  <div class="contact-list">
    <div v-for="contact in contacts" :key="contact">
      <ContactCard :contact="contact" />
    </div>
  </div>
</template>

<script>
import ContactCard from './ContactCard.vue';
export default {
  props: ['contacts'],
  components: { ContactCard },
  setup(props) {
    console.log('props', props.contacts);
  },
};
</script>
