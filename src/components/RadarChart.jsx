import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis , ResponsiveContainer } from 'recharts';

export default class Example extends PureComponent {

  render() {
  
    const {  datauserone} = this.props;

    console.log(datauserone.data.data); 

    const mapping = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité"

    };

    const updatedData = datauserone.data.data.map(item => ({
      value: item.value,
      kind: mapping[item.kind] || item.kind
    }));
  
    const data = updatedData.map(item => ({
      subject: item.kind,
      A: item.value,
      fullMark: 150,
    }));

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
