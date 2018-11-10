import http from './httpService';
import config from '../config.json'
const appiEndPoint = '/users';


export function register(user) {
   return  http.post(appiEndPoint, {
        email: user.username,
        password: user.password,
        name: user.name
    })
}