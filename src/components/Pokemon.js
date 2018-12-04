import React, { Component } from 'react';

export default class Pokemon extends Component {

    

    render() {
        const {pokemon, index} = this.props;
        return (
            <div>
            {index +1 }.  {pokemon.name}
            <span onClick={()=>this.props.deletePokemon(this.props.index)}>X</span>
             </div>
        );
    }
}