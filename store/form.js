import { defineStore } from 'pinia';

// todo: formData contains sensitive information. It would be better to save this in an external database in stead of cookies.

export const useFormStore = defineStore('form', {
  state: () => ({
    formDataArray: [],
  }),
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: 'strict',
    }),
  },
  actions: {
    setFormData(formData) {
      console.log('setFormData');
      this.formDataArray = [...this.formDataArray, formData];
      console.log('this.formDataArray', this.formDataArray);
    },
    removeItem(id) {
      this.formDataArray = this.formDataArray.filter((item) => item.id !== id);
    },
  },
});
