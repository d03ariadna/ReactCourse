import React, { useState } from 'react'
import { UserContext } from './UserContext'

const UserProvider = ({ children }) => {

    // const user = {
    //     name: 'Ratilla',
    //     age: 21,
    //     nickname: 'Peso Pelón'
    // }

    const [user, setUser] = useState()
    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider
