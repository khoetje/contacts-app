<template>
  <button
    class="my-8 px-5 py-2 bg-[#004df5] text-white rounded-[100px] flex inline-block m-auto"
    :type="type"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
