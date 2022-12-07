const API_KEY= '0c0e61be0331e6cfb82fb0431bd5542d'

// https://api.themoviedb.org/3 url base

const solicitudes ={
    populares: `/trending/all/day?api_key=${API_KEY}`,
    peliculasAccion:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    peliculasComedia:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    peliculasTerror:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    peliculasDrama:`/discover/movie?api_key=${API_KEY}&with_genres=18`,
    documentales:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default solicitudes 



