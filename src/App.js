import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import Home from './pages';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <Home/>
      </Router>
     );
  }
}
 
export default App;