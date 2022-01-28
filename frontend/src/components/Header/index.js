import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return(
        <>
        <header>
            <div className="container">
                <div className="navbar">
                    <h1>ELearning CMS</h1>
                    <div className="nav_textwrap">
                    <Link to={"/"} className="nav_text">Home</Link>
                    <Link to={"/#"} className="nav_text">CRUD</Link>
                    </div>
                </div>
            </div>
        </header>
        
        </>
    )
    
}

export default Header;