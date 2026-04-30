import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ctrTrends: [
    { name: 'Week 1', facebook: 4.2, googleAds: 3.8 },
    { name: 'Week 2', facebook: 3.8, googleAds: 4.5 },
    { name: 'Week 3', facebook: 5.1, googleAds: 4.1 },
    { name: 'Week 4', facebook: 4.6, googleAds: 5.2 },
    { name: 'Week 5', facebook: 6.2, googleAds: 4.8 },
    { name: 'Week 6', facebook: 5.5, googleAds: 4.3 },
  ],
  roiBreakdown: [
    { name: 'Search Ads', value: 4.2, color: '#1C3A3A' },
    { name: 'Display Network', value: 2.1, color: '#D97706' },
    { name: 'Retargeting', value: 5.8, color: '#064E3B' },
  ],
  cpcDistribution: [
    { id: 1, name: 'Summer Blast 2023', status: 'Active', segments: 12, avgCpc: 1.42, efficiency: 'HIGH', progress: 85, trend: '+12.4%', trendStatus: 'up' },
    { id: 2, name: 'Direct Response Alpha', status: 'Paused', segments: 4, avgCpc: 2.88, efficiency: 'MED', progress: 55, trend: '-4.1%', trendStatus: 'down' },
    { id: 3, name: 'Brand Awareness Beta', status: 'Active', segments: 18, avgCpc: 0.94, efficiency: 'ELITE', progress: 95, trend: '+18.2%', trendStatus: 'up' },
  ],
  activeTab: 'Campaign Groups',
  loading: false,
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const { setActiveTab, setLoading } = analyticsSlice.actions;
export default analyticsSlice.reducer;
