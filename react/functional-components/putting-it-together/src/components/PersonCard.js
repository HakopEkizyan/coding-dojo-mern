import React, { useState } from 'react';


const Person = (props) => {
    const [ age, setBirthday ] = useState(props.age);

    return (
        <div>
            <h2>{ props.last_name }, { props.first_name }</h2>
            <p>Age: { age }</p>
            <p>Hair Color: { props.hair_color }</p>
            <button onClick= { (event) => setBirthday(age + 1)}>
                Birthday button for { props.first_name } { props.last_name }
            </button>
        </div>
    )
}

export default Person;