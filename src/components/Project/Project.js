import React from 'react';
import SingleProject from '../SingleProject/SingleProject';
import projectData from '../../ProjectData';
import './Project.css'
const Project = () => {
    
    return (
        <div>
            <div style={{margin:'10px',textAlign:'center'}}>
                <h1> Projects</h1>
                <div className="underLine"></div>
            </div>
            <div className="project-container">
                {
                    projectData.map(data=><SingleProject projectData={data}></SingleProject>)
                }
            </div>
        </div>
        
    );
};

export default Project;