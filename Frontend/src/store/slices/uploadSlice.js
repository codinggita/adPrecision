import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uploadedFiles: [
    { 
      id: 1, 
      name: 'lifestyle_vibe_edit.jpg', 
      status: 'READY', 
      size: '2.4 MB', 
      resolution: '1080 x 1350 px',
      timestamp: 'Uploaded 2m ago',
      thumbnail: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop'
    },
    { 
      id: 2, 
      name: 'product_showcase_final.mp4', 
      status: 'READY', 
      size: '45.8 MB', 
      resolution: '1920 x 1080 px',
      timestamp: 'Uploaded 5m ago',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop'
    },
  ],
  uploadQueue: [],
  history: [
    {
      id: 3,
      name: 'raw_footage_4k.raw',
      status: 'REJECTED',
      error: 'Unsupported file format. Please convert to MP4 or MOV before uploading.',
    }
  ],
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    addToQueue: (state, action) => {
      state.uploadQueue.push(action.payload);
    },
    updateQueueProgress: (state, action) => {
        const { id, progress } = action.payload;
        const file = state.uploadQueue.find(f => f.id === id);
        if (file) file.progress = progress;
    },
    finishUpload: (state, action) => {
        state.uploadQueue = state.uploadQueue.filter(f => f.id !== action.payload.id);
        state.uploadedFiles.unshift(action.payload);
    },
    removeFromHistory: (state, action) => {
        state.history = state.history.filter(f => f.id !== action.payload);
    },
    deleteUploadedFile: (state, action) => {
        state.uploadedFiles = state.uploadedFiles.filter(f => f.id !== action.payload);
    }
  },
});

export const { addToQueue, updateQueueProgress, finishUpload, removeFromHistory, deleteUploadedFile } = uploadSlice.actions;
export default uploadSlice.reducer;
