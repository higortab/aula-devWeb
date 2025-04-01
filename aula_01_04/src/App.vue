<script setup>
  import { ref } from "vue";

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

  

</script>

<template>
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
  <h2>Soma dos Contadores: {{ number + numberTwo }}</h2>
</div>
</template>

<style scoped>

</style>
