import React from "react";
import logo from '../logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} width='70px' alt="logo" />
            <h2 className="nav--h2">React Project </h2>
            <h3 className="nav--h3">Project Nr. 1</h3>
        </nav>
    )
}