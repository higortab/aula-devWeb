<script setup>
  import { ref } from 'vue'
  import CartComponent from '@/components/CartComponent.vue'
  import BooksListing from '@/components/BooksListing.vue'
  import HeroComponent from '@/components/HeroComponent.vue'
  import FeaturedComponent from '@/components/FeaturedComponent.vue'

  const showCart = ref(false)
const cart = ref({
  items: [],
  total: 0,
})
const books = [
  {
    id: 1,
    title: 'Comigo na livraria',
    cover: '/covers/comigo-na-livraria.png',
    price: 23.24,
    author: 'Martha Medeiros',
  },
  {
    id: 2,
    title: 'Quincas Borba',
    cover: '/covers/quincas-borba.png',
    price: 23.24,
    author: 'Machado de Assis',
  },
  {
    id: 3,
    title: 'A livraria',
    cover: '/covers/a-livraria.png',
    price: 13.94,
    author: 'Penelope Fitzgerald',
  },
  {
    id: 4,
    title: 'A hora da estrela',
    cover: '/covers/a-hora-da-estrela.png',
    price: 16.84,
    author: 'Clarice Lispector',
  },
  {
    id: 5,
    title: 'O alienista',
    cover: '/covers/o-alienista.png',
    price: 266.92,
    author: 'Machado de Assis',
  },
  {
    id: 6,
    title: 'Mar morto',
    cover: '/covers/mar-morto.png',
    price: 13.95,
    author: 'Jorge Amado',
  },
  {
    id: 7,
    title: 'Grande sertão',
    cover: '/covers/grande-sertao-veredas.png',
    price: 26.04,
    author: 'Guimarães Rosa',
  },
  {
    id: 8,
    title: 'Flor de poemas',
    cover: '/covers/flor-de-poema.png',
    price: 15.81,
    author: 'Cecília Meireles',
  },
]
</script>

<template>
  <main v-if="showCart">
    <CartComponent
    :cart="cart"
    @click-cart="showCart = !showCart"
    @increment-book="incrementBookToCart"
    @decrement-book="decrementBookToCart"/>
  </main>
  <template v-else>
    <button @click="showCart = true" >Ver carrinho</button>
    <HeroComponent />
    <FeaturedComponent />
    <BooksListing :books="books" @add-to-cart="addToCart"/>
  </template>
</template>
