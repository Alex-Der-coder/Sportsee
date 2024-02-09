
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { formatDayTickExportable } from '../utils/Fonction.tsx'


export default class Example extends PureComponent {
    
  render() {
    const { data} = this.props;

    return (
      
        <BarChart className={"bg-[#FBFBFB] pt-[4%]  " }
        Radius={[10, 10, 0, 0]}
          width={800}
          height={250}
          data={data.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }} 
        >
          <CartesianGrid vertical={false}  strokeDasharray="3" />
          <XAxis dataKey="day"   name="Poids (kg)"   tickFormatter={formatDayTickExportable}/>
          <YAxis yAxisId="kilogram" type="number"   domain={[69 , 71]} tickCount="3"  orientation="right" radius={[50, 50, 0, 0]}  />
          <YAxis yAxisId="calories"  type="number"  domain={[69, 'auto']}  orientation="right" hide={true}  radius={[50, 50, 0, 0]}/>
          <Tooltip  />
        <Bar yAxisId="kilogram" barSize={7} dataKey="kilogram" fill="#282D30"  name="Poids (kg)" radius={[50, 50, 0, 0]}  /> 
          <Bar yAxisId="calories" barSize={7}  dataKey="calories" fill="#E60000"  name=" Calories brûlées (kCal) "   radius={[50, 50, 0, 0]}  />
        </BarChart>
        
    );
  }
}
