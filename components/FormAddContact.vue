<template>
  <Form
    @submit="submitForm"
    :validation-schema="
      formValues.type === 'advanced' ? schemaAdvanced : schemaSimple
    "
  >
    <FieldWrapper>
      <p class="font-bold mb-2">Soort</p>
      <div class="grid grid-cols-2 gap-3">
        <div class="flex py-1 px-5 border rounded-[100px] cursor-pointer">
          <Field
            name="type"
            type="radio"
            value="simple"
            v-model="formValues.type"
            id="simple"
          />
          <Label
            class="ml-2 cursor-pointer font-normal"
            labelText="Simpel"
            for="simple"
          />
        </div>
        <div class="flex py-1 px-5 border rounded-[100px]">
          <Field
            name="type"
            type="radio"
            value="advanced"
            v-model="formValues.type"
            id="advanced"
          />
          <Label
            class="ml-2 cursor-pointer font-normal"
            labelText="Uitgebreid"
            for="advanced"
          />
        </div>
      </div>
      <ErrorMessage name="type" />
    </FieldWrapper>

    <FieldWrapper>
      <Label labelText="Werk/Privé" for="workPrivate" />
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
      <Label labelText="Naam" for="fullName" />
      <Field
        class="border p-2 rounded-md m-0"
        v-model="formValues.fullName"
        type="text"
        name="fullName"
      />
      <ErrorMessage class="text-sm text-red-500" name="fullName" />
    </FieldWrapper>

    <FieldWrapper v-if="formValues.type === 'advanced'">
      <Label labelText="Email" for="email" />
      <Field
        class="border p-2 rounded-md m-0"
        v-model="formValues.email"
        type="email"
        name="email"
      />
      <ErrorMessage class="text-sm text-red-500" name="email" />
    </FieldWrapper>

    <FieldWrapper v-if="formValues.type === 'advanced'">
      <Label labelText="Telefoonnummer" for="phone" />
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

    const errorRequired = 'Dit veld is verplicht';

    const schemaSimple = yup.object({
      type: yup.string(),
      workPrivate: yup.string().required(errorRequired),
      fullName: yup.string().required(errorRequired),
    });

    const schemaAdvanced = yup.object({
      type: yup.string(),
      workPrivate: yup.string().required(errorRequired),
      fullName: yup.string().required(errorRequired),
      email: yup.string().email('E-mail is onjuist').required(errorRequired),
      phone: yup
        .string()
        .matches(phoneRegex, 'Vul in als: 06-12345678 of 010-1234567')
        .required(errorRequired),
    });

    const type = ref('');
    const workPrivate = ref('');
    const fullName = ref('');
    const email = ref('');
    const phone = ref('');

    const formValues = ref({
      type: 'simple',
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
      schemaSimple,
      schemaAdvanced,
      formValues,
      workPrivate,
      fullName,
      email,
      phone,
      type,
      submitForm,
    };
  },
};
</script>
