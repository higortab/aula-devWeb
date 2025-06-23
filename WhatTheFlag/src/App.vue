<script setup>

</script>

<template>
  <header>
    <div>
    <h1>Jogo-What The Flag</h1>
    <p>O jogo tem como objetivo  testar os conhecimentos do usuário sobre três elementos: moeda, idioma e localização. A cada rodada, será exibida uma dessas informações, e o  jogador deverá selecionar a bandeira do país correspondente.</p>
    <p>Também é possível implementar uma contagem regressiva e efeitos sonoros para tornar a experiência mais imersiva.A lógica do jogo pode ser reaproveitada em outros contextos, como  personagens de séries, Pokémon, modelos de carros e seus respectivos  anos, pontos turísticos e países, pratos típicos e seus ingredientes  principais, entre outros.</p>
    <p>Você pode começar com uma versão mais  simples do jogo, em que o nome de um determinado país é exibido e o  usuário deve selecionar a bandeira correspondente. Ao final, se o  jogador acertar três bandeiras dentro do tempo estipulado, será  considerado vencedor.</p>
    </div>
  </header>

  <main>
    <div class="inicio">
      <h3>What The Flag</h3>
      
    </div>
  </main>

</template>

<style scoped>
  header {
    background-color: #a39a9a;
    padding: 2% 5%;
  }
  header div{
    background-color: white;
    padding: 2% ;
  }

  header div h1 {
    font-size: 150%;
    font-family: 'Acme';
    color: black;
  }

  header div p {
    margin: 1% 0;
    font-size: 120%;
    color: black;
  }
</style>
