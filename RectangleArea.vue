<template>
  <p>Delka obdelníku je {{ delka }}, šířka je {{ sirka }} a obsah je {{ obsah }}.</p>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'RectangleArea',
  setup() {
    const delka = ref(Math.floor(Math.random() * 10));
    const sirka = ref(Math.floor(Math.random() * 10));

    const obsah = computed(() => delka.value * sirka.value);

    return { delka, sirka, obsah };
  },
};
</script>

<style scoped>
p { font-family: "Segoe UI", Tahoma, sans-serif; }
</style>
