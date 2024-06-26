import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">useContext</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavLink
                                to='/'
                                className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to='/about'
                                className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}

                            >
                                About
                            </NavLink>
                            
                            <NavLink
                                to='/login'
                                className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
                            >
                                Login
                            </NavLink>
                        </ul>
                    </div>
                </div>
                </nav>
        </>
    )
}

