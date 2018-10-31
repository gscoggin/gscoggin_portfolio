import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Gabe from "./components/GabeCard";
import Work from "./components/WorkCard";
import Contact from "./components/ContactCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card";
// import Row from "./Row";
// import Column from "./Column";
// import Row from "./Row";



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Gabe Scoggin</h1>
          <ul className="header">
            <li><NavLink to="/">Gabe</NavLink></li>
            <li><NavLink to="/">Work</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/" component={Gabe}/>
            <Route path="/stuff" component={Work}/>
            <Route path="/contact" component={Contact}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default App;
