import React from "react";
import {
    Link,
} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="App">
            <Link className="App-intro" to="/home">
                Home Page
             </Link>
            <Link className="App-intro" to="/details">
                Details
            </Link>
            <Link className="App-intro" to="/about">
                About
            </Link>
        </div>
    );
};

export default NavBar;
