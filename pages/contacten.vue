<template>
  <div class="text-center">
    <PageHeader
      title="Contacten"
      text="Dit is een overzicht van al je contacten. Je kunt zoeken op naam, e-mail en het soort contact. "
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
