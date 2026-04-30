import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alerts: [
    { 
      id: 1, 
      title: 'Budget Limit Reached', 
      description: 'Campaign Enterprise_Q3 has hit its daily spend limit of $5,000. Ads are currently paused.',
      type: 'CRITICAL',
      timestamp: '2m ago',
      read: false,
      actionLabel: 'Increase Limit'
    },
    { 
      id: 2, 
      title: 'New Keyword Opportunity', 
      description: 'We found 12 high-performing long-tail keywords relevant to SaaS Growth campaign.',
      type: 'INSIGHT',
      timestamp: '14m ago',
      read: false,
      actionLabel: 'Apply All'
    },
    { 
      id: 3, 
      title: 'CTR Dip Detected', 
      description: 'Click-through rate for "Social_Display" dropped by 1.2% in the last 24 hours.',
      type: 'MONITOR',
      timestamp: '2h ago',
      read: true,
      actionLabel: 'View Details'
    },
    { 
      id: 4, 
      title: 'Creative Approval', 
      description: 'Ad set "Video_Bumper_V2" has been approved by the compliance team.',
      type: 'WORKFLOW',
      timestamp: '5h ago',
      read: true,
      actionLabel: 'Activate Now'
    },
  ],
  activities: [
    { id: 1, title: 'Campaign "Summer_24" optimized', timestamp: '2 hours ago', color: 'bg-orange-500' },
    { id: 2, title: 'Weekly report generated', timestamp: '6 hours ago', color: 'bg-indigo-200' },
    { id: 3, title: 'System backup complete', timestamp: '1 day ago', color: 'bg-slate-200' },
  ],
  filter: 'ALL',
};

const alertSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    markAsRead: (state, action) => {
      const alert = state.alerts.find(a => a.id === action.payload);
      if (alert) alert.read = true;
    },
    markAllAsRead: (state) => {
      state.alerts.forEach(a => a.read = true);
    },
    addAlert: (state, action) => {
      state.alerts.unshift(action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
});

export const { markAsRead, markAllAsRead, addAlert, setFilter } = alertSlice.actions;
export default alertSlice.reducer;
