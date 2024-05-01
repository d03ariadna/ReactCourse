import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

const LoginPage = () => {

    const {user, setUser} = useContext(UserContext)

    return (
        <>
            <h1>Login Page</h1>
            <hr />  

            <pre aria-label='pre'>
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button
                onClick={() => setUser({id: 1, name: 'Kizay', nickname: 'Peso Pelón'})}
                className='btn btn-primary'>
                Establecer ratilla
            </button>
        </>
    )
}

export default LoginPage
