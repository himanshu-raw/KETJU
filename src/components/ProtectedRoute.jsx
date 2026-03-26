import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // Detailed loading state matching KETJU aesthetics
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <p className="text-on-surface-variant font-medium">Verifying Credentials...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were trying to go to
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // User role not authorized for this route
    // Could redirect to a "Not Authorized" page, but for now we'll route to home or their designated dashboard
    const roleRoutes = {
      farmer: '/farmer',
      processor: '/processor',
      distributor: '/distributor',
      retailer: '/retailer',
      admin: '/admin'
    };
    return <Navigate to={roleRoutes[user.role] || '/'} replace />;
  }

  return children;
};

export default ProtectedRoute;
