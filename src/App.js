import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './views/Home';
import EcoScore from "./views/EcoScore";
import EcoTips from "./views/EcoTips";
import Issues from "./views/Issues";
import Results from "./views/Results";
import BottomNavbar from "./components/bottomNavbar";
import TopHeader from "./components/TopHeader";

import './App.css';
import './styles/global.css';


class App extends Component {

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <div>

            {/*These two components being called in router means that they will always be on all of the pages.  Makes things a lot easier.*/}

            <TopHeader />
            <BottomNavbar />

            {/*These two components being called in router means that they will always be on all of the pages.  Makes things a lot easier.*/}

            <Route exact path="/" component={Home} />
            <Route path="/ecoScore" component={EcoScore} />
            <Route path="/ecoTips" component={EcoTips} />
            <Route path="/issues" component={Issues} />

            {/* This search is not working for some reason */}

            <Route path="/resuts" component={Results} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
