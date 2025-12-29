<template>
  <section class="dice">
    <p>První kostka: {{ first }}</p>
    <p>Druhá kostka: {{ second }}</p>
    <p>Výsledek: {{ result }}</p>
    <button type="button" @click="roll">Hoď kostkami!</button>
  </section>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'DiceRoll',
  setup() {
    const first = ref(1);
    const second = ref(1);

    const result = computed(() => (first.value === second.value ? 'Vyhráli jste!' : 'Házejte znovu!'));

    const randDie = () => Math.floor(Math.random() * 6) + 1;
    const roll = () => {
      first.value = randDie();
      second.value = randDie();
    };

    return { first, second, result, roll };
  },
};
</script>

<style scoped>
.dice { display: flex; flex-direction: column; gap: 0.4rem; font-family: "Segoe UI", Tahoma, sans-serif; }
button { width: max-content; padding: 0.5rem 0.9rem; cursor: pointer; }
</style>
