import { createSlice } from '@reduxjs/toolkit';

const loadPreferences = () => {
    try {
        const stored = localStorage.getItem('adminPreferences');
        return stored ? JSON.parse(stored) : null;
    } catch {
        return null; // Ignore access/permission issues
    }
};

const defaultServices = {
    publicApi: true,
    webhookListener: false,
    legacyAuth: true,
};

const initialState = {
  metrics: {
      cpu: 42,
      memory: 12.4, // GB
      latency: 48,  // ms
      network: 2.4, // Gbps
      uptime: 99.98
  },
  services: loadPreferences() || defaultServices,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    toggleService: (state, action) => {
        const key = action.payload;
        state.services[key] = !state.services[key];
        localStorage.setItem('adminPreferences', JSON.stringify(state.services));
    },
    updateMetrics: (state, action) => {
        state.metrics = { ...state.metrics, ...action.payload };
    }
  },
});

export const { toggleService, updateMetrics } = adminSlice.actions;
export default adminSlice.reducer;
