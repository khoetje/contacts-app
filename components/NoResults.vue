<template>
  <div class="py-8">
    <p v-if="searchIsActive">
      Geen zoekresultaten gevonden. Pas de zoekterm aan.
    </p>
    <p v-else>
      Helaas! <br />
      We hebben geen contacten gevonden. <br />
      <NuxtLink class="text-[#004df5] hover:text-decoration-line" to="/"
        >Voeg een nieuw contact toe</NuxtLink
      >
    </p>
  </div>
</template>

<script>
export default {
  props: {
    searchIsActive: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
