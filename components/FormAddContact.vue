<template>
  <Form @submit="submitForm" :validation-schema="schema">
    <div class="flex flex-col w-full max-w-80 pb-4 m-auto">
      <label class="font-bold text-left py-1" for="workPrivate"
        >Werk/Privé</label
      >
      <Field
        class="border p-2 rounded-md m-0"
        as="select"
        v-model="formData.workPrivate"
        name="workPrivate"
      >
        <option value="" disabled>Selecteer</option>
        <option value="work">Werk</option>
        <option value="private">Privé</option>
      </Field>
      <ErrorMessage class="text-sm text-red-500" name="workPrivate" />
    </div>

    <div class="flex flex-col w-full max-w-80 pb-4 m-auto">
      <label class="font-bold text-left py-1" for="fullName">Naam</label>
      <Field
        class="border p-2 rounded-md m-0"
        v-model="formData.fullName"
        type="text"
        name="fullName"
      />
      <ErrorMessage class="text-sm text-red-500" name="fullName" />
    </div>

    <div class="flex flex-col w-full max-w-80 pb-4 m-auto">
      <label class="font-bold text-left py-1" for="email">Email:</label>
      <Field
        class="border p-2 rounded-md m-0"
        v-model="formData.email"
        type="email"
        name="email"
      />
      <ErrorMessage class="text-sm text-red-500" name="email" />
    </div>

    <div class="flex flex-col w-full max-w-80 pb-4 m-auto">
      <label class="font-bold text-left py-1" for="phone"
        >Telefoonnummer:</label
      >
      <Field
        class="border p-2 rounded-md m-0"
        v-model="formData.phone"
        type="phone"
        name="phone"
      />
      <ErrorMessage class="text-sm text-red-500" name="phone" />
    </div>

    <button
      class="my-8 px-5 py-2 bg-[#004df5] text-white rounded-[100px]"
      type="submit"
    >
      Contact toevoegen
    </button>
  </Form>
</template>

<script>
import { ref } from 'vue';
import { useFormStore } from '~/store/form';
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
  setup() {
    const phoneRegex =
      /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/;
    const schema = yup.object({
      workPrivate: yup.string().required('Dit veld is verplicht'),
      fullName: yup.string().required('Naam is verplicht'),
      email: yup
        .string()
        .email('E-mail is onjuist')
        .required('E-mail is verplicht'),
      phone: yup
        .string()
        .matches(phoneRegex, 'Vul in als: 06-12345678 of 010-1234567')
        .required('Telefoonnummer is verplicht. '),
    });

    const formData = ref(useFormStore().formData);

    console.log('formData', formData);

    const submitForm = () => {
      console.log('formData', formData.value);

      // Store form data in Pinia store
      useFormStore().setFormData(formData.value);
    };

    return {
      schema,
      formData,
      submitForm,
    };
  },
};
</script>
