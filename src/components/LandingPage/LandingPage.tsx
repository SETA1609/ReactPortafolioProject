import React from 'react';
import "./LandingPage.css";
import photo from "./foto.png";

function LandingPage() {
    return (
        <div className='landingPage'>
            <div className="foto-Container">
                <img src={photo} alt="My Photo"  className="foto" />
            </div>
            <p>
                Hi, Im Sebastian!
            </p>
            <h1>
                A fullstack developer specialized in Springboot, React, Angular and Django
            </h1>
        </div>
    );
}

export default LandingPage;
