import React from 'react';
import Chart from '../Chart/Chart';
import './About.css'

const About = () => {
    return (
        <div >
            <div style={{textAlign:'center'}}>
                <h1>About</h1>
                <div className="underLine"></div>
            </div>
            <div className="about-container">
                <h1>Who i am</h1>
                <p>I am a highly talented,experenced,professional and cooperative front end developer.I am working in programming more than 2 years. I assure you a world range of quality IT service.Web development and UI design the major filed i am expert in. </p>
                <br/>
                <h1>My Mission</h1>
                <p>My mission is to develop unique idea and quality App that will sequre top position in marketplace.Robust ,sequre ,dynamic and responsive apps for all platform(computer,tab,mobilephone).Provide top notch customar service,customization of our product according to customer demand and currect technology.Planning advance tenchniques for optimization,user experence and satisfaction of our customer for our softwear.I want to flourish softwear than can blow peoples heart and soul. </p>
            </div>

            <div className="skill-container">
                <div className="skill-detail">
                    <h1>TECHNICAL SKILL</h1>
                    <p>Being curious and a problem solver by nature always drives me to learn new technologies and concepts through building projects in my spare time, thereby I gained knowledge on how to wisely chose the right stack for my projects and absolutely grow as a developer.</p>

                    <p>Technologies I work with consist of Html5, Css3, Javascript, ReactJs, Redux, Npm, Sass , Git and Github.</p>

                    <p>I also work with Css libraries like Bootsrap, MaterialUI.</p>
                </div>
                <div style={{margin:'50px'}}>
                    <Chart></Chart>
                </div>
            </div>
        </div>
    );
};

export default About;