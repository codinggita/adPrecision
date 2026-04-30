import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
      { id: 'usr_01', name: 'Elena Rodriguez', email: 'elena@adprecision.ai', role: 'ADMIN', mfaEnabled: true, lastSession: '10m ago (192.168.1.1)' },
      { id: 'usr_02', name: 'Marcus Thorne', email: 'marcus@adprecision.ai', role: 'EDITOR', mfaEnabled: false, lastSession: '2h ago (10.0.0.15)' },
      { id: 'usr_03', name: 'Sarah Jenkins', email: 'sarah@adprecision.ai', role: 'VIEWER', mfaEnabled: true, lastSession: 'Active (172.16.0.4)' },
  ],
};

const userAccessSlice = createSlice({
  name: 'userAccess',
  initialState,
  reducers: {
      toggleMFA: (state, action) => {
          const user = state.users.find(u => u.id === action.payload);
          if (user) {
              user.mfaEnabled = !user.mfaEnabled;
          }
      },
      inviteUser: (state, action) => {
          // Mock action for invitation system
          state.users.push({
              id: `usr_${Date.now()}`,
              name: action.payload.email.split('@')[0],
              email: action.payload.email,
              role: action.payload.role,
              mfaEnabled: false,
              lastSession: 'Pending Invite'
          });
      }
  },
});

export const { toggleMFA, inviteUser } = userAccessSlice.actions;
export default userAccessSlice.reducer;
