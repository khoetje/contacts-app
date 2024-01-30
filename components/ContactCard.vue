<template>
  <div class="p-4 rounded-3xl border" key="index">
    <p class="p-1 text-xs">{{ contact.workPrivate }}</p>
    <p class="text-xl py-2">{{ contact.fullName }}</p>
    <p class="p-1 text-md">{{ contact.phone }}</p>
    <p class="p-1 text-md">{{ contact.email }}</p>
  </div>
</template>

<script>
import { defineProps } from 'vue';
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>
