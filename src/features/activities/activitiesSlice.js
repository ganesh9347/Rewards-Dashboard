import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock API to fetch activities
export const fetchActivities = createAsyncThunk('activities/fetchActivities', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const activities = await response.json();

    // Assign random points and timestamps
    return activities.slice(0, 10).map(activity => ({
        id: activity.id,
        title: activity.title,
        userId: activity.userId,
        type: getRandomActivityType(),
        points: getRandomPoints(),
        timestamp: new Date().toISOString(),
    }));
});

// Helper function to generate random activity types
const getRandomActivityType = () => {
    const types = ['Task Completion', 'Daily Login', 'Content Creation', 'Community Engagement'];
    return types[Math.floor(Math.random() * types.length)];
};

// Helper function to assign random points based on activity type
const getRandomPoints = () => {
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5; // Random between 5-50
};

const activitiesSlice = createSlice({
    name: 'activities',
    initialState: { list: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchActivities.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchActivities.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload;
            })
            .addCase(fetchActivities.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default activitiesSlice.reducer;
