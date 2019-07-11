const API_TOKEN = "eff4a349ebef11b10d5dea7852741d87";

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
    
  }
// Ont crée ici une function qui permet de récupérer l'image dns LAPI
export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }