// I deleted boilerplate React greeting page, CSS, logo from App.js. I also removed testing and service worker, since those are beyond the scope of Lambda School.

import React from 'react';
// Now that I imported BrowserRouter in index.js, I can add Routes and NavLink in App.js 
import { Route, NavLink } from 'react-router-dom'; 

// Importing the components that will be returned in Routes 
import SignIn from './SignIn'; 
import SignUp from './SignUp'; 
import Users from './Users'; 

function App() {
  return (
    <>
      <h1>Welcome!</h1>
      <ul>
        <li><NavLink to="/signin">Sign In</NavLink></li>
        <li><NavLink to="/signup">Sign Up</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
      </ul>
      
      <div>
        <Route path="/signin" component={SignIn} /> 
        <Route path="/signup" component={SignUp} /> 
        <Route path="/users" component={Users} /> 
      </div>

    </> 
  );
}

export default App;
