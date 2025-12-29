<template>
  <section class="random-box">
    <p>Padlo číslo: {{ value }}</p>
    <p>Číslo je: {{ value % 2 === 0 ? 'sudé' : 'liché' }}</p>
    <p>Číslo je menší než 25: {{ value < 25 ? 'ano' : 'ne' }}</p>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'RandomNumber',
  setup() {
    const value = ref(0);
    let timerId = null;

    const roll = () => {
      value.value = Math.floor(Math.random() * 50); // 0–49
    };

    onMounted(() => {
      roll();
      timerId = setInterval(roll, 2500);
    });

    onBeforeUnmount(() => {
      if (timerId) clearInterval(timerId);
    });

    return { value };
  },
};
</script>

<style scoped>
.random-box { display: flex; flex-direction: column; gap: 0.35rem; font-family: "Segoe UI", Tahoma, sans-serif; }
</style>
