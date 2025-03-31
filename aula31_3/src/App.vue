<script setup>
    import { ref } from "vue";
      const nome = 'Higor'
      const idade = ref(16)
      const numero = ref(0)

      function inverter(texto) {

        return texto.split('').reverse().join('').toUpperCase()
    }

      function saudacao() {
        return `Olá, ${nome}`
      }

      function aumentar() {
  numero.value++
}

function diminuir() {
  numero.value--
}



</script>

<template>
      <div class="info">
        <h1>Quadro Exercício 1</h1>
        <p>Nome: {{ nome }} </p>
        <p>Idade: {{ idade }}  anos</p>
        <hr />
        <p>Para completar 50 anos faltam: {{ 50 - idade }}  anos</p>
        <p>O nome tem {{ nome.length }}  caracteres</p>
        <p>O nome invertido é: {{ inverter(nome) }} </p>
        <hr />
        <p> Exemplo de saudação usando função</p>
        <p> {{ saudacao() }}  </p>
        <hr />
        <h1>Contador</h1>
        <button @click="aumentar">aumentar</button>
        <button @click="diminuir">diminuir</button>
        <p>Numero: {{ numero }}</p>
      <div v-if="numero > 10" class="maior">
        <h1>Maior que 10</h1>
      </div>
      <div v-if="numero < 10" class="menor">
        <h1>Menor que 10</h1>
      </div>
      </div>

</template>

<style scoped>
  .info {
  background-color: rgb(14, 14, 100);
  padding: 20px 30px;
  color: rgb(183, 210, 219);
  border-radius: 10px;
  margin: 5% 10%;
}

h1 {
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}

.maior {
  background-color: green;
}
.menor {
  background-color: red;
}

</style>
