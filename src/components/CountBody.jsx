import React from 'react';
import Carb from '../assets/carbs-icon.svg'
import Calorie from '../assets/calories-icon.svg'
import Proteine from '../assets/protein-icon.svg'
import Fat from '../assets/fat-icon.svg'

const CountBody = (burned) => {

    return ( 
<div  className='absolute flex flex-col left-[80%] top-[25.5%]  w-[10%] min-h-[520px] justify-between '>
    <div className='bg-[#FBFBFB] p-[15px] w-[205px]'>
    <div className='flex flex-row justify-between'><img src={Calorie} alt="Logo"/><p  className='pr-[25%]'><strong>{burned.burned.calorieCount}</strong><br/>Calorie</p></div>
    </div>
    <div  className='bg-[#FBFBFB] p-[15px]  w-[205px]'>
    <div className='flex flex-row justify-between'><img src={Proteine } alt="Logo"  /><p className='pr-[15%]'><strong>{burned.burned.proteinCount}<br/></strong>Proteines</p></div> 
    </div>
    <div  className='bg-[#FBFBFB] p-[15px]  w-[205px]'>
    <div className='flex flex-row justify-between'><img src={Carb} alt="Logo" /><p  className='pr-[15%]' ><strong>{burned.burned.carbohydrateCount}</strong><br/>Glucides</p></div>
    </div>
    <div  className='bg-[#FBFBFB] p-[15px]  w-[205px]'>
    <div className='flex flex-row justify-between' ><img src={Fat} alt="Logo" /><p  className='pr-[21%]'><strong>{burned.burned.lipidCount}</strong><br/>Lipides</p></div>
    </div>
</div>
    );
};

export default CountBody;