import { defineStore } from 'pinia';
import CryptoJS from 'crypto-js';

export const STORAGE_KEY = 'sensitiveFormData';

export const useFormStore = defineStore('form', {
  state: () => ({
    formDataArray: [],
  }),
  actions: {
    setFormData(formData) {
      console.log('setFormData');
      this.formDataArray.push(formData);
      console.log('this.formDataArray', this.formDataArray);
      this.setStorage(STORAGE_KEY, this.formDataArray);
    },

    getStorage: (key) => {
      const encryptedData = localStorage.getItem(key);
      if (encryptedData) {
        const decryptedData = CryptoJS.AES.decrypt(
          encryptedData,
          'secret-123'
        ).toString(CryptoJS.enc.Utf8);
        return JSON.parse(decryptedData);
      }
      return {};
    },

    setStorage: (key, state) => {
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(state),
        'secret-123'
      ).toString();

      console.log('encryptedData', encryptedData);
      localStorage.setItem(key, encryptedData);
    },
  },
});
