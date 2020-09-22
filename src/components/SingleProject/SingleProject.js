import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleProject.css'

const SingleProject = (props) => {
    const{name,link,description,img}=props.projectData;

    return (
        <div className="single-project">
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <p>{description}</p>
            <br/>
            <div>
                <a  href={link}><Button className="article-btn"  variant="contained">Go to Website</Button></a>
            </div>
           
        </div>
    );
};

export default SingleProject;