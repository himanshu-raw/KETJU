import React from 'react';
import TopNavBar from './TopNavBar';
import SideNavBar from './SideNavBar';

const DashboardLayout = ({ children, role = 'farmer', address = '0x4f2c...8b1d' }) => {
  return (
    <div className="ketju-page-wrapper w-full min-h-screen bg-surface dark:bg-slate-950 font-sans text-on-surface">
      <TopNavBar role={role} address={address} />
      <div className="flex">
        <SideNavBar role={role} address={address} />
        <main className="ml-64 flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
