// src/packagesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPackages = createAsyncThunk(
  'packages/fetchPackages',
  async ({ page, searchTerm }) => {
    const response = await axios.get(`http://localhost:8000/admin/packages?page=${page}&search=${searchTerm}`);
    return response.data;
  }
);

const packagesSlice = createSlice({
  name: 'packages',
  initialState: {
    packages: [],
    totalPages: 1,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPackages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.packages = action.payload.packages;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchPackages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default packagesSlice.reducer;
