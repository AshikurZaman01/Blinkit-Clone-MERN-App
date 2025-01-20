import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

const store = configureStore({
    reducer: {
        User: userReducer,
    }
})

export default store;