<template>
  <div class="md:grid md:grid-cols-3 md:gap-4" v-if="contacts">
    <ContactCard
      class="text-xs my-4 md:my-0"
      v-for="(contact, index) in contacts"
      :key="index"
      :contact="contact"
    />
  </div>
</template>

<script>
import ContactCard from '~/components/ContactCard.vue';
import Button from '~/components/Button.vue';

export default {
  components: {
    ContactCard,
    Button,
  },
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
};
</script>
