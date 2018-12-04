import React, { Component } from 'react';
import Pokemon from './Pokemon';

export default class Team extends Component {
    render() {
        const {team, deletePokemon} = this.props;
        const pokemonDisplay = team.map((pokemon, index) => <Pokemon pokemon={pokemon} index={index} deletePokemon={deletePokemon}/>)
        return (
            <div>
                {pokemonDisplay}
            </div>
        );
    }
}