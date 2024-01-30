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
import { useContactsStore } from '~/store/contacts';
import PageHeader from '~/components/PageHeader.vue';
import ContactList from '~/components/ContactList.vue';
import NoResults from '~/components/NoResults.vue';

export default {
  components: { PageHeader, ContactList, NoResults },
  setup() {
    const store = useContactsStore();
    const contacts = store.contacts;

    return {
      contacts,
    };
  },
};
</script>
