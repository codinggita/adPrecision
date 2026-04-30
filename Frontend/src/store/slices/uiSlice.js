import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  notifications: [],
  sidebarOpen: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
    },
    addNotification: (state, action) => {
      state.notifications.push({
        id: Date.now(),
        ...action.payload,
      });
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(n => n.id !== action.payload);
    },
    setSidebar: (state, action) => {
      state.sidebarOpen = action.payload;
    },
  },
});

export const { toggleTheme, addNotification, removeNotification, setSidebar } = uiSlice.actions;
export default uiSlice.reducer;
