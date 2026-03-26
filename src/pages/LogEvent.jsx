import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

function LogEvent() {
  return (
    <PageLayout role="processor" address="0x7a3b...2f90">
      <main className="max-w-[1280px] mx-auto px-8 py-12">
        {/* Breadcrumb & Header */}
        <div className="mb-12 mt-16">
          <nav className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
            <Link to="/farmer" className="hover:text-primary transition-colors">Dashboard</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary-container font-medium">Log Supply Chain Event</span>
          </nav>
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-on-surface">Log a Supply Chain Event</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Record your stage in the product's blockchain journey. This creates an immutable on-chain event log.
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-[#FFFBEB] border-l-4 border-amber-500 p-6 rounded-r-lg mb-12 flex items-start gap-4">
          <span className="material-symbols-outlined text-amber-600">info</span>
          <div>
            <p className="text-amber-900 font-semibold mb-0.5">Role Verification Required</p>
            <p className="text-amber-800 text-sm">You are logged in as a <span className="font-bold">PROCESSOR</span>. You can only log PROCESSING stage events. MetaMask will prompt you to sign the transaction upon submission.</p>
          </div>
        </div>

        {/* Multi-Step Form Container */}
        <div className="max-w-[860px] mx-auto space-y-8 pb-32">
          
          {/* STEP 1: Find Product */}
          <section className="bg-surface-container-lowest p-8 rounded-lg shadow-[0_24px_48px_-12px_rgba(27,26,37,0.06)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-container/10 text-primary-container flex items-center justify-center font-bold">1</div>
              <h2 className="text-2xl font-bold text-on-surface">Find Product</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Product Batch ID *</label>
                <div className="flex gap-3">
                  <input className="flex-1 bg-surface-container-low border-0 rounded-lg p-4 font-mono text-sm focus:ring-2 focus:ring-primary-container/40 outline-none transition-all" placeholder="Scan QR or enter #CT-2024-0871" type="text" />
                  <button className="bg-surface-container-high text-on-surface-variant px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 border border-outline-variant/20 hover:bg-surface-variant transition-all">
                    <span className="material-symbols-outlined text-lg">qr_code_scanner</span>
                    Scan QR Code
                  </button>
                  <button className="bg-primary-container text-on-primary px-8 py-3 rounded-full text-sm font-bold hover:bg-primary transition-all shadow-md">
                    Look Up Product
                  </button>
                </div>
              </div>

              {/* Product Preview (Revealed) */}
              <div className="bg-surface-container-low rounded-xl p-6 relative overflow-hidden border border-outline-variant/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img className="w-16 h-16 rounded-lg object-cover shadow-sm" alt="fresh red cherry tomatoes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOxwZ_qwBWSVcwG_ale6BGpb4sFOIO6bBs5LqdFLBmGPsayEoYlxtE_0WMPkTqTan9FE1-FjhNCZ9HvTDf7YdSkgXEINQYKpQ8N0goR2JpDzfRvoCejmSgFGJXfQvFkZDp0RhcEE8lnnCu6V-XoWANl8Ca43IWAq0vbKCSMHcCA3A6l0YW3AkBOeuPLVhjwIDMFtp_9Bv3Rkz4jYq6JNDDGZMNYpPB_p7KXTHE4CanF9cU4TMa-XvAP-NjLLmHF-NJIP9QmYajmHY" />
                    <div>
                      <h3 className="text-lg font-bold">Organic Cherry Tomatoes</h3>
                      <p className="text-sm text-on-surface-variant">Rajesh Kumar · Nashik</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Harvested</p>
                    <p className="font-mono text-sm">Mar 12, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    🌾 FARM (Done)
                  </div>
                  <span className="material-symbols-outlined text-outline-variant">trending_flat</span>
                  <div className="flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold border border-amber-200">
                    <span className="material-symbols-outlined text-xs">settings</span>
                    Your Stage: PROCESSING
                  </div>
                </div>
                
                <div className="bg-green-50 text-green-700 text-xs font-bold py-2 px-3 rounded flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Product found and active in supply chain
                </div>
              </div>
            </div>
          </section>

          {/* STEP 2: Your Stage Details */}
          <section className="bg-surface-container-lowest p-8 rounded-lg shadow-[0_24px_48px_-12px_rgba(27,26,37,0.06)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-container/10 text-primary-container flex items-center justify-center font-bold">2</div>
              <h2 className="text-2xl font-bold text-on-surface">Your Stage Details</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Facility Name</label>
                <input className="w-full bg-surface-container-low border-0 rounded-lg p-4 font-medium text-on-surface-variant cursor-not-allowed outline-none" readOnly type="text" value="FreshPack Foods Ltd." />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Location/GPS</label>
                <div className="relative">
                  <input className="w-full bg-surface-container-low border-0 rounded-lg p-4 pr-32 focus:ring-2 focus:ring-primary-container/40 outline-none transition-all" type="text" defaultValue="Pune, Maharashtra" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-container text-xs font-bold hover:underline flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    Use My Location
                  </button>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Date/Time</label>
                <input className="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary-container/40 outline-none transition-all" type="text" defaultValue="2024-03-15 14:30" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Current Role</label>
                <div className="bg-amber-100 text-amber-700 px-4 py-3 rounded-lg text-sm font-bold flex items-center gap-2 border border-amber-200">
                  <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
                  PROCESSING
                </div>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Stage Notes</label>
                <textarea className="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary-container/40 outline-none transition-all" placeholder="Enter details about temperature, sorting, or cleaning procedures..." rows="3"></textarea>
              </div>
            </div>
          </section>

          {/* STEP 3: Attach Evidence */}
          <section className="bg-surface-container-lowest p-8 rounded-lg shadow-[0_24px_48px_-12px_rgba(27,26,37,0.06)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-container/10 text-primary-container flex items-center justify-center font-bold">3</div>
              <h2 className="text-2xl font-bold text-on-surface">Attach Evidence</h2>
            </div>
            
            <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary-container/50 transition-colors bg-surface-container-low/30 mb-6 cursor-pointer">
              <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-4">cloud_upload</span>
              <p className="text-lg font-medium mb-1">Drag &amp; drop files or click to browse</p>
              <p className="text-sm text-on-surface-variant">PDF, JPG, PNG — stored permanently on IPFS</p>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/30">
                <span className="material-symbols-outlined text-lg text-on-surface-variant">description</span>
                <span className="text-sm font-medium">pesticide_report.pdf</span>
                <button className="material-symbols-outlined text-lg text-error hover:scale-110 transition-transform">close</button>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/30">
                <span className="material-symbols-outlined text-lg text-on-surface-variant">image</span>
                <span className="text-sm font-medium">facility_photo.jpg</span>
                <button className="material-symbols-outlined text-lg text-error hover:scale-110 transition-transform">close</button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Additional Metadata (Optional)</label>
              <input className="w-full bg-surface-container-low border-0 rounded-lg p-4 font-mono text-sm focus:ring-2 focus:ring-primary-container/40 outline-none transition-all" placeholder='{"batch_temp": "4°C", "humidity": "65%"}' type="text" />
            </div>
          </section>

          {/* STEP 4: Review & Submit */}
          <section className="bg-surface-container-lowest p-8 rounded-lg shadow-[0_24px_48px_-12px_rgba(27,26,37,0.06)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-container/10 text-primary-container flex items-center justify-center font-bold">4</div>
              <h2 className="text-2xl font-bold text-on-surface">Review &amp; Submit</h2>
            </div>
            
            <div className="bg-[#EFF6FF] rounded-xl p-6 mb-8 grid grid-cols-2 gap-y-6">
              <div>
                <p className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-1">Product Batch</p>
                <p className="font-mono text-sm text-primary font-bold">#CT-2024-0871</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-1">Stage Action</p>
                <p className="font-bold text-primary">PROCESSING</p>
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-1">Authorized Actor</p>
                    <p className="font-bold text-primary">FreshPack Foods Ltd.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-1">IPFS Storage Root</p>
                    <p className="font-mono text-xs text-primary truncate max-w-[200px]">Qm...8f2a773d91b</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-error font-bold text-sm bg-error/10 px-4 py-2 rounded-full w-full sm:w-auto justify-center">
                <span className="material-symbols-outlined text-lg">warning</span>
                MetaMask signature required
              </div>
              
              <div className="flex gap-4 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-8 py-3 rounded-full text-sm font-bold border-2 border-primary-container text-primary-container hover:bg-primary-container/5 transition-all">
                  Back
                </button>
                <button className="flex-1 sm:flex-none bg-primary-container text-on-primary px-10 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:bg-primary active:scale-95 transition-all flex justify-center items-center gap-2">
                  Submit to Blockchain
                  <span className="material-symbols-outlined text-lg">link</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Decorative Bottom Gradient */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-tertiary to-primary-container opacity-50 z-50"></div>
    </PageLayout>
  );
}

export default LogEvent;
