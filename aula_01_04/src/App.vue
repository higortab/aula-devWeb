<script setup>
  import { ref, computed } from "vue";

  const number = ref(0)
  const numberTwo = ref(0)

  function encrementar() {
    number.value++
  }

  function decrementar() {
    number.value--
  }

  function aumentar() {
    numberTwo.value++
  }

  function diminuir() {
    numberTwo.value--
  }

  const soma = computed(() => number.value + numberTwo.value);
  const maior10 = computed(() => soma.value >= 10);
  const somaPar = computed(() => soma.value % 2 == 0);

</script>

<template>
<div class="html">
  <div>
  <h1>Contador 1</h1>
  <button @click="encrementar">+</button>
  <button @click="decrementar">-</button>
  <p>{{ number }}</p>
</div>
<div>
  <h1>Contador 2</h1>
  <button @click="aumentar">+</button>
  <button @click="diminuir">-</button>
  <p>{{ numberTwo }}</p>
</div>
<div>
  <h1>A soma dos dois contadores é: {{ soma }}</h1>
</div>
<div v-if="maior10">
  <p>A soma é maior que 10</p>
</div>
<div v-else>
  <p>A soma é menor que 10</p>
</div>
<div v-if="somaPar">
  <p>A soma é par</p>
</div>
<div v-else>
  <p>A soma é ímpar</p>
</div>
<div>
  <button @click="mostrar = !mostrar">mudar</button>
</div>
<div v-if="mostrar">
  <p>true</p>
</div>
<div v-else>
  <p>false</p>
</div>
</div>
</template>

<style scoped>
  .html {
    align-items: center;
  }
</style>
