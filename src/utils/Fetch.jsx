// ApiFunctions.js

import Api from './Api';


const fetchData = async (userId) => {
  try {
    const urls = [
      `http://localhost:3000/user/${userId}`,
      `http://localhost:3000/user/${userId}/activity`,
      `http://localhost:3000/user/${userId}/average-sessions`,
      `http://localhost:3000/user/${userId}/performance`,
    ];

    const requests = urls.map((url) =>
      Api.fetchData(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );

    const results = await Promise.all(requests);
    const [userInfo, activityData, averageSessions, performance] = results;

    // eslint-disable-next-line
    const combinedData = {
      userInfo,
      activityData,
      averageSessions,
      performance,
    };

    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default fetchData;
