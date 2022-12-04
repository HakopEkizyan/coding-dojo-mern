import React, {useState, useEffect} from 'react';

const Pokemon = (props) => {
    const [state, setState] = useState(0);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => {
                return response.json()
            })
            .then(response => {
                setState({
                    pokemon: response.results
                })
            })
    }, []);

    return(
        <div>
            {state.pokemon ? state.pokemon.map((item, index)=>{
                return (<div key={index}><ul><li>{item.name}</li></ul></div>)
            }):null}
        </div>
    )
}

export default Pokemon;