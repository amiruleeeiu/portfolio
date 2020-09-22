import React from 'react';
import SingleService from '../SingleService/SingleService';
import './Service.css'
import serviceData from '../../serviceData';
const Service = () => {
    return (
        <div style={{textAlign:'center',marginTop:'30px'}}>
            <h1>MY SERVICES</h1>
            <div className="underLine"></div>
                <div className="services">
                    {
                        serviceData.map(data=><SingleService data={data}></SingleService>)
                    }
                </div>
        </div>
    );
};

export default Service;