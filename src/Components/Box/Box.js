import React from 'react';
import './Box.css';
import med from './med.png';


const Box = () => {   
    return (
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
    );
}

export default Box;