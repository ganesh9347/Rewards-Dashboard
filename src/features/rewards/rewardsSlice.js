import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock API call to fetch rewards
export const fetchRewards = createAsyncThunk('rewards/fetchRewards', async () => {
    const response = await fetch('https://fakestoreapi.com/products'); // Mock API
    const data = await response.json();

    return data.slice(0, 8).map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image,
        points: Math.floor(Math.random() * 500) + 100, // Random point cost (100-600)
    }));
});

const rewardsSlice = createSlice({
    name: 'rewards',
    initialState: { list: [], status: 'idle', error: null, cart: [] },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((reward) => reward.id !== action.payload);
        },
        clearCart: (state) => {
            state.cart = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRewards.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRewards.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload;
            })
            .addCase(fetchRewards.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { addToCart, removeFromCart, clearCart } = rewardsSlice.actions;
export default rewardsSlice.reducer;
