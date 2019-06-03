import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

// components
import HeaderBlock from './components/header_block';


// css
import 'materialize-css/dist/css/materialize.min.css';
import 'animate.css';
import './static/css/main.css';


const Route = require('react-router-dom').Route;

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App" basename="myportfolio">
          <Route path="/" exact component={HeaderBlock} />
        </div>
      </Router>
    );
  }
}

export default App;
