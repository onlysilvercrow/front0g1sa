import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <ul className="flex">
            <li>
            <a className="m-7" href="/">Home</a>
            </li>
            <li>
            <a className="m-7" href="/about">About</a>
            </li>
            <li>
            <a className="m-7" href="/explore">Explore</a>
            </li>
            <li>
            <a className="m-7" href="/signup">Sign Up</a>
            </li>
            <li>
            <a className="m-7" href="/login">Login</a>
            </li>
            <li>
            <a className="m-7" href="/contact">Contact</a>
            </li>
            <li>
            <a href="/pricing">Pricing</a>
            </li>
        </ul>
    )
}

export default Navbar