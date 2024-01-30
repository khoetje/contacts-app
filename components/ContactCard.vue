<template>
  <div class="p-4 rounded-3xl border" key="index">
    <p class="text-lg p-2">{{ contact.fullName }}</p>
    <p class="p-1">{{ contact.phone }}</p>
    <p class="p-1">{{ contact.email }}</p>
    <p class="p-1">{{ contact.workPrivate }}</p>
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
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>
