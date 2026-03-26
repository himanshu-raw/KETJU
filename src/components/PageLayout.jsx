import React from 'react';
import TopNavBar from './TopNavBar';

const PageLayout = ({ children, role = 'public', address = null }) => {
  return (
    <div className="ketju-page-wrapper w-full min-h-screen bg-surface dark:bg-slate-950 font-sans text-on-surface">
      <TopNavBar role={role} address={address} />
      {children}
    </div>
  );
};

export default PageLayout;
