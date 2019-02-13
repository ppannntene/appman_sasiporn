import React, { Component } from 'react'
import './App.css'
// import cards from './cards.json'

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

// function CardList(props) {
//   const cards = props.cards;
//   for(var k in cards) {
//     console.log(cards[k]);
//   }
//   return (
//     {cards}
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="Header">
            <span>My Pokemon</span>
          </div>
        <div className="Body-list">
            <div className="box">
              <div className="card">
                {/* <CardList cards={cards} /> */}
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default App
