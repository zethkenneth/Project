import React, { Component } from 'react';
import med from './med.png';
import wmsu from './wmsu.png';
import './Homepage.css'
import { Link }  from "react-router-dom";

class Homepage extends Component {
    render() {
        return (
            <div>
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
                                <a className="nav-link" href="#home" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#AboutUS" >About Us</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" class="btn btn-outline-primary"><Link to="/Login">Log In</Link></button>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="wrapper">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="feature-box">
                                    <h1><strong>WMSU CLINIC</strong> MONITORING AND INVENTORY SYSTEM</h1>
                                    <p>a web-based clinic system is developed to support the Health Service Center daily operation which is done manually before. This system will involve some of the clinic operation that starts from patient’s registration until giving of medicines. The important thing is it will become easier for the data record and retrieval because of its online and offline database. This system will be able to generate reports regarding the clinic operation, monthly. For example, the number of patients per day and the number of patients diagnosed for a certain illness for the whole month. This system also has notifiable inventory system for the medicines. </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={med} className="feature-img" alt="med" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
