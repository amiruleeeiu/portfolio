import React, { useState } from 'react';
import './Home.css';
import img from '../../images/amirul.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
    const [direction,setDirection]=useState(false);
    const handleChange=()=>{
        setDirection(true);
    }
    return (
        <div>
            <div className="home" >
            <div className="home-img">
                <img src={img} alt="amirul"/>
            </div>
            <div className="home-detail">
                <h1>Hello, I am <strong style={{color:'red'}}>Amirul Islam</strong></h1>
                <h3>I am a front End Developer</h3>
                <Link to="/project" ><button onMouseOver={handleChange}>View My Project <i className="arrow right"></i></button></Link>
            </div>
        </div>
        </div>
    );
};

export default Home;