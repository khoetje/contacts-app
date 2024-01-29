<template>
  <Form @submit="submitForm" :validation-schema="schema">
    <FieldWrapper>
      <Label labelText="Werk/Privé" :forAttr="workPrivate" />
      <Field
        class="border p-2 rounded-md m-0"
        as="select"
        v-model="formValues.workPrivate"
        name="workPrivate"
      >
        <option value="" disabled>Selecteer</option>
        <option value="work">Werk</option>
        <option value="private">Privé</option>
      </Field>
      <ErrorMessage class="text-sm text-red-500" name="workPrivate" />
    </FieldWrapper>

    <FieldWrapper>
      <Label labelText="Naam" :forAttr="fullName" />
      <Field
        class="border p-2 rounded-md m-0"
        v-model="formValues.fullName"
        type="text"
        name="fullName"
      />
      <ErrorMessage class="text-sm text-red-500" name="fullName" />
    </FieldWrapper>

    <FieldWrapper>
      <Label labelText="Email" :forAttr="email" />
      <Field
        class="border p-2 rounded-md m-0"
        v-model="formValues.email"
        type="email"
        name="email"
      />
      <ErrorMessage class="text-sm text-red-500" name="email" />
    </FieldWrapper>

    <FieldWrapper>
      <Label labelText="Telefoonnummer" :forAttr="phone" />
      <Field
        class="border p-2 rounded-md m-0"
        v-model="formValues.phone"
        type="text"
        name="phone"
      />
      <ErrorMessage class="text-sm text-red-500" name="phone" />
    </FieldWrapper>

    <Button type="submit" label="Contact toevoegen" />
  </Form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

import { useFormStore } from '~/store/form';
import Button from '~/components/Button.vue';
import Label from '~/components/Label.vue';
import FieldWrapper from '~/components/FieldWrapper.vue';

export default {
  components: {
    Button,
    Label,
    FieldWrapper,
  },
  setup() {
    const router = useRouter();

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

    const workPrivate = ref('');
    const fullName = ref('');
    const email = ref('');
    const phone = ref('');

    const formValues = ref({
      workPrivate: '',
      fullName: '',
      email: '',
      phone: '',
    });

    const submitForm = () => {
      // Store form data in Pinia store
      const formStore = useFormStore();
      formStore.setFormData({ ...formValues.value });

      // Redirect to contacten page
      router.push({ path: '/contacten' });

      // reset form
    };

    return {
      schema,
      formValues,
      workPrivate,
      fullName,
      email,
      phone,
      submitForm,
    };
  },
};
</script>
