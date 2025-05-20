<template>
  <section class="hero">
      <div class="hero-content">
        <h3 class="outlined">Livro destaque</h3>
        <h2>Noc Ognia</h2>
        <p>
          Noc ognia é um romance de Erich-Emmanuel Schmitt, que narra a história de um homem que
          vive em um mundo onde as pessoas não podem mais sonhar. O livro é uma reflexão sobre a
          importância dos sonhos e da imaginação na vida humana. Erich-Emmanuel Schmitt é um autor
          francês conhecido por suas obras que exploram temas filosóficos e existenciais. Ele é um
          dos autores mais traduzidos da França e suas obras têm sido amplamente elogiadas pela
          crítica.
        </p>
        <button>Acessar página do livro</button>
      </div>
      <div class="hero-image">
        <img src="/hero.png" alt="Hero Image" />
      </div>
    </section>
</template>

<style scoped>
  .hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5vh 9vw;
  border-bottom: 2px solid #27ae6099;

  & h2 {
    color: #382c2c;
    font-size: 3rem;
    font-weight: 700;
  }

  & .hero-content {
    width: 50%;
    padding-right: 20px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    & h3.outlined {
      background-color: transparent;
      color: #27ae60;
      border: 2px solid #27ae60;
      padding: 15px 20px;
      border-radius: 5px;
      font-size: 1rem;
    }

    & button {
      margin-top: 20px;
    }

    p {
      width: 70%;
    }
  }

  & .hero-image {
    width: 50%;
    text-align: right;
    padding-right: 4vw;

    & img {
      max-width: 100%;
      height: auto;
    }
  }
}

button {
  background-color: #27ae60;
  color: #fff;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  gap: 20px;
  display: flex;
  justify-content: center;

  &.outlined {
    background-color: transparent;
    color: #27ae60;
    border: 2px solid #27ae60;
  }

  &.plain {
    background-color: transparent;
    color: black;
    border: none;
    cursor: pointer;
  }
}
</style>
