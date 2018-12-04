import React, { Component } from 'react';
import axios from "axios";

export default class PokemonSelect extends Component {
    constructor() {
        super();
        this.state = {
            pokemonList: []
        }
    }
    componentDidMount() {
        axios.get("https://pokeapi.co/api/v2/pokemon/").then(resp => {
            this.setState({
                pokemonList: resp.data.results
            })
        })
    }
    render() {

        const pokemonOptions = this.state.pokemonList.map(pokemon => (
            <option>{pokemon.name}</option>
        ));

        return (
            <select onChange={this.props.onChange}>
                <option value="">Select a pokemon</option>
                {pokemonOptions}
            </select>
        );
    }
}