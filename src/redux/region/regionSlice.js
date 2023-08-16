import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import regionsList from '../../data/regions.json';

const initialState = {
  regionData: {},
  isLoadingRegionData: true,
  errorLoadingRegionData: false,
};

export const getRegionData = createAsyncThunk(
  'regions/getRegionData',
  async (regionId) => {
    const regionData = regionsList.find(
      (regionData) => regionData.regionId === regionId,
    );
    return new Promise((resolve) => {
      resolve(regionData);
    });
  },
);

const regionSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRegionData.pending, (state) => {
        state.isLoadingRegionData = true;
      })
      .addCase(getRegionData.fulfilled, (state, action) => {
        state.isLoadingRegionData = false;
        state.regionData = action.payload;
        state.errorLoadingRegionData = false;
      })
      .addCase(getRegionData.rejected, (state) => {
        state.isLoadingRegionData = false;
        state.errorLoadingRegionData = true;
      });
  },
});

export default regionSlice.reducer;
