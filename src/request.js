const API_KEY="4e60b7dfa3e541be3c8597b707594d7e";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchMotionOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMoveis:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMoveis:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMoveis:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMoveis:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;