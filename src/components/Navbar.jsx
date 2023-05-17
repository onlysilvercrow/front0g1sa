import React from "react";

function Navbar(){
    return(
        <ul className="flex text-gray-500 text-xl">
            <li>
            <a className="m-2.5" href="/">Home</a>
            </li>
            <li>
            <a className="m-2.5" href="/about">About</a>
            </li>
            <li>
            <a className="m-2.5" href="/explore">Explore</a>
            </li>
            <li>
            <a className="m-2.5" href="/signup">Sign Up</a>
            </li>
            <li>
            <a className="m-2.5" href="/login">Login</a>
            </li>
            <li>
            <a className="m-2.5" href="/contact">Contact</a>
            </li>
            <li>
            <a className="m-2.5" href="/pricing">Pricing</a>
            </li>
        </ul>
    )
}

export default Navbar