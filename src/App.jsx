import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AppProvider } from './context/AppContext';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RegisterProduct from './pages/RegisterProduct.tsx';
import FarmerDashboard from './pages/FarmerDashboard.tsx';
import ProcessorDashboard from './pages/ProcessorDashboard.tsx';
import DistributorDashboard from './pages/DistributorDashboard.tsx';
import RetailerDashboard from './pages/RetailerDashboard.tsx';
import AdminPanel from './pages/AdminPanel';
import VerifyProduct from './pages/VerifyProduct.tsx';
import LogEvent from './pages/LogEvent.tsx';
import QRScanner from './pages/QRScanner.tsx';

import './App.css';

function RoleDashboard() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  switch (user.role) {
    case 'farmer':      return <FarmerDashboard />;
    case 'processor':   return <ProcessorDashboard />;
    case 'distributor': return <DistributorDashboard />;
    case 'retailer':    return <RetailerDashboard />;
    case 'admin':       return <AdminPanel />;
    default:            return <Navigate to="/login" replace />;
  }
}

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <div className="text-on-surface min-h-screen bg-surface">
          <Routes>
            {/* Public */}
            <Route path="/"        element={<Home />} />
            <Route path="/login"   element={<Login />} />
            <Route path="/signup"  element={<Signup />} />
            <Route path="/verify"  element={<VerifyProduct />} />
            <Route path="/scanner" element={<QRScanner />} />

            {/* Protected — role-dispatched */}
            <Route path="/dashboard" element={<ProtectedRoute><RoleDashboard /></ProtectedRoute>} />

            <Route path="/farmer"      element={<ProtectedRoute allowedRoles={['farmer']}><FarmerDashboard /></ProtectedRoute>} />
            <Route path="/processor"   element={<ProtectedRoute allowedRoles={['processor']}><ProcessorDashboard /></ProtectedRoute>} />
            <Route path="/distributor" element={<ProtectedRoute allowedRoles={['distributor']}><DistributorDashboard /></ProtectedRoute>} />
            <Route path="/retailer"    element={<ProtectedRoute allowedRoles={['retailer']}><RetailerDashboard /></ProtectedRoute>} />
            <Route path="/admin"       element={<ProtectedRoute allowedRoles={['admin']}><AdminPanel /></ProtectedRoute>} />

            <Route path="/register"  element={<ProtectedRoute><RegisterProduct /></ProtectedRoute>} />
            <Route path="/log-event" element={<ProtectedRoute><LogEvent /></ProtectedRoute>} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
