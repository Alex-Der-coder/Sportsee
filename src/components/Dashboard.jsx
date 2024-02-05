import React, { useEffect, useState } from 'react';
import Api from './Api';
import BarChart from './BarChart'
import RadarChart from './RadarChart'
import CircleBarChart from './CircleBarChart'
import TinyLineChart from './TinyLineChart'
import CountBody from './CountBody'
import CustomLegend from './CustomLegend';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  

  useEffect(() => {
    const fetchDataForUser = async () => {
      try {

        const urls = [
          `http://localhost:3000/user/${userId}`,
          `http://localhost:3000/user/${userId}/activity`,
          `http://localhost:3000/user/${userId}/average-sessions`,
          `http://localhost:3000/user/${userId}/performance`,
        ];

        const requests = urls.map(url =>
          Api.fetchData(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
        );

        const results = await Promise.all(requests);
        const [userInfo, activityData, averageSessions, performance  ] = results;
        
        const combinedData = {
          userInfo,
          activityData,
          averageSessions,
          performance ,
        };

        setUserData(combinedData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataForUser();
  }, [userId]);

    return ( 
      
      <div className='ms-[4%] w-[96%]'>
       
        {userData && (
          <div className='absolute top-[9%] right-[911px]'>
            <h1 className='flex text-[48px]'>Bonjour&#x202F;<p className='text-[#FF0101] text-[48px]'>{userData.userInfo.data.userInfos.firstName}</p></h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          </div>
        )}
        {userData && (
          <div className='mt-[-9.5%] ml-[4.9%]' >
            <BarChart  data={userData.activityData.data} />
            <CustomLegend />
          </div>
        )} 

          {userData && (  
             <div><CountBody burned={userData.userInfo.data.keyData}/></div> 
             )}

        <div className='flex justify-between absolute top-[64%] right-[25.3%]  w-[66%] '>
          {userData && (
          <div className='order-3 max-h-[228px] max-w-[250px] bg-[#FBFBFB]'>
            <CircleBarChart
              score={userData.userInfo.data}
            />
           <div className='circle'></div>
          </div>
        )}

          {userData && (
            <div className='order-2 min-w-[365px] min-h-[250px] max-w-[250px]'>
            <RadarChart
              datauserone={userData.performance}
              kind={userData.performance.data.kind}
            />
          </div>
          )}
           {userData && (
          <div className='order-1 max-w-[250px]  max-h-[228px]'>
          <TinyLineChart sessions={userData.averageSessions.data.sessions} />
          </div>  
          )}
            </div> 
      </div>
    );
    };
    
    export default Dashboard;



