import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterProduct from './pages/RegisterProduct';
import FarmerDashboard from './pages/FarmerDashboard';
import ProcessorDashboard from './pages/ProcessorDashboard';
import DistributorDashboard from './pages/DistributorDashboard';
import RetailerDashboard from './pages/RetailerDashboard';
import AdminPanel from './pages/AdminPanel';
import VerifyProduct from './pages/VerifyProduct';
import LogEvent from './pages/LogEvent';
import QRScanner from './pages/QRScanner';

import './App.css'

function App() {
  const navigate = useNavigate();

  const handleGlobalClick = (e) => {
    const a = e.target.closest('a');
    if (a) {
      const href = a.getAttribute('href');
      // Only intercept internal links that start with /
      if (href && href.startsWith('/')) {
        e.preventDefault();
        navigate(href);
      }
    }
  };

  return (
    <div 
      className="text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen bg-surface"
      onClick={handleGlobalClick}
    >
      <AuthProvider>
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<VerifyProduct />} />
            <Route path="/scanner" element={<QRScanner />} />
            
            {/* Protected Routes */}
            <Route path="/register" element={
              <ProtectedRoute allowedRoles={['farmer']}>
                <RegisterProduct />
              </ProtectedRoute>
            } />
            <Route path="/log-event" element={
              <ProtectedRoute allowedRoles={['processor', 'distributor', 'retailer']}>
                <LogEvent />
              </ProtectedRoute>
            } />
            
            {/* Role-Specific Dashboards */}
            <Route path="/farmer" element={
              <ProtectedRoute allowedRoles={['farmer']}>
                <FarmerDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminPanel />
              </ProtectedRoute>
            } />
            {/* Placeholders for new dashboards */}
            <Route path="/processor" element={
              <ProtectedRoute allowedRoles={['processor']}>
                <ProcessorDashboard />
              </ProtectedRoute>
            } />
            <Route path="/distributor" element={
              <ProtectedRoute allowedRoles={['distributor']}>
                <DistributorDashboard />
              </ProtectedRoute>
            } />
            <Route path="/retailer" element={
              <ProtectedRoute allowedRoles={['retailer']}>
                <RetailerDashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
      </AuthProvider>
    </div>
  )
}

export default App
