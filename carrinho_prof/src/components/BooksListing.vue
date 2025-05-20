<script setup>
defineProps(['books'])
defineEmits(['add-to-cart'])
</script>

<template>
      <section class="books">
      <article class="book" v-for="book in books" :key="book.id">
        <img :src="book.cover" :alt="book.title" />
        <h2>{{ book.title }}</h2>
        <p class="book-author">{{ book.author }}</p>
        <span class="price-and-like">
          <p class="book-price">R$ {{ book.price.toFixed(2) }}</p>
          <span class="mdi mdi-heart-outline"></span>
        </span>
        <button @click="$emit('add-to-cart' , book)"><span class="mdi mdi-cart"></span>Comprar</button>
      </article>
    </section>
</template>

<style scoped>
.books {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 5vh 8vw;

  & .book {
    display: flex;
    flex-direction: column;
    min-width: 300px;
    width: calc(100% / 4 - 42px);
    margin: 20px;

    & h2 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    & .book-author {
      font-size: 1rem;
    }

    & .book-price {
      font-size: 1.2rem;
      font-weight: 700;
    }

    & .price-and-like {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      & .mdi-heart-outline {
        font-size: 1.3rem;
        color: #27ae60;
      }
    }
  }
}

</style>
