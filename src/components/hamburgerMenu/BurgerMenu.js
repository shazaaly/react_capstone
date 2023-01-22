import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import burg from '../../images/burger.png'
import { Nav } from '../nav/Nav';



export const BurgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleSize = () => { setScreenWidth(window.innerWidth) }
        window.addEventListener('resize', handleSize)

    }, [])
    const toggle = () => {
        setMenuOpen(!menuOpen)

    }


    // }
    return (
        <>
            {
                screenWidth < 600 ? (
                    <>
                        <button onClick={toggle} >
                            <img src={burg} alt='burgermenu' />
                        </button>
                        {menuOpen && <nav>
                            <ul className='navbar'>
                                <li>
                                    <NavLink
                                        to="/" end>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" end>
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/menu" end>
                                        Menu
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/reservations" end>
                                        Reservations
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/order-online" end>
                                        Order Online
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login" end>
                                        Login
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>}
                    </>
                ) : (<></>)
            }

        </>

    )
}
