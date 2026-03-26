import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

function VerifyProduct() {
  return (
    <PageLayout role="public">
      <main className="pt-24 pb-32 max-w-[1440px] mx-auto overflow-hidden">
        {/* Product Hero Header */}
        <section className="max-w-screen-2xl mx-auto px-6 mb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <nav className="flex items-center gap-2 text-on-surface-variant text-sm font-medium mb-6">
                <span>Home</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span>Verify Product</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-primary font-bold">CT-2024-0871</span>
              </nav>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface mb-4">Organic Cherry Tomatoes</h1>
              <p className="text-xl text-on-surface-variant mb-8">Batch #CT-2024-0871 · Registered March 12, 2024</p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold">
                  Organic Certified
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-on-secondary-fixed text-white text-sm font-bold">
                  Blockchain Verified
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-sm font-bold">
                  <span className="material-symbols-outlined text-sm">lab_research</span>
                  Lab Tested
                </span>
              </div>
              
              {/* Farmer Section */}
              <div className="bg-surface-container p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:bg-surface-container-high">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-white text-xl font-bold border-4 border-white shadow-sm overflow-hidden">
                    <img alt="Farmer" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYmzr_VajyOgj619n2E_AC_8sqdWQLDstbQfsUF_P4K4gAcZgErRBKFSUEdzM7YPVohKRNyRXOrqg3-A8GFxCf2gGCDupnLt45Zs7IQUhvcC5qhpd7OYcaiBe3ltd5_toa7KjO_x46m3vTrbKWTEIFEobeVg4jkY132DXvMzSI6vwrw3XQ6f4A_RsnN9_1PmD-ybyv_zRkrR0RG93e_pjOCUIaJXZJoIT1BSGP2ZSDSCdlKB0ok-JEqjBgKcbWivtcDpJHFpCZk8I" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-on-surface">Rajesh Kumar</h3>
                    <p className="text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      Nashik Farm, Maharashtra
                    </p>
                    <p className="text-xs font-bold text-primary mt-1 uppercase tracking-wider">Harvest Date: March 10, 2024</p>
                  </div>
                </div>
                <button className="bg-surface-container-lowest text-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-sm flex items-center gap-2 hover:bg-primary hover:text-white transition-all">
                  View IPFS Certificate
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </button>
              </div>
            </div>
            
            {/* Right QR Code Section */}
            <div className="lg:col-span-4">
              <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0_48px_48px_rgba(27,26,37,0.06)] flex flex-col items-center text-center">
                <div className="bg-surface-container-low p-6 rounded-2xl mb-6">
                  <img alt="Product QR Code" className="w-48 h-48 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbLeC94_jFFciH6Fw5v1yW6YZN_CWnc_OgGCw9R44XXaQkALiqUHMVdzqZdNbengQND0S-nJcyBweQe3FF3qq_s8WiS2h5C6uSVcfXNNZ3h3bdsdiLSqBdXSCnr0w-XSoaMIYCZkPU0eVr9LaSzAue4Q4D0eqv4oLUSNa1Rt5yxK_w9K5-mDQ39URq5mehDIps4hgBMwATP8-Gn5UuWHLH1zML9WcDhzS5miuWCUIHmyInzEWJM52MkjMKGJH6J7fIY0H0H8roDCw" />
                </div>
                <h4 className="text-lg font-bold text-on-surface mb-2">Scan to share journey</h4>
                <div className="bg-surface-container-low px-4 py-2 rounded-lg font-mono text-sm text-on-surface-variant flex items-center gap-2">
                  0x7f3b…a9c2
                  <span className="material-symbols-outlined text-xs cursor-pointer hover:text-primary transition-colors">content_copy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supply Chain Timeline */}
        <section className="max-w-screen-2xl mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-on-surface mb-4">Complete Journey from Farm to Consumer</h2>
            <div className="w-24 h-1.5 bg-primary-container mx-auto rounded-full"></div>
          </div>
          
          <div className="relative max-w-5xl mx-auto pl-12 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-surface-container-highest -translate-x-1/2"></div>
            
            {/* Step 1: Farm */}
            <div className="relative mb-16 md:flex items-center justify-between w-full">
              <div className="md:w-[45%] mb-4 md:mb-0">
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border-l-4 border-emerald-500">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg text-on-surface">Product Registered</h4>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">FARM</span>
                  </div>
                  <div className="space-y-3 text-sm text-on-surface-variant">
                    <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">person</span> Rajesh Kumar</p>
                    <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">location_on</span> Nashik, Maharashtra</p>
                    <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">calendar_today</span> March 12, 2024 · 09:14 AM IST</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-outline-variant/20 flex gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary cursor-pointer hover:underline">Polygon Tx</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary cursor-pointer hover:underline">IPFS Metadata</span>
                  </div>
                </div>
              </div>
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-500 border-4 border-white shadow-sm flex items-center justify-center z-10"></div>
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
            
            {/* Step 2: Processing */}
            <div className="relative mb-16 md:flex items-center justify-between w-full flex-row-reverse">
              <div className="md:w-[45%] mb-4 md:mb-0">
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border-r-4 border-amber-500 text-right">
                  <div className="flex justify-between md:justify-end items-start gap-4 mb-4">
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">PROCESSING</span>
                    <h4 className="font-bold text-lg text-on-surface">Processed at FreshPack</h4>
                  </div>
                  <div className="space-y-3 text-sm text-on-surface-variant">
                    <p className="flex items-center justify-end gap-2">Pune, Maharashtra <span className="material-symbols-outlined text-sm">factory</span></p>
                    <p className="flex items-center justify-end gap-2">March 15, 2024 · 02:30 PM <span className="material-symbols-outlined text-sm">schedule</span></p>
                    <p className="bg-amber-50 text-amber-800 p-2 rounded text-xs inline-block mt-2">Quality Grade: A+ | Pesticide residue: 0.0%</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-500 border-4 border-white shadow-sm flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-white text-xl">settings</span>
              </div>
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
            
            {/* Step 3: Distribution */}
            <div className="relative mb-16 md:flex items-center justify-between w-full">
              <div className="md:w-[45%] mb-4 md:mb-0">
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border-l-4 border-orange-500">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg text-on-surface">Dispatched to Warehouse</h4>
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">DISTRIBUTION</span>
                  </div>
                  <div className="space-y-3 text-sm text-on-surface-variant">
                    <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">local_shipping</span> QuickMesh Logistics</p>
                    <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">ac_unit</span> Temp: 4°C (Consistent)</p>
                    <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">calendar_today</span> March 17, 2024 · 06:00 AM</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-orange-500 border-4 border-white shadow-sm flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-white text-xl">local_shipping</span>
              </div>
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
            
            {/* Step 4: Retail */}
            <div className="relative mb-16 md:flex items-center justify-between w-full flex-row-reverse">
              <div className="md:w-[45%] mb-4 md:mb-0">
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border-r-4 border-purple-500 text-right">
                  <div className="flex justify-between md:justify-end items-start gap-4 mb-4">
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">RETAIL</span>
                    <h4 className="font-bold text-lg text-on-surface">Received at RetailMax</h4>
                  </div>
                  <div className="space-y-3 text-sm text-on-surface-variant">
                    <p className="flex items-center justify-end gap-2">Andheri West, Mumbai <span className="material-symbols-outlined text-sm">store</span></p>
                    <p className="flex items-center justify-end gap-2">March 18, 2024 · 10:20 AM <span className="material-symbols-outlined text-sm">event_available</span></p>
                    <p className="text-xs font-bold text-on-surface-variant">SKU: RT-7821</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-purple-500 border-4 border-white shadow-sm flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-white text-xl">store</span>
              </div>
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
            
            {/* Step 5: Consumer */}
            <div className="relative md:flex items-center justify-between w-full">
              <div className="md:w-[45%] mb-4 md:mb-0">
                <div className="bg-primary-container p-6 rounded-2xl shadow-xl text-white">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg">Product Reached Consumer</h4>
                    <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded uppercase">Verified</span>
                  </div>
                  <p className="text-white/90 text-sm mb-4">You successfully verified this product today through our tamper-proof tracing system.</p>
                  <div className="flex items-center gap-2 text-xs font-bold bg-black/10 p-2 rounded w-fit">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    AUTHENTICITY CONFIRMED
                  </div>
                </div>
              </div>
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary-container border-4 border-white shadow-lg flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-white text-2xl">smartphone</span>
              </div>
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          </div>
        </section>

        {/* Blockchain Proof Section */}
        <section className="bg-on-primary-fixed py-24 px-6 relative overflow-hidden">
          <div className="max-w-screen-2xl mx-auto relative z-10">
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4">Blockchain Transparency Record</h2>
              <p className="text-white/70 text-lg">Our decentralized ledger ensures that every step of the supply chain is immutable, timestamped, and verifiable by anyone, anywhere.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Stat Card 1 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Network Events</p>
                <h3 className="text-5xl font-bold text-white mb-1">5</h3>
                <p className="text-blue-300 text-sm font-medium">Verified Ledger Entries</p>
              </div>
              {/* Stat Card 2 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Transit Time</p>
                <h3 className="text-5xl font-bold text-white mb-1">21</h3>
                <p className="text-blue-300 text-sm font-medium">Days Farm to Shelf</p>
              </div>
              {/* Stat Card 3 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Blockchain</p>
                <h3 className="text-5xl font-bold text-white mb-1">POS</h3>
                <p className="text-blue-300 text-sm font-medium">Polygon Mumbai Testnet</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-on-primary-fixed transition-all flex items-center gap-3 group">
                View Full Contract on PolygonScan
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        {/* Related Certifications */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-on-surface">Verified Certifications</h2>
              <button className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Download All Records
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-surface-container-low p-6 rounded-2xl flex items-center gap-4 hover:bg-surface-container transition-all cursor-pointer">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-3xl">description</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">KETJU NFT</h4>
                  <p className="text-on-surface-variant text-sm">PDF Document · 2.4 MB</p>
                </div>
              </div>
              <div className="group bg-surface-container-low p-6 rounded-2xl flex items-center gap-4 hover:bg-surface-container transition-all cursor-pointer">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-3xl">science</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">KETJU NFT</h4>
                  <p className="text-on-surface-variant text-sm">PDF Document · 1.1 MB</p>
                </div>
              </div>
              <div className="group bg-surface-container-low p-6 rounded-2xl flex items-center gap-4 hover:bg-surface-container transition-all cursor-pointer">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-purple-600 shadow-sm group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-3xl">token</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">KETJU NFT</h4>
                  <p className="text-on-surface-variant text-sm">Proof of Ownership · On-chain</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation Bar (Mobile only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border-t border-slate-100/20 shadow-[0_-4px_24px_rgba(0,0,0,0.04)] z-50 rounded-t-3xl">
        <Link className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2" to="/">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Home</span>
        </Link>
        <Link className="flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-2xl px-5 py-2" to="/verify">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>qr_code_scanner</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Verify</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2" to="/history">
          <span className="material-symbols-outlined">history</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">History</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2" to="/settings">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Settings</span>
        </Link>
      </nav>
    </PageLayout>
  );
}

export default VerifyProduct;
