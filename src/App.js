import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Box from './Components/Box/Box';
import Login from './Components/Login/Login';





class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'Homepage'
    }
  }
  
    render(){
       return (
        <div className="App">      
            <Navigation />
            <Box />
        </div>
      );
    }
}

export default App;
