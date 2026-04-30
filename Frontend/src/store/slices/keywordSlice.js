import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  keywords: [
    { id: 'KW-49210', name: 'cloud infrastructure', status: 'HIGH PERFORMANCE', clicks: 12402, cost: 1204.00, ctr: 4.2 },
    { id: 'KW-49211', name: 'enterprise security', status: 'MEDIUM', clicks: 8110, cost: 954.20, ctr: 2.1 },
    { id: 'KW-49215', name: 'managed services', status: 'LOW REACH', clicks: 1204, cost: 42.00, ctr: 0.4 },
    { id: 'KW-49220', name: 'data analytics platform', status: 'HIGH PERFORMANCE', clicks: 15930, cost: 2440.50, ctr: 5.8 },
  ],
  suggestedKeywords: [
    { name: 'serverless monitoring', difficulty: 'Moderate', growth: 12 },
    { name: 'kubernetes observability', difficulty: 'High', growth: 28 },
    { name: 'cloud cost management', difficulty: 'Low', growth: 15 },
  ],
  competitorVolume: [
    { name: 'CloudSphere', spend: 4200 },
    { name: 'NexusData', spend: 2800 },
  ],
  loading: false,
  error: null,
};

const keywordSlice = createSlice({
  name: 'keywords',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addKeyword: (state, action) => {
      state.keywords.push(action.payload);
    },
    removeSuggestion: (state, action) => {
      state.suggestedKeywords = state.suggestedKeywords.filter(k => k.name !== action.payload);
    }
  },
});

export const { setLoading, addKeyword, removeSuggestion } = keywordSlice.actions;
export default keywordSlice.reducer;
