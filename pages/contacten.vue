<template>
  <div class="text-center">
    <PageHeader
      title="Contacten"
      text="Je kunt hier eenvoudig personen beheren en inzien in deze
        contactenlijst."
    />

    <ContactList v-if="contacts" :contacts="contacts" />
    <p v-else>
      We hebben geen contacten gevonden. <br />
      <NuxtLink to="/">Voeg een nieuw contact toe</NuxtLink>
    </p>
  </div>
</template>

<script>
import { useFormStore } from '~/store/form';
import PageHeader from '~/components/PageHeader.vue';
import ContactList from '~/components/ContactList.vue';
import ContactCard from '~/components/ContactCard.vue';

export default {
  components: { PageHeader, ContactList, ContactCard },
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
