import React, { useEffect, useState } from 'react'
import Message from './Message';

const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        username: 'chiquilla',
        email: 'chiquila@b.com'
    })

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }


    useEffect(() => {
        // hey()
    
    }, [ formState ])
    
    
    return (
        <>
        
            <h1>Simple Form</h1>

            <hr />

            <input
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange}
            />


            <input
                type="email"
                className='form-control mt-2'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onInputChange}
            />

            {
                username === 'chiquilla2' && <Message/>
            }

        </>
    )
}

export default SimpleForm
