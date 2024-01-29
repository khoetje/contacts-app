<template>
  <div class="text-center">
    <PageHeader
      title="Contacten"
      text="Je kunt hier eenvoudig personen beheren en inzien in deze
        contactenlijst."
    />
    <ContactList :contacts="contacts" />
  </div>
</template>

<script>
import { useFormStore, STORAGE_KEY } from '~/store/form';
import PageHeader from '~/components/PageHeader.vue';
import ContactList from '~/components/ContactList.vue';

export default {
  components: { PageHeader, ContactList },
  setup() {
    const formStore = useFormStore();
    const contacts = formStore.getStorage(STORAGE_KEY);
    return {
      formStore,
      contacts,
    };
  },
};
</script>
