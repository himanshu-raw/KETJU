import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SideNavBar = ({ role: propRole = 'farmer', address: propAddress }) => {
  const location = useLocation();
  const { user } = useAuth();
  
  const currentPath = location.pathname;
  const currentRole = user?.role || propRole;
  const currentAddress = user?.address || propAddress || '0x4f2c...8b1d';

  const isActive = (path) => currentPath === path;

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 z-40 bg-[#fcf8ff] dark:bg-[#1b1a25] flex flex-col py-8 px-4 gap-2">
      <nav className="flex-1 flex flex-col gap-1">
        <Link 
          to={"/" + (currentRole === 'admin' ? 'admin' : currentRole)}
          className={"px-4 py-3 flex items-center gap-3 rounded-full transition-all active:translate-x-1 " + (isActive("/" + (currentRole === 'admin' ? 'admin' : currentRole)) ? "bg-[#0254ec] text-white shadow-lg shadow-[#0254ec]/20" : "text-[#434655] dark:text-[#c3c5d8] hover:bg-[#f0ecfb] dark:hover:bg-[#2b2938]")}
        >
          <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
          <span className="font-medium text-sm">Dashboard</span>
        </Link>
        
        {currentRole !== 'admin' && (
          <>
            <Link 
              to="#"
              className="text-[#434655] dark:text-[#c3c5d8] px-4 py-3 flex items-center gap-3 hover:bg-[#f0ecfb] dark:hover:bg-[#2b2938] rounded-full transition-all active:translate-x-1"
            >
              <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
              <span className="font-medium text-sm">My Products</span>
            </Link>
            <Link 
              to="/register"
              className={"px-4 py-3 flex items-center gap-3 rounded-full transition-all active:translate-x-1 " + (isActive('/register') ? "bg-[#0254ec] text-white shadow-lg shadow-[#0254ec]/20" : "text-[#434655] dark:text-[#c3c5d8] hover:bg-[#f0ecfb] dark:hover:bg-[#2b2938]")}
            >
              <span className="material-symbols-outlined" data-icon="add_box">add_box</span>
              <span className="font-medium text-sm">Register Product</span>
            </Link>
            <Link 
              to="/log-event"
              className={"px-4 py-3 flex items-center gap-3 rounded-full transition-all active:translate-x-1 " + (isActive('/log-event') ? "bg-[#0254ec] text-white shadow-lg shadow-[#0254ec]/20" : "text-[#434655] dark:text-[#c3c5d8] hover:bg-[#f0ecfb] dark:hover:bg-[#2b2938]")}
            >
              <span className="material-symbols-outlined" data-icon="history_edu">history_edu</span>
              <span className="font-medium text-sm">Event Log</span>
            </Link>
            <Link 
              to="#"
              className="text-[#434655] dark:text-[#c3c5d8] px-4 py-3 flex items-center gap-3 hover:bg-[#f0ecfb] dark:hover:bg-[#2b2938] rounded-full transition-all active:translate-x-1"
            >
              <span className="material-symbols-outlined" data-icon="verified">verified</span>
              <span className="font-medium text-sm">My NFT Certificates</span>
            </Link>
          </>
        )}
        
        <Link 
          to="/settings"
          className="text-[#434655] dark:text-[#c3c5d8] px-4 py-3 flex items-center gap-3 hover:bg-[#f0ecfb] dark:hover:bg-[#2b2938] rounded-full transition-all active:translate-x-1"
        >
          <span className="material-symbols-outlined" data-icon="settings">settings</span>
          <span className="font-medium text-sm">Settings</span>
        </Link>
      </nav>
      
      {currentRole !== 'admin' && (
        <button className="bg-primary text-on-primary py-3 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 mb-4">
            Verify Batch
        </button>
      )}
      
      <div className="mt-auto p-4 bg-inverse-surface rounded-2xl">
        <p className="text-[10px] uppercase font-bold tracking-widest text-on-primary-container/60 mb-1">Connected Wallet</p>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <code className="text-xs text-on-primary font-mono">{currentAddress}</code>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-xs text-primary-fixed" data-icon="account_balance_wallet">account_balance_wallet</span>
          <span className="text-[11px] text-white/80">Polygon Mumbai</span>
        </div>
        <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-1">
          <span className="material-symbols-outlined text-xs text-emerald-400">verified_user</span>
          <span className="text-[10px] text-emerald-400 font-bold uppercase">{currentRole} role verified</span>
        </div>
      </div>
    </aside>
  );
};

export default SideNavBar;
