import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/AuthLayout';

// 1. Import all the actual page components we built
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Holder from '../pages/Holder';
import Issuer from '../pages/Issuer';
import Verifier from '../pages/Verifier';
import SecurityCenter from '../pages/SecurityCenter';
import AuditLogs from '../pages/AuditLogs';
import Analytics from '../pages/Analytics';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';

const AppRoutes = ({ isAuthenticated, setIsAuthenticated, darkMode, setDarkMode }) => {
  return (
    <Routes>
      {/* Public Login Route */}
      <Route element={<AuthLayout />}>
        <Route 
          path="/login" 
          element={<Login setIsAuthenticated={setIsAuthenticated} />} 
        />
      </Route>

      {/* Protected Dashboard Routes */}
      <Route
        element={
          isAuthenticated ? (
            <DashboardLayout 
              setIsAuthenticated={setIsAuthenticated} 
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      >
        {/* 2. Connect the URLs to the actual imported Pages */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/holder" element={<Holder />} />
        <Route path="/issuer" element={<Issuer />} />
        <Route path="/verifier" element={<Verifier />} />
        <Route path="/security" element={<SecurityCenter />} />
        <Route path="/audit" element={<AuditLogs />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;