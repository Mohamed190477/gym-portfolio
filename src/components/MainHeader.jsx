import React from 'react';
import { Link } from 'react-router-dom';
import Athlete from "../images/main_header.png";
import "../pages/home/home.css";
import "../index.css";

const MainHeader = () => {
    return (
        <>
        <header className='main__header'>
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h4>#100OfWorkouts</h4>
                    <h1>Join The Legends Of The Fitness World</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vero omnis error, praesentium cumque impedit.</p>
                    <Link className='btn lg' to="/plans">Get Started</Link>
                </div>
                <div className="main__header-right">
                    <div className="main__header-circle"></div>
                    <div className="main__header-image">
                        <img src={Athlete} alt="athlete" />
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default MainHeader