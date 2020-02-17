import React from 'react';
import wmsu from './wmsu.png';
import './Navigation.css';
import { Link } from "react-router-dom";

const Navigation = () => {   
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand" >
                <img src={wmsu} width="30" height="30" className="d-inline-block align-top" alt="..." /><strong> Western Mindanao State University </strong> 
            </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto text-right">
                        <li className="nav-item active">
                            <div className="nav-link" >Home <span className="sr-only">(current)</span></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" >About Us</div>
                        </li>
                        <li className="nav-item">
                        <button type="button" class="btn btn-outline-primary"><Link to="/Login">Log In</Link></button>
                        </li>
                    </ul>
                </div> 
         </nav>
    );
}

export default Navigation;

