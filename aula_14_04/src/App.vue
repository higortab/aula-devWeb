<script setup>
  import { ref } from "vue";

  const noticias = ref([
    { titulo: 'Cyberpunk 2077 roda melhor no Switch 2 que no Steam Deck',
      imagem: 'https://www.flowgames.gg/wp-content/uploads/2023/06/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7-1044x587.jpg',
      data: '14/04/2025',
      texto: 'Desde que o Nintendo Switch 2 foi revelado, algumas dúvidas surgiram sobre a qualidade com que jogos mais pesados, como Cyberpunk 2077, estariam rodando nele.',
      texto2: 'O novo console da Nintendo, mais recentemente, pôde ser testado por alguns jogadores em certos países e um vídeo mostra que o FPS da CD Projekt RED roda melhor no Switch 2 do que no Steam Deck.',
      link: 'https://www.flowgames.gg/cyberpunk-2077-roda-melhor-no-switch-2-que-steam-deck/',
      id: '1'
    },
    { titulo: 'GTA 5 Enhanced ganhará mod para melhorar gráfico de graça',
      imagem: 'https://www.flowgames.gg/wp-content/uploads/2025/04/GTA-5-Enhanced-NaturalVision-Enhanced-5-1044x587.jpg',
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
      link: 'https://www.flowgames.gg/zelda-botw-e-totk-app-permite-consertar-armas/',
      id: '4'
    },
    { titulo: 'FPS pós-apocalíptico elogiado está de graça no PC',
      data: '14/04/2025',
      texto: 'Os fãs de FPS e de mundos pós-apocalípticos acabam de ganhar um motivo para comemorar. Ao menos no PC, um dos melhores jogos deste tipo está saindo de graça, mas é por muito pouco tempo.',
      link: 'https://www.flowgames.gg/fps-pos-apocaliptico-elogiado-esta-de-graca-no-pc/',
      id: '5'
    },
    { titulo: 'Eca! Cartuchos de Nintendo Switch 2 terão gosto horrível',
      data: '12/04/2025',
      texto: 'Quem teve o primeiro Switch e se aventurou a, por qualquer motivo, dar uma lambida nos seus cartuchos (fique tranquilo, não estamos julgando ninguém aqui) deve saber que eles tinham um gosto absolutamente terrível.',
      texto2: 'Mantendo a tradição, já foi confirmado que os jogos de Nintendo Switch 2 também terão um sabor repugnante, para a tristeza dos lambedores de plantão.',
      link: 'https://www.flowgames.gg/nintendo-switch-2-cartuchos-terao-gosto-ruim/',
      id: '6'
    },
  ])
</script>

<template>
  <article v-for="noticia in noticias" :key="noticia.id">
    <h2>{{ noticia.titulo }}</h2>
    <img :src="noticia.imagem" alt="">
    <p>{{ noticia.data }}</p>
    <p>{{ noticia.texto }}</p>
    <p>{{ noticia.texto2 }}</p>
    <p>{{ noticia.texto3 }}</p>
    <a :href="noticia.link">Seja direcionado a página:</a>

  </article>
</template>

<style scoped>

</style>
