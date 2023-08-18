import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  regionData: {},
  isLoadingRegionData: true,
  errorLoadingRegionData: false,
};

export const getRegionData = createAsyncThunk(
  'regions/getRegionData',
  async (regionId, thunkAPI) => {
    try {
      const url = `https://population-2073.onrender.com/${regionId}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Something went wrong! ${error}`);
    }
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
