import http from "./base-http-services";

const login = (user) => http.post('/login', user)
  .then(respose => respose.data).catch(error => console.log(error))

export default {
  login
}