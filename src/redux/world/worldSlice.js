import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  worldData: {},
  isLoadingWorldData: true,
  errorLoadingWorldData: false,
};

export const getWorldData = createAsyncThunk(
  'world/getWorldData',
  async (_, thunkAPI) => {
    try {
      const url = 'https://population-2073.onrender.com';
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Something went wrong! ${error}`);
    }
  },
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
