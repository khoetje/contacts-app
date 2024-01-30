<template>
  <ul
    class="contact-list grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
    v-if="contacts.length > 0"
  >
    <li
      class="contact-list__item p-4 rounded-3xl border flex flex-col"
      v-for="contact in contacts"
    >
      <div class="flex justify-end">
        <span
          class="px-2 py-1 mb-5 border rounded-[100px] text-xs"
          :class="contact.type === 'advanced' ? 'Uitgebreid' : 'Simpel'"
          >{{ contact.type === 'advanced' ? 'Uitgebreid' : 'Simpel' }}</span
        >
      </div>

      <p class="p-1 pb-0 text-xs">
        {{ contact.workPrivate === 'work' ? 'werk' : 'privé' }}
      </p>
      <p class="text-xl py-1 pt-0">{{ contact.fullName }}</p>
      <p class="p-1 pt-0 text-sm">{{ contact.email }}</p>
      <p class="p-1 pb-0 text-sm">{{ contact.phone }}</p>

      <div class="pt-6 mt-auto">
        <button
          class="px-2 py-1 text-xs bg-[#004df5] text-white rounded-[100px]"
          @click="removeContact(contact.id)"
        >
          remove
        </button>
      </div>
    </li>
  </ul>
  <NoResults v-else />
</template>

<script>
import { useContactsStore } from '~/store/contacts';
import NoResults from '~/components/NoResults.vue';

export default {
  components: {
    NoResults,
  },
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const store = useContactsStore();
    const contacts = computed(() => store.contacts);

    const removeContact = (id) => {
      store.removeContact(id);
    };

    return {
      contacts,
      removeContact,
    };
  },
};
</script>
