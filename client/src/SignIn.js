// We need a Login route on the frontend 

import React from 'react'; 

class SignIn extends React.Component {
    state = {
        username: '',
        password: '',
    }

    // Defining my change handler function 
    handleSubmit = e => {
        e.preventDefault(); 
        console.log(this.state); 
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return(
            <> 
                <h3> Login </h3>
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