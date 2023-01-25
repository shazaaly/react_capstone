import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Logo } from '../logo/Logo'
import { Nav } from '../nav/Nav'
import burg from '../../images/burger.png'
import close from '../../images/close.png'
import './header.css'

// import './header.css'
const headerStyle = {
    "background": "red",
    display: "grid",
    gridColumn: "2 / 6",
    gridTemplateColumns: " repeat(6, minmax(40px, auto))",
    gridTemplateRown: "1fr"

};


export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleSize = () => { setScreenWidth(window.innerWidth) }
        window.addEventListener('resize', handleSize)

    }, [])
    const toggle = () => {
        setMenuOpen(!menuOpen)

    }

    return (
        <div className='container header-container  '>
            <header className='headerArea'
                style={{
                    "display": "grid",
                    "gridTemplateColumns": "1fr 3fr",
                    "marginTop": "1rem"

                }}

            >
                <div className='headerLogo'><Logo /></div>
                {/* <div className='headerNav'>  <Nav style={navStyle} /></div> */}
                <>
                    {
                        screenWidth < 600 ? (
                            <>
                                <button onClick={toggle} style={{ 'background': 'none' }}>
                                    <img src={burg} alt='burgermenu' />
                                </button>
                                {menuOpen && <nav className='customStyle'
                                >
                                    <ul className='modalUl'>
                                        <button onClick={toggle} style={{ 'background': 'none' }} >
                                            <img src={close} alt='close' />
                                        </button>
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
                        ) : (<><Nav /></>)
                    }

                </>


            </header>
        </div>
    )
}
