import React from 'react'
import '../App.css'

const Nav = () => {
    return (
        <div>
            <nav className="nav">
                <h1 className="logo">The Planets</h1>
                    <ul className = "nav_right">
                        <li>Mercury</li>
                        <li>Venus</li>
                        <li>Earth</li>
                        <li>Mars</li>
                        <li>Jupiter</li>
                        <li>Saturn</li>
                        <li>Uranus</li>
                        <li>Neptune</li>
                   </ul>
            </nav>
        </div>
    )
}

export default Nav
