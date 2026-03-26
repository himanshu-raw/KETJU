import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

function FarmerDashboard() {
  return (
    <DashboardLayout role="farmer" address="0x4f2c...8b1d">
      {/* Header Row */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-4xl font-black tracking-tight text-on-surface mb-2">Welcome back, Rajesh Kumar 👋</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">Manage your registered product batches and track their blockchain journey through the supply chain.</p>
        </div>
        <Link to="/register">
          <button className="bg-primary-container text-on-primary px-8 py-3 rounded-full font-bold shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-95 transition-all">
            Register New Product
          </button>
        </Link>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_24px_48px_-12px_rgba(27,26,37,0.06)] group hover:translate-y-[-4px] transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">inventory_2</span>
          </div>
          <div className="text-4xl font-black text-on-surface mb-1">12</div>
          <div className="text-sm font-semibold text-on-surface-variant">Total Products</div>
          <div className="text-xs font-bold text-emerald-600 mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">trending_up</span> +2 this month
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_24px_48px_-12px_rgba(27,26,37,0.06)] group hover:translate-y-[-4px] transition-all border-l-4 border-[#16A34A]">
          <div className="w-12 h-12 bg-[#16A34A]/10 rounded-xl flex items-center justify-center text-[#16A34A] mb-4 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">verified</span>
          </div>
          <div className="text-4xl font-black text-on-surface mb-1">9</div>
          <div className="text-sm font-semibold text-on-surface-variant">Organic Certified</div>
          <div className="text-xs font-bold text-on-surface-variant mt-2">75% of your batches</div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_24px_48px_-12px_rgba(27,26,37,0.06)] group hover:translate-y-[-4px] transition-all">
          <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary mb-4 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">token</span>
          </div>
          <div className="text-4xl font-black text-on-surface mb-1">3</div>
          <div className="text-sm font-semibold text-on-surface-variant">NFT Certificates</div>
          <div className="text-xs font-bold text-primary mt-2 cursor-pointer hover:underline">View in wallet</div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_24px_48px_-12px_rgba(27,26,37,0.06)] group hover:translate-y-[-4px] transition-all">
          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">pending_actions</span>
          </div>
          <div className="text-4xl font-black text-on-surface mb-1">2</div>
          <div className="text-sm font-semibold text-on-surface-variant">Pending Events</div>
          <div className="text-xs font-bold text-amber-600 mt-2">Awaiting processor update</div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* My Products Table */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-surface-container-lowest rounded-2xl shadow-[0_48px_48px_-24px_rgba(27,26,37,0.04)] overflow-hidden">
            <div className="p-6 flex justify-between items-center bg-surface-container-low/30">
              <h3 className="text-xl font-bold text-on-surface">My Registered Batches</h3>
              <a className="text-sm font-bold text-primary hover:gap-2 transition-all flex items-center gap-1" href="#all-batches">
                View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low text-[10px] uppercase tracking-widest font-black text-on-surface-variant">
                    <th className="px-6 py-4">Product Name</th>
                    <th className="px-6 py-4">Batch ID</th>
                    <th className="px-6 py-4">Harvest Date</th>
                    <th className="px-6 py-4">Current Stage</th>
                    <th className="px-6 py-4">Organic</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  <tr className="hover:bg-surface-container-low/20 transition-colors">
                    <td className="px-6 py-5 font-bold text-on-surface">Organic Cherry Tomatoes</td>
                    <td className="px-6 py-5 font-mono text-xs text-on-surface-variant">#CT-2024-0871</td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant">Mar 10, 2024</td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] font-black uppercase flex items-center w-fit">
                        <span className="material-symbols-outlined text-[14px] mr-1">local_shipping</span> Distribution
                      </span>
                    </td>
                    <td className="px-6 py-5 text-emerald-600">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </td>
                    <td className="px-6 py-5 text-right space-x-2">
                      <Link to="/verify" className="text-[10px] font-bold text-primary hover:underline">VIEW</Link>
                      <button className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 rounded-md">SHARE QR</button>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-surface-container-low/20 transition-colors">
                    <td className="px-6 py-5 font-bold text-on-surface">Green Spinach Batch A</td>
                    <td className="px-6 py-5 font-mono text-xs text-on-surface-variant">#CT-2024-0654</td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant">Feb 28, 2024</td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[10px] font-black uppercase flex items-center w-fit">
                        <span className="material-symbols-outlined text-[14px] mr-1">store</span> Retail
                      </span>
                    </td>
                    <td className="px-6 py-5 text-emerald-600">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </td>
                    <td className="px-6 py-5 text-right space-x-2">
                      <Link to="/verify" className="text-[10px] font-bold text-primary hover:underline">VIEW</Link>
                      <button className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 rounded-md">SHARE QR</button>
                    </td>
                  </tr>

                  <tr className="hover:bg-surface-container-low/20 transition-colors">
                    <td className="px-6 py-5 font-bold text-on-surface">Cucumber Batch Spring</td>
                    <td className="px-6 py-5 font-mono text-xs text-on-surface-variant">#CT-2024-0432</td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant">Feb 15, 2024</td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase flex items-center w-fit">
                        <span className="material-symbols-outlined text-[14px] mr-1">smartphone</span> Consumer
                      </span>
                    </td>
                    <td className="px-6 py-5 text-emerald-600">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-[10px] font-bold text-primary hover:underline">VIEW</button>
                    </td>
                  </tr>

                  <tr className="hover:bg-surface-container-low/20 transition-colors">
                    <td className="px-6 py-5 font-bold text-on-surface">Bell Peppers Red</td>
                    <td className="px-6 py-5 font-mono text-xs text-on-surface-variant">#CT-2024-0321</td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant">Jan 30, 2024</td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-black uppercase flex items-center w-fit">
                        <span className="material-symbols-outlined text-[14px] mr-1">settings</span> Processing
                      </span>
                    </td>
                    <td className="px-6 py-5 text-on-surface-variant/40">
                      <span className="material-symbols-outlined">cancel</span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-[10px] font-bold text-primary hover:underline">VIEW</button>
                    </td>
                  </tr>

                  <tr className="hover:bg-surface-container-low/20 transition-colors">
                    <td className="px-6 py-5 font-bold text-on-surface">Organic Broccoli</td>
                    <td className="px-6 py-5 font-mono text-xs text-on-surface-variant">#CT-2024-0198</td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant">Jan 12, 2024</td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase flex items-center w-fit">
                        <span className="material-symbols-outlined text-[14px] mr-1">smartphone</span> Consumer
                      </span>
                    </td>
                    <td className="px-6 py-5 text-emerald-600">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-[10px] font-bold text-primary hover:underline">VIEW</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* NFT Panel */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_48px_48px_-24px_rgba(27,26,37,0.04)]">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-tertiary">workspace_premium</span>
              <h3 className="text-xl font-bold text-on-surface">My NFT Certificates</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/10 hover:border-tertiary/30 transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-black text-tertiary uppercase tracking-widest">NFT #4821</span>
                  <span className="bg-[#8247E5]/10 text-[#8247E5] text-[9px] font-bold px-2 py-0.5 rounded uppercase">Polygon</span>
                </div>
                <h4 className="font-bold text-on-surface text-sm group-hover:text-primary transition-colors">Organic Cherry Tomatoes</h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[10px] text-on-surface-variant">Minted Mar 12</span>
                  <span className="text-[10px] font-bold text-primary flex items-center">VIEW <span className="material-symbols-outlined text-[12px] ml-0.5">north_east</span></span>
                </div>
              </div>
              
              <div className="p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/10 hover:border-tertiary/30 transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-black text-tertiary uppercase tracking-widest">NFT #3654</span>
                  <span className="bg-[#8247E5]/10 text-[#8247E5] text-[9px] font-bold px-2 py-0.5 rounded uppercase">Polygon</span>
                </div>
                <h4 className="font-bold text-on-surface text-sm group-hover:text-primary transition-colors">Green Spinach Batch A</h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[10px] text-on-surface-variant">Minted Mar 1</span>
                  <span className="text-[10px] font-bold text-primary flex items-center">VIEW <span className="material-symbols-outlined text-[12px] ml-0.5">north_east</span></span>
                </div>
              </div>

              <div className="p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/10 hover:border-tertiary/30 transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-black text-tertiary uppercase tracking-widest">NFT #2109</span>
                  <span className="bg-[#8247E5]/10 text-[#8247E5] text-[9px] font-bold px-2 py-0.5 rounded uppercase">Polygon</span>
                </div>
                <h4 className="font-bold text-on-surface text-sm group-hover:text-primary transition-colors">Organic Broccoli</h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[10px] text-on-surface-variant">Minted Jan 14</span>
                  <span className="text-[10px] font-bold text-primary flex items-center">VIEW <span className="material-symbols-outlined text-[12px] ml-0.5">north_east</span></span>
                </div>
              </div>
            </div>
            
            <button className="w-full py-3 rounded-full border-2 border-primary text-primary font-bold text-sm hover:bg-primary/5 active:scale-[0.98] transition-all">
              View All in Wallet
            </button>
          </div>

          {/* Activity Feed */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_48px_48px_-24px_rgba(27,26,37,0.04)]">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">sensors</span>
              <h3 className="text-xl font-bold text-on-surface">Recent Activity</h3>
            </div>
            
            <div className="space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-container">
              <div className="flex gap-4 relative">
                <div className="w-4 h-4 rounded-full bg-emerald-500 border-4 border-white z-10"></div>
                <div>
                  <p className="text-xs font-semibold text-on-surface leading-tight">Product CT-2024-0871 entered Distribution stage</p>
                  <span className="text-[10px] text-on-surface-variant">2 hours ago</span>
                </div>
              </div>
              <div className="flex gap-4 relative">
                <div className="w-4 h-4 rounded-full bg-amber-500 border-4 border-white z-10"></div>
                <div>
                  <p className="text-xs font-semibold text-on-surface leading-tight">New event logged by FreshPack Foods</p>
                  <span className="text-[10px] text-on-surface-variant">1 day ago</span>
                </div>
              </div>
              <div className="flex gap-4 relative">
                <div className="w-4 h-4 rounded-full bg-purple-500 border-4 border-white z-10"></div>
                <div>
                  <p className="text-xs font-semibold text-on-surface leading-tight">CT-2024-0654 reached Retail stage</p>
                  <span className="text-[10px] text-on-surface-variant">3 days ago</span>
                </div>
              </div>
              <div className="flex gap-4 relative">
                <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white z-10"></div>
                <div>
                  <p className="text-xs font-semibold text-on-surface leading-tight">Consumer verified CT-2024-0432</p>
                  <span className="text-[10px] text-on-surface-variant">5 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default FarmerDashboard;
