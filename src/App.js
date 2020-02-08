import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Box from './Components/Box/Box';

class App extends Component {
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
