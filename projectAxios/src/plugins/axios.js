import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWQ2ZjAxMzA4ZTI3N2U2MGRkZjFhM2RmMTMxMDI0NCIsIm5iZiI6MTc1OTIzMTc2OC44MzYsInN1YiI6IjY4ZGJiZjE4MDgzMzVmNGU1ZTJkZjRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mtrMrYnugdK6lRYdOJ0k2dEaRHIQyphldM0XGIZqDfI`,
  },
});

export default api;
