import React, { Component } from "react";
import workcard from './WorkCard.css'
 


class Work extends Component {
  render() {
    return (
      <div className="portfolio">
        <h2>My Work</h2>
        <p>Here's a few examples of my work, if you'd like to learn more, contact me</p>
        <ol>
          <li>Give Time</li>
          <li>Biblioteca</li>
          <li>YumYumNav</li>
          <li>Click Game</li>
          <li>Crystal Game</li>
          <li>Bamazon</li>
        </ol>
      </div>
    );
  }
}
 
export default Work;