// We need a Register route as well 

import React from 'react'; 
// Importing axios helper to make code more dry 
import api from './helpers/api'; 

class SignUp extends React.Component {

    state = {
        username: '', 
        password: '', 
        department: '',
    }

    // Defining my change handler function 
    handleSubmit = async e => {
        e.preventDefault(); 

        try {

            // Destructuring my state objects
            const {username, password, department } = this.state

            // This sends information from the frontend to our backend endpoint 
            const result = await api.post('/auth/register', {
                username, 
                password, 
                department
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
                <h3> Sign Up </h3>
                <form onSubmit={this.handleSubmit}> 
                    <input type="text" name="username" placeholder="username" onChange={this.handleChanges} value={this.state.username} />

                    <input type="password" name="password" placeholder="password" onChange={this.handleChanges} value={this.state.password} /> 

                    <input type="text" name="department" placeholder="department" onChange={this.handleChanges} value={this.state.department} /> 

                    <button type="submit">Sign Up</button>
                </form>
            </>
        )
    }
}

export default SignUp; 