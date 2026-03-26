import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

function RetailerDashboard() {
  return (
    <DashboardLayout role="retailer" address="0x4D5...1c8B">
      <main className="max-w-[1440px] mx-auto px-8 py-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Retailer Dashboard</h1>
            <p className="text-on-surface-variant font-medium">Welcome back, Vikram. Manage inventory and view chain of custody records.</p>
          </div>
          <button className="bg-primary-container text-on-primary px-6 py-3 rounded-full text-sm font-bold shadow-sm hover:shadow-md hover:bg-primary transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Log Receipt
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/20 shadow-sm flex flex-col justify-center">
            <div className="text-on-surface-variant text-sm font-bold mb-2 uppercase tracking-wide">Products on Shelf</div>
            <div className="text-4xl font-extrabold text-primary">3,420</div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/20 shadow-sm flex flex-col justify-center">
            <div className="text-on-surface-variant text-sm font-bold mb-2 uppercase tracking-wide">Incoming Deliveries</div>
            <div className="text-4xl font-extrabold text-blue-600">5</div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/20 shadow-sm flex flex-col justify-center">
            <div className="text-on-surface-variant text-sm font-bold mb-2 uppercase tracking-wide">Verified Scans (Consumers)</div>
            <div className="text-4xl font-extrabold text-emerald-600">892</div>
          </div>
        </div>

        <div className="mt-12 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-outline-variant/20">
            <h3 className="text-lg font-bold text-on-surface">Recent Deliveries Received</h3>
          </div>
          <div className="p-8 text-center text-on-surface-variant">
            <span className="material-symbols-outlined text-4xl mb-2 opacity-50">inventory_2</span>
            <p>No recent deliveries found.</p>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}

export default RetailerDashboard;