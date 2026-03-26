import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

function AdminPanel() {
  return (
    <DashboardLayout role="admin" address="0x12A...980f">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-2">Role Management &amp; User Administration</h2>
            <p className="text-on-surface-variant max-w-2xl">Assign and revoke blockchain roles for registered stakeholders. Maintain integrity across the supply chain ledger.</p>
          </div>
          <button className="px-8 py-3 bg-primary-container text-on-primary rounded-full font-bold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95">
            <span className="material-symbols-outlined">person_add</span>
            Grant New Role
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left/Center Column */}
          <div className="col-span-12 lg:col-span-9 space-y-8">
            
            {/* System Stats Bento Grid */}
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-l-4 border-primary">
                <span className="material-symbols-outlined text-primary mb-3">group</span>
                <div className="text-2xl font-black">48</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Total Users</div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-l-4 border-green-500">
                <span className="material-symbols-outlined text-green-500 mb-3">agriculture</span>
                <div className="text-2xl font-black">12</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Farmers</div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-l-4 border-amber-500">
                <span className="material-symbols-outlined text-amber-500 mb-3">factory</span>
                <div className="text-2xl font-black">8</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Processors</div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-l-4 border-orange-500">
                <span className="material-symbols-outlined text-orange-500 mb-3">local_shipping</span>
                <div className="text-2xl font-black">15</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Distributors</div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-l-4 border-purple-500">
                <span className="material-symbols-outlined text-purple-500 mb-3">storefront</span>
                <div className="text-2xl font-black">13</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Retailers</div>
              </div>
            </div>

            {/* Grant Role Panel */}
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16"></div>
              <h3 className="text-xl font-bold mb-1">Assign Blockchain Role</h3>
              <p className="text-sm text-on-surface-variant mb-8 max-w-xl">
                Grant a registered wallet address a supply chain role. This calls <code className="bg-surface-container p-1 rounded font-mono text-xs">grantRole()</code> on the RoleManager contract.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <label className="block text-[10px] font-bold uppercase text-on-surface-variant mb-2 ml-1">Wallet Address</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg font-mono text-sm focus:ring-primary/40 focus:bg-white transition-all h-12 px-4" placeholder="0x..." type="text" defaultValue="0x" />
                </div>
                <div className="w-full md:w-64">
                  <label className="block text-[10px] font-bold uppercase text-on-surface-variant mb-2 ml-1">Role Type</label>
                  <select className="w-full bg-surface-container-low border-none rounded-lg text-sm font-medium focus:ring-primary/40 h-12 px-4">
                    <option>FARMER</option>
                    <option>PROCESSOR</option>
                    <option>DISTRIBUTOR</option>
                    <option>RETAILER</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="bg-primary-container text-on-primary font-bold px-8 h-12 rounded-lg hover:shadow-lg transition-all active:scale-95 whitespace-nowrap">Grant Role</button>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-error-container/20 rounded-xl">
                <span className="material-symbols-outlined text-error text-xl">warning</span>
                <p className="text-xs text-on-error-container/80 font-medium">This will trigger an on-chain transaction from the Admin wallet. Gas fees apply and the change is immutable on the ledger once confirmed.</p>
              </div>
            </section>

            {/* Users Table */}
            <section className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
              <div className="p-8 pb-4 flex justify-between items-center">
                <h3 className="text-xl font-bold">Registered Stakeholders</h3>
                <div className="flex gap-3">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-sm">search</span>
                    <input className="bg-surface-container-low border-none rounded-full text-xs pl-10 pr-4 h-9 w-64 focus:ring-primary/40" placeholder="Search users..." type="text" />
                  </div>
                  <select className="bg-surface-container-low border-none rounded-full text-xs h-9 px-4 focus:ring-primary/40">
                    <option>All Roles</option>
                    <option>Farmers</option>
                  </select>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-surface-container-low/50 border-b border-surface-variant">
                    <tr>
                      <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Name / Email</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Role</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Wallet</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Status</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Joined</th>
                      <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-variant/50">
                    <tr className="hover:bg-surface-container-low/30 transition-colors">
                      <td className="px-8 py-5">
                        <div className="font-bold text-sm">Rajesh Kumar</div>
                        <div className="text-xs text-on-surface-variant">rajesh@farm.in</div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="flex items-center gap-1 text-sm font-medium">🌾 Farmer</span>
                      </td>
                      <td className="px-6 py-5">
                        <code className="text-[10px] font-mono text-primary bg-primary/5 px-2 py-1 rounded">0x4f2c...8b1d</code>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700">✅ Active</span>
                      </td>
                      <td className="px-6 py-5 text-xs">Mar 2024</td>
                      <td className="px-8 py-5 text-right space-x-2">
                        <button className="px-3 py-1 text-[10px] font-bold border border-error/30 text-error rounded-full hover:bg-error/5 transition-all">Revoke Role</button>
                        <button className="px-3 py-1 text-[10px] font-bold bg-surface-container-low text-on-surface-variant rounded-full hover:bg-surface-container transition-all">View</button>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </section>
          </div>
          
          {/* Right Sidebar Column */}
          <div className="col-span-12 lg:col-span-3 space-y-8">
            {/* System Status */}
            <section className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                System Status
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-on-surface-variant">Polygon Node</span>
                  <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Connected</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-on-surface-variant">MongoDB</span>
                  <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Connected</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-on-surface-variant">Redis Cache</span>
                  <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Connected</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-on-surface-variant">IPFS Gateway</span>
                  <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Connected</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-surface-variant">
                <div className="flex items-center gap-2 text-[10px] font-mono text-on-surface-variant">
                  <span className="material-symbols-outlined text-xs">database</span>
                  Last block synced: #45,123,847
                </div>
              </div>
            </section>
            
            {/* Recent Actions */}
            <section className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">history</span>
                Recent Admin Actions
              </h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary-fixed">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary"></div>
                  <p className="text-xs font-bold">Granted FARMER role to 0x2c1a...</p>
                  <p className="text-[10px] text-on-surface-variant mt-1">3h ago • Block #45,122,901</p>
                </div>
                <div className="relative pl-6 border-l-2 border-primary-fixed">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-error"></div>
                  <p className="text-xs font-bold">Revoked RETAILER role: NatureMart</p>
                  <p className="text-[10px] text-on-surface-variant mt-1">2d ago • Block #45,098,122</p>
                </div>
              </div>
              <button className="w-full mt-6 py-2 text-xs font-bold text-primary bg-primary/5 rounded-full hover:bg-primary/10 transition-all">View All Activity</button>
            </section>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined">hub</span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded">Mainnet</span>
              </div>
              <p className="text-xs font-bold mb-1">Contract: RoleManager.sol</p>
              <p className="text-[10px] font-mono text-white/70 break-all mb-4">0xc0de...4f8b2d1</p>
              <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-2/3"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminPanel;
