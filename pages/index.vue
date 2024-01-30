<template>
  <div>
    <PageHeader
      class="text-center"
      title="Nieuw contact"
      text="Voeg hier eenvoudig een nieuw contact toe."
    />
    <FormAddContact />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import FormAddContact from '~/components/FormAddContact.vue';

export default {
  components: {
    PageHeader,
    FormAddContact,
  },
};
</script>
