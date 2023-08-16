import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import regionsData from '../../data/regions.json';

const initialState = {
  regionsData: {},
  isLoadingRegions: true,
  errorLoadingRegions: false,
};

export const getRegions = createAsyncThunk(
  'regions/getRegions',
  async () => new Promise((resolve) => {
    resolve(regionsData);
  }),
);

const regionsSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRegions.pending, (state) => {
        state.isLoadingRegions = true;
      })
      .addCase(getRegions.fulfilled, (state, action) => {
        state.isLoadingRegions = false;
        state.regionsData = action.payload;
        state.errorLoadingRegions = false;
      })
      .addCase(getRegions.rejected, (state) => {
        state.isLoadingRegions = false;
        state.errorLoadingRegions = true;
      });
  },
});

export default regionsSlice.reducer;
