<template>
  <div class="counter">
    <p>Hodnota: {{ value }}</p>
    <button type="button" :disabled="value >= 10" @click="increment">Přidej 1</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'IncrementButton',
  setup() {
    const value = ref(0);
    const increment = () => {
      if (value.value < 10) {
        value.value += 1;
      }
    };
    return { value, increment };
  },
};
</script>

<style scoped>
.counter { display: flex; gap: 0.75rem; align-items: center; font-family: "Segoe UI", Tahoma, sans-serif; }
button[disabled] { opacity: 0.5; cursor: not-allowed; }
</style>
