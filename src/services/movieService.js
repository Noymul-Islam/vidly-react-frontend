import http from './httpService';
import config from '../config.json'
const appiEndPoint = '/movies';

function movieUrl(id){
   return `${appiEndPoint}/${id}`;
}
export function getMovies() {
    return http.get(appiEndPoint);
}
export function deleteMovie(movieId) {
    return http.delete(movieUrl(movieId));
}
export function getMovie(movieId) {
    return http.get(movieUrl(movieId))
}
export function saveMovie(movie) {
    if (movie._id) {
        const body = { ...movie };
        delete body._id;
        return http.put(movieUrl(movie._id), body);
    }
    return http.post(appiEndPoint, movie)

}