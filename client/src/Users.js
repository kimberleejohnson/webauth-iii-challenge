// We need a Users route as well 

import React from 'react'; 
// Importing withRouter to redirect when there's a 401 or 403 error 
import { withRouter } from 'react-router-dom'; 
// importing axios api helper
import api from './helpers/api'; 

class Users extends React.Component {
    state = {
        users: [], 
    }

    // Making a request to see list of users
    async componentDidMount() {
        try {
            const result = await api.get('/users');
            
            // Setting my state to the users retrieved from the backend
            this.setState(() => (
                {
                    users: result.data.users
                }));
            
        } catch (err) {
            if(err.response.status === 401 || err.response.status === 403) {
                this.props.history.push('/signin'); 
            } else {
            console.error(err); 
            }
        }
    }

    render() {
        return(
            <> 
                <h3> Users </h3>

                <ul>
                    {this.state.users.map(user => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                </ul>
            </>
        );
    }
}

export default withRouter(Users); 