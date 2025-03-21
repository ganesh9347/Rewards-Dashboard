import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch users from mock API
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    
    // Assign mock points to each user
    return users.map(user => ({
        ...user,
        points: Math.floor(Math.random() * 1000)  // Random points (0-1000)
    }));
});

const usersSlice = createSlice({
    name: 'users',
    initialState: { list: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default usersSlice.reducer;
