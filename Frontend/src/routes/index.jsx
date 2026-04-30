import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import { Box, CircularProgress } from '@mui/material';

// Lazy loaded pages
const Home = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const SignupPage = lazy(() => import('../pages/SignupPage'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const CampaignsPage = lazy(() => import('../pages/CampaignsPage'));
const KeywordOptimizationPage = lazy(() => import('../pages/KeywordOptimizationPage'));
const BudgetOptimizationPage = lazy(() => import('../pages/BudgetOptimizationPage'));
const DeepAnalyticsPage = lazy(() => import('../pages/DeepAnalyticsPage'));
const SettingsPage = lazy(() => import('../pages/SettingsPage'));
const AlertCenterPage = lazy(() => import('../pages/AlertCenterPage'));
const UploadPage = lazy(() => import('../pages/UploadPage'));
const DashboardStatePage = lazy(() => import('../pages/DashboardStatePage'));
const AdminPage = lazy(() => import('../pages/AdminPage'));

const LoadingScreen = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <CircularProgress color="primary" size={60} thickness={4} />
  </Box>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Dashboard Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/keywords" element={<KeywordOptimizationPage />} />
          <Route path="/budget" element={<BudgetOptimizationPage />} />
          <Route path="/analytics" element={<DeepAnalyticsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/notifications" element={<AlertCenterPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/dashboard-state" element={<DashboardStatePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
