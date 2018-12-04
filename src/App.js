import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import PokemonSelect from './components/PokemonSelect'
import Team from './components/Team'

class App extends Component {
  constructor() {
    super();
    this.state = {
      team: [],
      selectedPokemon: ""
    }

    this.addToMyTeam = this.addToMyTeam.bind(this)
    this.onPokemonChange = this.onPokemonChange.bind(this)
    this.deletePokemon = this.deletePokemon.bind(this)
  }

  addToMyTeam() {
    const body = {
      name: this.state.selectedPokemon
    }

    axios.post('/api/team', body).then(res => {
      this.setState({
        team: res.data
      })
    })
  }

  onPokemonChange(event) {
    this.setState({
      selectedPokemon: event.target.value
    })
  }

  deletePokemon(index){
    axios.delete(`/api/team/${index}`).then(res => {
      this.setState({
        team: res.data
      })
    })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          Pokemon:
          <PokemonSelect onChange={this.onPokemonChange} />
          <button onClick={this.addToMyTeam}>Add to my team</button>
          <Team team={this.state.team} deletePokemon={this.deletePokemon}/>
        </header>
      </div>
    );
  }
}

export default App;
