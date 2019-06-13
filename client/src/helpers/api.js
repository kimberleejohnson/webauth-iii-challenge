// Importing axios so I can make HTTP requests
// Creating an axios instance to make code more dry
import axios from 'axios'; 

const instance = axios.create({
    baseURL: 'http://localhost:5500/api',
    // Providing the server with a token, so that succesful logins can see users
    headers: {
        authorization: localStorage.getItem('token'),
    },
})

export default instance; 