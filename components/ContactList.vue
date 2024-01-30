<template>
  <ul
    class="contact-list grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
    v-if="contacts.length > 0"
  >
    <li
      class="contact-list__item p-4 rounded-3xl border"
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
      <p class="p-1 pb-0 text-sm">{{ contact.phone }}</p>
      <p class="p-1 pt-0 text-sm">{{ contact.email }}</p>

      <div class="pt-6">
        <button
          class="px-2 py-1 text-xs bg-[#004df5] text-white rounded-[100px]"
          @click="removeItem(contact.id)"
        >
          remove
        </button>
      </div>
    </li>
  </ul>
  <NoResults v-else />
</template>

<script>
import { useFormStore } from '~/store/form';
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
    const formStore = useFormStore();
    const contacts = computed(() => formStore.formDataArray);

    const removeItem = (id) => {
      formStore.removeItem(id);
    };

    return {
      contacts,
      removeItem,
    };
  },
};
</script>
