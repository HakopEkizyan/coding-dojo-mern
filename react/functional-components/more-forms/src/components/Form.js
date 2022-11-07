import React, { useState } from 'react';

const Form = (props) => {
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");

        const [error, setError] = useState(
            { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}
            );

        const handleValidation = (e) => {
            setError( {...error, [e.target.name]: e.target.value } );
            if( e.target.name === "firstName" || e.target.name === 'lastName' ){
                if( e.target.value.length < 2 ){
                    setError( {...error, [e.target.name]: "First or last name must be 2 characters or longer."} );
                }
                else{
                    setError( {...error, [e.target.name]: ""} );
                }
            }
            if( e.target.name === "email" ){
                if( e.target.value.length < 5 ){
                    setError( {...error, [e.target.name]: "email must be 5 characters or longer."} );
                }
                else{
                    setError( {...error, [e.target.name]: ""} );
                }
            }
            if( e.target.name === "password" || e.target.name === "confirmPassword" ){
                if( e.target.value.length < 8 ) {
                    setError( {...error, [e.target.name]: "Password must be 8 characters or longer"} );
                }
                else{
                    setError( {...error, [e.target.name]: ""} );
                }
            }
        }

        const createUser = (e) => { 
            e.preventDefault();

            const newUser = { firstName, lastName, email, password, confirmPassword };
            console.log("Hi", newUser);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        };

    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ handleValidation }
                    name="firstName"
                    />
                    {
                        error.firstName ?
                        <p>{ error.firstName }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ handleValidation }
                    name="lastName"
                    />
                    {
                        error.lastName ?
                        <p>{ error.lastName }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ handleValidation }
                    name="email"
                    />
                    {
                        error.email ?
                        <p>{ error.email }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ handleValidation }
                    name="password"
                    />
                </div>
                    {
                        error.password ?
                        <p>{ error.password }</p> :
                        ''
                    }
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ handleValidation }
                    name="confirmPassword"
                    />
                    {
                        (error.password !== error.confirmPassword) ?
                        <p>Passwords must match</p> :
                        ''
                    }
                </div>
            </form>
        </div>
    );
}

export default Form;