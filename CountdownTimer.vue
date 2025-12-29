<template>
  <section class="countdown">
    <h1 v-if="timeLeft > 0">{{ timeLeft }}</h1>
    <h1 v-else>Hotovo!</h1>
    <button type="button" @click="reset">Restart</button>
  </section>
</template>

<script>
export default {
  name: 'CountdownTimer',
  data() {
    return {
      timeLeft: 10,
      timerId: null,
    };
  },
  methods: {
    start() {
      if (this.timerId) return;
      this.timerId = setInterval(() => {
        if (this.timeLeft <= 0) {
          this.stop();
          return;
        }
        this.timeLeft -= 1;
      }, 1000);
    },
    stop() {
      if (this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    },
    reset() {
      this.stop();
      this.timeLeft = 10;
      this.start();
    },
  },
  mounted() {
    this.start();
  },
  beforeUnmount() {
    this.stop();
  },
};
</script>

<style scoped>
.countdown { display: flex; gap: 0.75rem; align-items: center; }
h1 { margin: 0; }
button { padding: 0.35rem 0.75rem; cursor: pointer; }
</style>
