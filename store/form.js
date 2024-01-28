import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', {
  state: () => ({
    formData: {
      workPrivate: '',
      fullName: '',
      email: '',
      phone: '',
    },
  }),

  actions: {
    setFormData(formData) {
      this.formData = formData;
    },
  },
});
