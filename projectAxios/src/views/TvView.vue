<script setup>
import { ref, onMounted } from 'vue';
import api from '@/plugins/axios';
import Loading from 'vue-loading-overlay'
import { useGenreStore } from '@/stores/genre';

  const genres = ref([]);
  const genreStore = useGenreStore();
  const isLoading = ref(false);
  const series = ref([]);
  const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');


onMounted(async () => {
  isLoading.value = true;
  await genreStore.getAllGenres('tv');
  genres.value = genreStore.genres;
  isLoading.value = false;
});

    const listSeries = async (genreId) => {
      isLoading.value = true;
      const response = await api.get('discover/tv', {
          params: {
              with_genres: genreId,
              language: 'pt-BR'
          }
      });
      series.value = response.data.results
      isLoading.value = false;

  };

  function getGenreName(id) {
  const genero = genres.value.find((genre) => genre.id === id);
  return genero.name;
}

</script>

<template>
  <h1>Programas de TV</h1>

  <Loading v-model:active="isLoading" is-full-page />


<div class="genre-list">
  <span
    v-for="genre in genres"
    :key="genre.id"
    @click="listSeries(genre.id)"
  >
    {{ genre.name }}
  </span>
</div>

  <div class="tv-list">

    <div v-for="tv in series" :key="tv.id" class="tv-card">
      <img
      :src="`https://image.tmdb.org/t/p/w500${tv.poster_path}`"
      :alt="tv.title"
    />

       <div class="serie-details">
      <p class="serie-title">{{ tv.original_name}}</p>
      <p class="serie-release-date">{{ formatDate(tv.first_air_date) }}</p>
      <p class="serie-genres">
        <span v-for="genre_id in tv.genre_ids" :key="genre_id">
          {{ getGenreName(genre_id) }}
        </span>
      </p>
    </div>
    </div>

  </div>

</template>

<style scoped>
.genre-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
  margin-bottom: 2%;
  margin-top: 2%;
}

.genre-list span {
  background-color: #748708;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
}

.genre-list span:hover {
  cursor: pointer;
  background-color: #455a08;
  box-shadow: 0 0 0.5rem #748708;
}

  .genre-item {
    background-color: #5d6424;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    align-self: center;
    color: #fff;
    display: flex;
    justify-content: center;
  }

  .genre-item:hover {
    cursor: pointer;
    background-color: #7d8a2e;
    box-shadow: 0 0 0.5rem #5d6424;
  }

  .tv-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.tv-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.tv-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}

.serie-details {
  padding: 0 0.5rem;
}

.serie-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}

.serie-details .serie-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
}

.serie-details .serie-genres span {
  background-color: #748708;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 2%;
  margin-left: 2%;
}
</style>
