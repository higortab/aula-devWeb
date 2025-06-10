import { ref } from 'vue'
import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', () => {
    const showCart = ref(false)

    const cart = ref({
    items: [],
    total: 0,
})

function decrementBookToCart(book) {
    const existingBook = cart.value.items.find((item) => item.id === book.id)
    if (existingBook.quantity === 1) {
        cart.value.items = cart.value.items.filter((item) => item.id !== book.id)
    } else {
        existingBook.quantity--
    }
    cart.value.total -= book.price
}

function incrementBookToCart(book) {
    const existingBook = cart.value.items.find((item) => item.id === book.id)
    existingBook.quantity++
    cart.value.total += book.price
}

function addToCart(book) {
    const existingBook = cart.value.items.find((item) => item.id === book.id)
    if (existingBook) {
        existingBook.quantity++
    } else {
        cart.value.items.push({ ...book, quantity: 1 })
    }
    cart.value.total += book.price
    alert(`Adicionado ${book.title} ao carrinho!`)
}

    return {showCart, cart, incrementBookToCart, decrementBookToCart, addToCart}
})
