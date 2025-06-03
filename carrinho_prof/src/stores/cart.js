import { ref } from 'vue';
import { defineStore } from "pinia";

export const userCartStore = defineStore('cart' , () => {
  const showCart = ref(false)

  return {showCart}
})
