import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes';
import api from './services/api';
import { useDispatch } from 'react-redux';
import { clearAuth } from './store/slices/authSlice';
import masterBg from './assets/master-brand-bg.png';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Global API interceptor to handle unauthorized access
    const interceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          dispatch(clearAuth());
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, [dispatch]);

  return (
    <div className="relative min-h-screen">
      {/* Global Brand Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.03] select-none">
          <img src={masterBg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10">
        <Toaster position="top-right" reverseOrder={false} />
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
