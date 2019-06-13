// We need a Login route on the frontend 

import React from 'react'; 

// Importing axios so I can make HTTP requests
import axios from 'axios'; 

class SignIn extends React.Component {
    state = {
        username: '',
        password: '',
    }

    // Defining my change handler function 
    handleSubmit = async e => {
        e.preventDefault(); 

        try {

            // Destructuring my state objects
            const {username, password } = this.state

            // Endpoint is our backend server's endpoint 
            const endpoint = 'http://localhost:5500/api/auth/login'; 

            // This sends information from the frontend to our backend endpoint 
            const result = await axios.post(endpoint, {
                username, 
                password
            })

            console.log(result); 

        } catch (err) {
            console.error(err); 
        }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return(
            <> 
                <h3> Sign In </h3>
                <form onSubmit={this.handleSubmit}> 
                    <input type="text" name="username" placeholder="username" onChange={this.handleChanges} value={this.state.username} />

                    <input type="password" name="password" placeholder="password" onChange={this.handleChanges} value={this.state.password} /> 

                    <button type="submit">Sign In</button>
                </form>
            </>
        )
    }
}

export default SignIn; 