import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [state, setState] = useState([]);

    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1157&offset=0')
            .then(response => {
                setState({
                    pokemon: response.data.results
                });
            })
    }, []);

    return (
        <div>
            <ol>
                {state.pokemon ? state.pokemon.map((item, index)=>{
                    return (<div key={index}><li>{item.name}</li></div>)
                    }):null}
            </ol>
            {/* {state.pokemon ? state.pokemon.map((item, index)=>{
                return (<div key={index}><ul><li>{item.name}</li></ul></div>)
                }):null} */}
        </div>
    )
}

export default Pokemon;