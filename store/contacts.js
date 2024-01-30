import { defineStore } from 'pinia';

// todo: formData contains sensitive information. It would be better to save this in an external database in stead of cookies.

export const useContactsStore = defineStore('contacts', {
  state: () => ({
    contacts: [],
    searchQuery: '',
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
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
    },
    updateSearchQuery(query) {
      this.searchQuery = query;
    },

    getSearchResults() {
      const searchTerm = this.searchQuery.toLowerCase();
      const simpleType = 'simpel';
      const advancedType = 'uitgebreid';
      return this.contacts.filter(
        (contact) =>
          contact.fullName.toLowerCase().includes(searchTerm) ||
          contact.email.toLowerCase().includes(searchTerm) ||
          (contact.type === 'simple'
            ? simpleType.includes(searchTerm)
            : false) ||
          (contact.type === 'advanced'
            ? advancedType.includes(searchTerm)
            : false)
      );
    },
  },
});
