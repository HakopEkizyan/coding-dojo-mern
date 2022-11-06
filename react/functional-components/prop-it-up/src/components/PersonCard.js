import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h2>{ props.last_name }, { props.first_name }</h2>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hair_color }</p>
        </div>
    )
}

export default Person;