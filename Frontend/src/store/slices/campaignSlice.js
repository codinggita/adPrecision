import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  campaigns: [],
  loading: false,
  error: null,
};

const campaignSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    setCampaigns: (state, action) => {
      state.campaigns = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  },
});

export const { setCampaigns, setLoading, setError } = campaignSlice.actions;
export default campaignSlice.reducer;
