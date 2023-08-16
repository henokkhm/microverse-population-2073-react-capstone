import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import worldData from '../../data/world.json';

const initialState = {
  worldData: {},
  isLoadingWorldData: true,
  errorLoadingWorldData: false,
};

export const getWorldData = createAsyncThunk(
  'world/getWorldData',
  async () => new Promise((resolve) => {
    resolve(worldData);
  }),
);

const worldSlice = createSlice({
  name: 'world',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWorldData.pending, (state) => {
        state.isLoadingWorldData = true;
      })
      .addCase(getWorldData.fulfilled, (state, action) => {
        state.isLoadingWorldData = false;
        state.worldData = action.payload;
        state.errorLoadingWorldData = false;
      })
      .addCase(getWorldData.rejected, (state) => {
        state.isLoadingWorldData = false;
        state.errorLoadingWorldData = true;
      });
  },
});

export default worldSlice.reducer;
