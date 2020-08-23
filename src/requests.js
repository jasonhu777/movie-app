const API_key = "6e5042c8401974c9380e8d97b1c415b6";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_key}&language=en-US`,
  fetchNetflixOrignials: `/discover/tv?api_key=${API_key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_key}&language=en-US`,
  fetchActionMoives: `/discover/movie?api_key=${API_key}&with_genres=28`,
  fetchComedyMoives: `/discover/movie?api_key=${API_key}&with_genres=35`,
  fetchHorrorMoives: `/discover/movie?api_key=${API_key}&with_genres=27`,
  fetchRomanceMoives: `/discover/movie?api_key=${API_key}&with_genres=10749`,
  fetchDocumentaries : `/discover/movie?api_key=${API_key}&with_genres=99`,
}

export default requests