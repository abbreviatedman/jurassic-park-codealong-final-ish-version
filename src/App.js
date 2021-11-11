import React from 'react';
import Headings from './components/Headings';
import species from './data/species'
import './App.css'
import ParkInfo from './components/ParkInfo';
import Park from './components/Park';
import Buttons from './components/Buttons';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      dinos: [],
      currentSpecies: species[0]
    }
  }

  getRandomSpecies = () => {
    const i = Math.floor(Math.random() * species.length)
    this.setState({currentSpecies: species[i]})
  }

  addDino = () => {
    const {dinos, currentSpecies} = this.state
    // no, bad:
    // this.state.dinos.push(this.state.currentSpecies)
    // this.state.numberOfDinos++;

    // good:
    this.setState({
      dinos: [currentSpecies, ...dinos],
    })
  }

  reset = () => {
    this.setState({dinos: []})
  }

  render() {
    return (
      <div className="App">
        <Headings />
        <Buttons
          randomSpeciesHandler={this.getRandomSpecies}
          addDinoHandler={this.addDino}
          destroyParkHandler={this.reset}
        />
        <ParkInfo
          currentSpecies={this.state.currentSpecies.name}
          numberOfDinos={this.state.dinos.length}
        />
        <Park dinos={this.state.dinos}/>
      </div>
    );
  }
}

export default App;

[3, 5, 7].concat([8, 13, 21]) //> [3, 5, 7, 8, 13, 21]