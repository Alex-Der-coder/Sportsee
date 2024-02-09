import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis , ResponsiveContainer } from 'recharts';
import transformData from '../utils/Transformdata.tsx'
export default class Example extends PureComponent {

  render() {
  
    const {  datauserone} = this.props;
    const data = transformData(datauserone);
  

    return (
      <ResponsiveContainer height= "76%" className="bg-slate-950 "  minHeight="225px" width="88%" >
      <RadarChart  id='Radar' cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid  gridType="polygon" radialLines={false} />
        <PolarAngleAxis fill="white" stroke='white' tickLine={false} axisLine={false} dataKey="subject" />  
        <Radar name="Mike" dataKey="A" stroke="#FF0101;
" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
    );
  }
}
