<script setup>
import CartComponent from '@/components/CartComponent.vue'
import BannerComponent from '@/components/HeroComponent.vue'
import FeaturedComponent from '@/components/FeaturedComponent.vue'
import BooksComponent from '@/components/BooksListing.vue'

import { useBooksStore } from '@/stores/books'
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
const booksStore = useBooksStore()

</script>
<template>
    <main v-if="cartStore.showCart">
    <CartComponent @showCart="cartStore.showCart = false" :cart="cartStore.cart" @click-incrementar="cartStore.incrementBookToCart"
        @click-decrementar="cartStore.decrementBookToCart" />
    </main>
    <main v-else>
        <BannerComponent />
        <FeaturedComponent />
        <BooksComponent :books="booksStore.listBooks" @add-cart="cartStore.addToCart" />
    </main>

</template>
