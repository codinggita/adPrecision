import { useSelector, useDispatch } from 'react-redux';
import { setAuth, clearAuth, setLoading, setError } from '../store/slices/authSlice';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useAuth = () => {
  const { user, token, isAuthenticated, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (credentials) => {
    dispatch(setLoading());
    try {
      // In a real app, this would be an API call
      // const response = await api.post('/auth/login', credentials);
      // const { token, user } = response.data;
      
      // Simulating successful login for demonstration
      const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
      dispatch(setAuth({ token: mockToken }));
      toast.success('Successfully signed in!');
      navigate('/dashboard');
    } catch (err) {
      dispatch(setError(err.message));
      toast.error('Login failed. Please check your credentials.');
    }
  };

  const logout = () => {
    dispatch(clearAuth());
    toast.success('Signed out successfully.');
    navigate('/');
  };

  return { user, token, isAuthenticated, loading, error, login, logout };
};
