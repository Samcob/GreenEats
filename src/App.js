import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './views/Home';
import EcoScore from "./views/EcoScore";
import EcoTips from "./views/EcoTips";
import Issues from "./views/Issues";
import BottomNavbar from "./components/bottomNavbar";

import './App.css';
import './styles/global.css';


class App extends Component {

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <BottomNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/ecoScore" component={EcoScore} />
          <Route path="/ecoTips" component={EcoTips} />
          <Route path="/issues" component={Issues} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
