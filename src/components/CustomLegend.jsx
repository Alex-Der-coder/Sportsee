import React from 'react';

 const CustomLegend = () => {
  
      return ( 
        <div className='flex w-[55%] absolute top-[26%] ' >
            <div className='w-[51%] flex flex-row justify-between'>
            <h2 className='pl-[6%]'>Activité quotidienne</h2>
            </div>
            <div className='w-[48%] flex justify-between '>
           <div className='w-[27%] flex items-center justify-between'> <div className='w-[10px] h-[10px] rounded-full bg-[#282D30]'></div> <p>Poids (kg)</p></div>
           <div className='w-[53%] flex items-center justify-between'> <div className='w-[10px] h-[10px] rounded-full bg-[#E60000]'></div><p>Calories brûlées (kCal)</p></div>
            </div>
       </div>
      );
      };

      export default CustomLegend;