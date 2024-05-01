import React, { useEffect } from 'react'
import Message from './Message';
import useForm from '../hooks/useForm';

const SimpleForm = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });


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
            {
                username === 'chiquilla2' && <Message/>
            }

            <input
                type="email"
                className='form-control mt-2'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onInputChange}
            />


            <input
                type="password"
                className='form-control mt-2'
                placeholder='Password'
                name='password'
                value={password}
                onChange={onInputChange}
            />

            <button
                className='btn btn-primary mt-2'
                onClick={onResetForm}
            >
                Reset
            </button>




        </>
    )
}

export default SimpleForm
