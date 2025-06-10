<script setup>
import { onMounted, ref } from 'vue';
import { useBooksStore } from '@/stores/books';
const props = defineProps(['id'])

const booksStore = useBooksStore()
const currentBook = ref({})

onMounted( () => {
  currentBook.value = booksStore.getBookById(props.id)
})
</script>

<template>
  <h1>Detalhes do livro: {{ booksStore }}</h1>
</template>
