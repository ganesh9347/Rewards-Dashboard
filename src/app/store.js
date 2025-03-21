import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import activitiesReducer from '../features/activities/activitiesSlice';
import rewardsReducer from '../features/rewards/rewardsSlice';

 const store = configureStore({
    reducer: {
        users: usersReducer,
        activities: activitiesReducer,
        rewards: rewardsReducer,
    },
});


export default store