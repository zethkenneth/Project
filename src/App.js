import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage';
import LogIn from './Pages/Login/Login';

class App extends Component {
    render(){
       return (
           <Router>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/Login" component={LogIn} />
                <Redirect to="/" />
              </Switch>
           </Router>
      );
    }
}

export default App;
