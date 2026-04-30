import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import uiReducer from './slices/uiSlice';
import keywordReducer from './slices/keywordSlice';
import budgetReducer from './slices/budgetSlice';
import analyticsReducer from './slices/analyticsSlice';
import alertReducer from './slices/alertSlice';
import uploadReducer from './slices/uploadSlice';
import campaignReducer from './slices/campaignSlice';
import adminReducer from './slices/adminSlice';
import userAccessReducer from './slices/userAccessSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    keywords: keywordReducer,
    budget: budgetReducer,
    analytics: analyticsReducer,
    alerts: alertReducer,
    upload: uploadReducer,
    campaigns: campaignReducer,
    admin: adminReducer,
    userAccess: userAccessReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
