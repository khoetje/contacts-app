import { defineStore } from 'pinia';

// todo: formData contains sensitive information. It would be better to save this in an external database in stead of cookies.

export const useContactsStore = defineStore('contacts', {
  state: () => ({
    contacts: [],
  }),
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: 'strict',
    }),
  },
  actions: {
    setFormData(data) {
      this.contacts = [...this.contacts, data];
    },
    removeContact(id) {
      this.contacts = this.contacts.filter((item) => item.id !== id);
    },
  },
});
