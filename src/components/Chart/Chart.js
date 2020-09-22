import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const Chart = () => {
    const data = [
        {
          name: 'React', uv: 40, ex: 80, amt: 2400,
        },
        {
          name: 'JavaScript', uv: 30, ex: 70, amt: 2210,
        },
        {
          name: 'Html', uv: 20, ex: 95, amt: 2290,
        },
        {
          name: 'CSS', uv: 27, ex: 85, amt: 2000,
        },
        {
          name: 'Bootstrap', uv: 18, ex:90, amt: 2181,
        },
        {
          name: 'Firebase', uv: 23, ex: 75, amt: 2500,
        },
        {
          name: 'Node', uv: 34, ex: 25, amt: 2100,
        }
      ];
      
    return (
      
        <BarChart
            width={650}
            height={300}
            data={data}
            margin={{
          top: 5, right: 50, left: 50, bottom: 5,
        }}
      >
       
        <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="ex" fill="teal" />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    );
};

export default Chart;