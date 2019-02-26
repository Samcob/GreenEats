import React, { Component } from 'react';
import Home from './views/Home';


import './App.css';
import './styles/global.css';


class App extends Component {

  render() {
    //const { classes } = this.props;

    return (
      <div className="App">
        <Home />
      </div>

    );
  }
}
export default App;
