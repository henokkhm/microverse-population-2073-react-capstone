import { configureStore } from '@reduxjs/toolkit';
import worldSlice from './world/worldSlice';

const store = configureStore({
  reducer: {
    world: worldSlice,
  },
});

export default store;
