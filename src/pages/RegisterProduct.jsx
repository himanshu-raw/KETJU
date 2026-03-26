import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

function RegisterProduct() {
  return (
    <PageLayout role="farmer" address="0x71C...4e21">
      {/* Page Header */}
      <header className="pt-32 pb-20 bg-white border-none">
        <div className="max-w-[800px] mx-auto px-6">
          <nav className="mb-6 flex items-center gap-2 text-sm text-on-surface-variant">
            <Link to="/farmer" className="hover:text-primary cursor-pointer transition-colors">Dashboard</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="font-medium text-on-surface">Register New Product</span>
          </nav>
          
          <h1 className="text-5xl font-extrabold tracking-tight text-on-surface mb-4 leading-tight">Register a New Product Batch</h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
            Fill in the product details. An immutable blockchain record will be created and an NFT certificate will be minted to your wallet.
          </p>
          
          <div className="flex items-start gap-4 p-5 bg-primary/5 border-l-4 border-primary rounded-r-xl">
            <span className="material-symbols-outlined text-primary">info</span>
            <p className="text-sm text-on-surface-variant font-medium">
              Your MetaMask wallet will be prompted to sign a transaction after submission. A small gas fee on Polygon will apply.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-[800px] mx-auto bg-surface-container-lowest rounded-lg shadow-[0_48px_0_rgba(27,26,37,0.06)] p-10 mb-32">
          <form className="space-y-12">
            
            {/* Section A: Product Information */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">inventory_2</span>
                <h2 className="text-2xl font-bold text-on-surface">Product Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Product Name*</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface placeholder:text-outline/60 transition-all focus:ring-2 focus:ring-primary/40 focus:outline-none" placeholder="e.g. Organic Cherry Tomatoes" type="text" />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Product Category*</label>
                  <select className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface appearance-none focus:ring-2 focus:ring-primary/40 focus:outline-none">
                    <option>Vegetables</option>
                    <option>Fruits</option>
                    <option>Grains</option>
                    <option>Dairy</option>
                    <option>Herbs</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Harvest Date*</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface transition-all focus:ring-2 focus:ring-primary/40 focus:outline-none" type="date" />
                </div>
                
                <div className="flex items-center justify-between col-span-2 bg-surface-container p-6 rounded-lg">
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-on-surface">Is this product Organic?</p>
                        <p className="text-xs text-on-surface-variant">Verified by organic farming standards</p>
                      </div>
                      <button className="w-12 h-6 bg-primary rounded-full relative transition-colors" type="button">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>
                    <div className="w-full h-px bg-outline-variant/20"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-on-surface">Is this product Certified?</p>
                        <p className="text-xs text-on-surface-variant">Requires valid certificate upload below</p>
                      </div>
                      <button className="w-12 h-6 bg-primary rounded-full relative transition-colors" type="button">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Product Description</label>
                  <textarea className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface placeholder:text-outline/60 transition-all focus:ring-2 focus:ring-primary/40 focus:outline-none" placeholder="Describe growing conditions, farming methods..." rows="3"></textarea>
                </div>
              </div>
            </section>
            
            <div className="h-px bg-surface-container-high w-full"></div>
            
            {/* Section B: Certification & Documentation */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">verified</span>
                <h2 className="text-2xl font-bold text-on-surface">Certification &amp; Documentation</h2>
              </div>
              
              <div className="mb-8">
                <div className="border-2 border-dashed border-outline-variant/30 rounded-lg p-10 flex flex-col items-center justify-center text-center bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-5xl text-primary mb-4">cloud_upload</span>
                  <p className="text-lg font-bold text-on-surface mb-1">Drag &amp; drop your organic certification PDF or click to browse</p>
                  <p className="text-sm text-on-surface-variant mb-6">Supported: PDF, JPG, PNG (max 10MB). Files stored on IPFS via Web3.Storage.</p>
                  <button className="px-8 py-3 bg-white border border-outline-variant rounded-full text-sm font-bold text-primary hover:shadow-md transition-all active:scale-95" type="button">Browse Files</button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">FSSAI License Number</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface transition-all focus:ring-2 focus:ring-primary/40 focus:outline-none" placeholder="12-digit FSSAI license number" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Certification Issuing Body</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface transition-all focus:ring-2 focus:ring-primary/40 focus:outline-none" placeholder="e.g. India Organic, USDA Organic" type="text" />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Certification Valid Until</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface transition-all focus:ring-2 focus:ring-primary/40 focus:outline-none" type="date" />
                </div>
              </div>
            </section>
            
            <div className="h-px bg-surface-container-high w-full"></div>
            
            {/* Section C: Location Details */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">location_on</span>
                  <h2 className="text-2xl font-bold text-on-surface">Location Details</h2>
                </div>
                <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline transition-all" type="button">
                  <span className="material-symbols-outlined text-lg">near_me</span>
                  Use My Current Location
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Farm Name</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface transition-all focus:ring-2 focus:ring-primary/40 focus:outline-none" placeholder="e.g. Sunrise Organic Farm" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">City/District</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface transition-all focus:ring-2 focus:ring-primary/40 focus:outline-none" placeholder="e.g. Nashik" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">State</label>
                  <select className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface appearance-none focus:ring-2 focus:ring-primary/40 focus:outline-none">
                    <option>Maharashtra</option>
                    <option>Punjab</option>
                    <option>Haryana</option>
                    <option>Karnataka</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">GPS Coordinates</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface transition-all focus:ring-2 focus:ring-primary/40 focus:outline-none" placeholder="19.9975° N, 73.7898° E — or leave blank to auto-detect" type="text" />
                </div>
              </div>
            </section>
            
            <div className="h-px bg-surface-container-high w-full"></div>
            
            {/* Section D: Additional Photos */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">photo_camera</span>
                <h2 className="text-2xl font-bold text-on-surface">Additional Photos</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square bg-surface-container-low rounded-lg border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center group cursor-pointer hover:bg-surface-container-high transition-all">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary">add_a_photo</span>
                  </div>
                  <span className="font-bold text-on-surface">Product Photo</span>
                  <span className="text-xs text-on-surface-variant mt-1">High resolution, clear lighting</span>
                </div>
                
                <div className="aspect-square bg-surface-container-low rounded-lg border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center group cursor-pointer hover:bg-surface-container-high transition-all">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary">agriculture</span>
                  </div>
                  <span className="font-bold text-on-surface">Farm Photo</span>
                  <span className="text-xs text-on-surface-variant mt-1">Wide view of cultivation area</span>
                </div>
              </div>
            </section>
          </form>
        </div>
      </main>

      {/* BottomNavBar */}
      <footer className="fixed bottom-0 w-full z-50 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
        <div className="flex justify-between items-center px-10 py-6 w-full max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span> KETJU
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-slate-500 dark:text-slate-400 flex items-center gap-2 px-6 font-bold uppercase tracking-wider hover:opacity-90 transition-opacity active:translate-y-0.5">
              Cancel
            </button>
            <button className="bg-blue-600 text-white rounded-full px-8 py-3 flex items-center gap-2 font-bold uppercase tracking-wider hover:opacity-90 transition-opacity active:translate-y-0.5">
              <span className="material-symbols-outlined text-lg">verified_user</span>
              Register on Blockchain
            </button>
          </div>
        </div>
      </footer>
    </PageLayout>
  );
}

export default RegisterProduct;
