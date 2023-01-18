import React from 'react'
import { Logo } from '../logo/Logo'
import { Nav } from '../nav/Nav'

export const Header = () => {
    return (
        <>
            <header>
                <Nav />
                <Logo />
            </header>
        </>
    )
}
