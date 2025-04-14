<script setup>
  import { ref } from "vue";

  const noticias = ref([
    { titulo: 'Cyberpunk 2077 roda melhor no Switch 2 que no Steam Deck',
      data: '14/04/2025',
      texto: 'Desde que o Nintendo Switch 2 foi revelado, algumas dúvidas surgiram sobre a qualidade com que jogos mais pesados, como Cyberpunk 2077, estariam rodando nele.',
      texto2: 'O novo console da Nintendo, mais recentemente, pôde ser testado por alguns jogadores em certos países e um vídeo mostra que o FPS da CD Projekt RED roda melhor no Switch 2 do que no Steam Deck.',
      link: 'https://www.flowgames.gg/cyberpunk-2077-roda-melhor-no-switch-2-que-steam-deck/',
      id: '1'
    },
    { titulo: 'GTA 5 Enhanced ganhará mod para melhorar gráfico de graça',
      data: '12/04/2025',
      texto: 'Cercado por algumas polêmicas, o GTA 5 Enhanced foi lançado no começo de março para PC trazendo melhorias para o clássico da Rockstar Games. Os modders nunca param de trabalhar e acabam de anunciar que uma modificação bem popular para o jogo original sairá de graça para a versão Enhanced.',
      link: 'https://www.flowgames.gg/gta-5-enhanced-ganhara-mod-melhorar-grafico-graca/',
      id: '2'
    },
    { titulo: 'Palworld: estúdio não gosta de ser chamado de “Pokémon com armas”',
      data: '12/04/2025',
      texto: 'Desde que foi anunciado, o Palworld foi muito comparado a um “pokémons com armas”. Isso pode até ter ajudado o título a ganhar popularidade, mas a Pocketpair, sua desenvolvedora, se incomoda com essa história.',
      link: 'https://www.flowgames.gg/palworld-estudio-nao-gosta-chamado-pokemon-com-armas/',
      id: '3'
    },
    { titulo: 'Aplicativo oficial permitirá consertar armas em Zelda BOTW',
      data: '14/04/2025',
      texto: 'HPor mais que The Legend of Zelda Breath of the Wild e Tears of the Kingdom sejam considerados dois dos melhores jogos de todos os tempos, há um elemento em seu design que divide opiniões.',
      texto2: 'Há quem ame e quem odeie as armas quebráveis dos jogos, que constantemente exigem que você esteja em busca de novos equipamentos. Ao menos a partir do Nintendo Switch 2, isso será um pouquinho diferente. Entenda a seguir.',
      link: 'https://www.flowgames.gg/solid-snake-foi-criado-silencioso-revela-hideo-kojima/',
      id: '4'
    },
  ])
</script>

<template>
  <article v-for="noticia in noticias" :key="noticia.id">
    <h2>{{ noticia.titulo }}</h2>
    <p>{{ noticia.data }}</p>
    <p>{{ noticia.texto }}</p>
    <p>{{ noticia.texto2 }}</p>
    <p>{{ noticia.texto3 }}</p>
    <a :href="noticia.link">Seja direcionado a página:</a>

  </article>
</template>

<style scoped>

</style>
