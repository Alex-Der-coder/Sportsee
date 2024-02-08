import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from './data.tsx';


const currentUrl = window.location.href;

const urlSegments = currentUrl.split('/');

const lastSegment = urlSegments[urlSegments.length - 1];

const userId = /^\d+$/.test(lastSegment) ? parseInt(lastSegment) : null;

export function getUserData() {
 
    const userInfo = USER_MAIN_DATA.find(user => user.id === userId);

    const activityData = USER_ACTIVITY.find(user => user.userId === userId);

    const averageSessions = USER_AVERAGE_SESSIONS.find(user => user.userId === userId);

    const performance = USER_PERFORMANCE.find(user => user.userId === userId);

    return {
        userInfo,
        activityData,
        averageSessions,
        performance
    };

}


