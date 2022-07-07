export function getById(id){
    return fetch("http://api.themoviedb.org/3/movie/"+id+"?api_key=b892718013a1ebc19e52cd3a1b4b68c7")
    .then(res => res.json())
}