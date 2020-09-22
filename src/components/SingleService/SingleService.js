import React from 'react';
import './SingleService.css'

const SingleService = (props) => {
    console.log(props.data);
    return (
        <div className="single-service">
            <img src={props.data.img} alt=""/>
            <h2 style={{marginBottom:'20px'}}>{props.data.name}</h2>
            <p>{props.data.description}</p>
        </div>
    );
};

export default SingleService;