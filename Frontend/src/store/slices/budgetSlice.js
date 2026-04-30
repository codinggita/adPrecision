import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allocations: [
    { id: 1, name: 'Summer Launch - Global', platform: 'Search & Display • Google Ads', budget: 12400, trend: '+15%', status: 'up' },
    { id: 2, name: 'Retargeting Flow - US/CA', platform: 'Social • Meta Business', budget: 8900, trend: '-4%', status: 'down' },
    { id: 3, name: 'Influencer Program', platform: 'Partnerships • Direct', budget: 18200, trend: 'Stable', status: 'stable' },
  ],
  totalBudget: 45000,
  allocated: 82,
  loading: false,
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    updateAllocation: (state, action) => {
      const { id, budget } = action.payload;
      const allocation = state.allocations.find(a => a.id === id);
      if (allocation) {
        allocation.budget = budget;
      }
      // Recalculate allocated percentage (simulated)
      const totalAllocated = state.allocations.reduce((acc, curr) => acc + curr.budget, 0);
      state.allocated = Math.round((totalAllocated / state.totalBudget) * 100);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const { updateAllocation, setLoading } = budgetSlice.actions;
export default budgetSlice.reducer;
