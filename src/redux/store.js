import { configureStore } from '@reduxjs/toolkit';
import worldSlice from './world/worldSlice';
import regionSlice from './region/regionSlice';

const store = configureStore({
  reducer: {
    world: worldSlice,
    region: regionSlice,
  },
});

export default store;
