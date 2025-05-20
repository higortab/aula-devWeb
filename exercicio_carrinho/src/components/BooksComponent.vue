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
        <button @click="addToCart(book)"><span class="mdi mdi-cart"></span>Comprar</button>
      </article>
    </section>
</template>

<style >

</style>
