import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer  } from 'recharts';
import { useParams } from 'react-router-dom';


const data = [
  { name: 'Group A', value: 25 },
  { name: 'Group B', value: 12  },
];

const COLORS = ['#FBFBFB',  '#FF0000'];

const CircleBarChart= ( score )=> {   

 const { userId } = useParams();

 const groupAValue = 25;

 let groupBValue = 0;

 if (userId) {
  if (userId === '12' && score.score.todayScore !== undefined) {
    groupBValue = score.score.todayScore;
  } else if (userId === '18' && score.score.score !== undefined) {
    groupBValue = score.score.score;
  }
}
   const dataArray = [
     { name: 'Group A', value: groupAValue },
     { name: 'Group B', value: groupBValue * 100 },
   ];


    return (
      <ResponsiveContainer   width="100%" height="108%" minWidth={250} minHeight={228}>
      <PieChart >
        <Pie fill="#FFFFFF"
          data={dataArray}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={0}
          dataKey="value"
          startAngle={80}
        endAngle={-370} 
        cornerRadius={10}
        stroke="none"
        width="100%"
        >
          {data.map((entry, index) => (
            <Cell  key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}

        </Pie>
        <text x={30} y={30} textAnchor="right" dominantBaseline="middle" fill="#000">
        Score
        </text>
        <text x={120} y={105} textAnchor="middle" dominantBaseline="middle" fill="#000">
        {groupBValue*100}%
        </text>
        <text x={120} y={130} textAnchor="middle" dominantBaseline="middle" fill="#74798C">
        de votre  
        </text>
        <text x={120} y={160} textAnchor="middle" dominantBaseline="middle" fill="#74798C">
        objectif
        </text>

      </PieChart>
      </ResponsiveContainer>
    );
  }


  export default CircleBarChart;
