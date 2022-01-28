import React from "react";
import { Link } from "react-router-dom";
import "./btnprimary.css";

function BtnPrimary() {
    return(
        <>
        <Link to='/create' class="btn btn-primary">Add</Link>
        </>
    )
    
}

export default BtnPrimary;




