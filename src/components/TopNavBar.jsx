import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const TopNavBar = ({ role: propRole = 'guest', address: propAddress }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleDisconnect = async () => {
    await logout();
    navigate('/');
  };

  const currentRole = propRole === 'public' || propRole === 'verify' ? propRole : (user?.role || propRole);
  const currentAddress = user?.address || propAddress || '0x71C...4e21';

  const getRoleConfig = () => {
    switch (currentRole) {
      case 'admin':
        return {
          centerLinks: (
            <>
              <Link to="/admin" className="text-slate-500 hover:text-slate-900 transition-colors duration-200">Dashboard</Link>
              <span className="text-slate-500 hover:text-slate-900 transition-colors duration-200 cursor-pointer">Governance</span>
              <span className="text-slate-500 hover:text-slate-900 transition-colors duration-200 cursor-pointer">Audit Logs</span>
            </>
          ),
          rightActions: (
            <>
              <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-error-container text-on-error-container rounded-full text-xs font-bold">
                <span className="material-symbols-outlined text-sm">lock</span>
                Admin
              </div>
              <button 
                onClick={handleDisconnect}
                className="px-4 py-1.5 border-1.5 border-primary-container text-primary-container rounded-full text-sm font-semibold hover:bg-primary-container/5 transition-all"
              >
                Disconnect
              </button>
            </>
          )
        };
      case 'farmer':
        return {
          centerLinks: (
            <>
              <Link to="/farmer" className="text-slate-500 hover:text-slate-900 transition-colors flex items-center">Dashboard</Link>
              <span className="text-slate-500 hover:text-slate-900 transition-colors flex items-center cursor-pointer">My Products</span>
              <Link to="/register" className="text-slate-500 hover:text-slate-900 transition-colors flex items-center">Add Product</Link>
              <Link to="/log-event" className="text-slate-500 hover:text-slate-900 transition-colors flex items-center">Log Event</Link>
            </>
          ),
          rightActions: (
            <>
              <div className="hidden lg:flex items-center bg-[#16A34A]/10 text-[#16A34A] px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wide uppercase">
                  Farmer Role
              </div>
              <code className="hidden lg:block text-xs font-medium text-on-surface-variant bg-surface-container-low px-2 py-1.5 rounded border border-outline-variant/20">{currentAddress}</code>
              <button 
                onClick={handleDisconnect}
                className="text-sm font-semibold text-primary border border-primary px-4 py-1.5 rounded-full hover:bg-primary-container/5 transition-all"
              >
                Disconnect
              </button>
            </>
          )
        };
      case 'processor':
        return {
          centerLinks: (
            <>
              <Link to="/processor" className="text-slate-500 hover:text-slate-900 transition-colors duration-200">Dashboard</Link>
              <span className="text-slate-500 hover:text-slate-900 transition-colors flex items-center cursor-pointer">My Products</span>
              <Link to="/register" className="text-slate-500 hover:text-slate-900 transition-colors duration-200">Add Product</Link>
              <Link to="/log-event" className="text-slate-500 hover:text-slate-900 transition-colors duration-200">Log Event</Link>
            </>
          ),
          rightActions: (
            <>
              <div className="hidden lg:flex bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-[10px] font-bold items-center border border-amber-200 uppercase">
                  Processor
              </div>
              <code className="hidden lg:block bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-full text-[10px] font-mono border border-outline-variant/20">{currentAddress}</code>
              <button 
                onClick={handleDisconnect}
                className="bg-primary-container text-on-primary px-6 py-1.5 rounded-full text-sm font-semibold hover:bg-primary transition-all shadow-sm"
              >
                Disconnect
              </button>
            </>
          )
        };
      case 'distributor':
      case 'retailer':
        return {
          centerLinks: (
             <>
               <Link to={`/${currentRole}`} className="text-slate-500 hover:text-slate-900 transition-colors duration-200">Dashboard</Link>
               <span className="text-slate-500 hover:text-slate-900 transition-colors flex items-center cursor-pointer">My Products</span>
               <Link to="/log-event" className="text-slate-500 hover:text-slate-900 transition-colors duration-200">Log Event</Link>
             </>
          ),
           rightActions: (
            <>
              <div className="hidden lg:flex bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-[10px] font-bold items-center border border-blue-200 uppercase">
                  {currentRole}
              </div>
              <code className="hidden lg:block bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-full text-[10px] font-mono border border-outline-variant/20">{currentAddress}</code>
              <button 
                onClick={handleDisconnect}
                className="text-sm font-semibold text-primary border border-primary px-4 py-1.5 rounded-full hover:bg-primary-container/5 transition-all"
              >
                Disconnect
              </button>
            </>
          )
        };
      case 'verify':
        return {
          centerLinks: (
            <>
              <Link to="/verify" className="text-slate-500 hover:text-slate-900 transition-colors">Trace</Link>
              <span className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">Provenance</span>
              <span className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">Insight</span>
              <span className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">Network</span>
            </>
          ),
          rightActions: (
            <button 
              onClick={() => window.location.reload()}
              className="bg-white border-1.5 border-primary-container text-primary-container px-5 py-2 rounded-full text-sm font-semibold hover:bg-surface-container transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">search</span>
              Verify Another Product
            </button>
          )
        }
      case 'public':
      default:
        return {
          centerLinks: (
            <>
              <a href="#how-it-works" className="text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 pb-1 font-sans text-sm tracking-tight">How It Works</a>
              <Link to="/verify" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-sans text-sm font-medium tracking-tight transition-colors">Verify Product</Link>
              <Link to="/farmer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-sans text-sm font-medium tracking-tight transition-colors">For Farmers</Link>
              <Link to="/admin" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-sans text-sm font-medium tracking-tight transition-colors">Dashboard</Link>
            </>
          ),
          rightActions: (
            <>
              <Link to="/login" className="hidden lg:block">
                <button className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">Connect Wallet</button>
              </Link>
              <Link to="/register" className="inline-block">
                <button className="bg-primary-container text-on-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 scale-95 hover:scale-[0.98] transition-transform cursor-pointer">Get Started</button>
              </Link>
            </>
          )
        };
    }
  };

  const { centerLinks, rightActions } = getRoleConfig();

  return (
    <>
      <header className="fixed top-0 w-full z-[100] bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center h-[72px] px-8 shadow-sm">
        <div className="flex-1 flex justify-start w-full md:w-auto mt-2 md:mt-0">
            <div 
              className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" 
              onClick={() => navigate('/')}
            >
              <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span> KETJU
            </div>
        </div>

        <nav className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-semibold">
          { currentRole !== 'public' && (
             <Link to="/" className="text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors">
               <span className="material-symbols-outlined text-sm">home</span> Home
             </Link>
          )}
          {centerLinks}
        </nav>

        <div className="flex-1 flex justify-end items-center gap-3 md:gap-4 mt-2 md:mt-0">
          {rightActions}
        </div>
      </header>
      <div className="h-[72px] w-full"></div>
    </>
  );
};

export default TopNavBar;
