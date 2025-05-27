<script setup>
import FooterCompenent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

</script>

<template>

  <HeaderComponent @click-cart="showCart = !showCart" />
  <main>
    <RouterView />
  </main>
  <FooterCompenent />
</template>

<style scoped>






</style>
