import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

const AboutPage = () => {

    const {user} = useContext(UserContext);


    return (
        <>
            <h1>About Page</h1>
            <hr />  
            <p></p>
        </>
    )
}

export default AboutPage
