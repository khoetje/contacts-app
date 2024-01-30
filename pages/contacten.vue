<template>
  <div class="text-center">
    <PageHeader
      title="Contacten"
      text="Je kunt hier eenvoudig personen beheren en inzien in deze
        contactenlijst."
    />

    <ContactList v-if="contacts.length > 0" :contacts="contacts" />
    <NoResults v-else />
  </div>
</template>

<script>
import { useFormStore } from '~/store/form';
import PageHeader from '~/components/PageHeader.vue';
import ContactList from '~/components/ContactList.vue';
import NoResults from '~/components/NoResults.vue';

export default {
  components: { PageHeader, ContactList, NoResults },
  setup() {
    const formStore = useFormStore();
    const contacts = formStore.formDataArray;

    return {
      formStore,
      contacts,
    };
  },
};
</script>
