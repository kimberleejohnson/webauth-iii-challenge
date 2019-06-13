// Importing axios so I can make HTTP requests
// Creating an axios instance to make code more dry
import axios from 'axios'; 

const instance = axios.create({
    baseURL: 'http://localhost:5500/api'
})

// Setting up an interceptor to run the page multiple times to avoid continuing to get my 401 error 
// Runs every time a request is made 
instance.interceptors.request.use(
    (config) => {
        config.headers.authorization = localStorage.getItem('token');
        return config; 
    },
    (err) => {
        return Promise.reject(err); 
    }
)

export default instance; 