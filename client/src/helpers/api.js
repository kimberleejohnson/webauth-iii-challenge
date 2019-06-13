// Importing axios so I can make HTTP requests
// Creating an axios instance to make code more dry
import axios from 'axios'; 

const instance = axios.create({
    baseURL: 'http://localhost:5500/api',
})

export default instance; 