import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', {
  state: () => ({
    formData: {
      // Define your form fields here
      firstName: '',
      lastName: '',
      email: '',
    },
  }),

  actions: {
    setFormData(formData) {
      this.formData = formData;
    },
  },
});
