import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface RecentScan {
  batchId: string;
  name: string;
  timestamp: string;
}

const STORAGE_KEY = 'ketju_recent_scans';

export default function QRScanner() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [recentScans, setRecentScans] = useState<RecentScan[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { setRecentScans(JSON.parse(stored)); } catch { /* ignore */ }
    }
  }, []);

  const saveAndNavigate = (batchId: string) => {
    const cleaned = batchId.replace('#', '').trim();
    if (!cleaned) return;
    const scan: RecentScan = { batchId: cleaned, name: cleaned, timestamp: new Date().toISOString() };
    const updated = [scan, ...recentScans.filter(s => s.batchId !== cleaned)].slice(0, 10);
    setRecentScans(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    navigate(`/verify?batch=${cleaned}`);
  };

  const clearAll = () => {
    setRecentScans([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0a0b] font-sans text-white">
      {/* Top App Bar */}
      <header className="w-full top-0 sticky z-[60] bg-[#0a0a0b]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-between px-6 h-16 w-full">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 rounded-full hover:bg-white/5 text-blue-400 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <span className="font-bold text-white tracking-tight">Product Scanner</span>
          <a href="/" className="text-sm font-semibold text-blue-400 border border-white/10 px-4 py-1.5 rounded-full hover:bg-blue-400 hover:text-white transition-all">Home</a>
        </div>
      </header>

      {/* Hero Scanner */}
      <section className="relative h-[480px] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0b]">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="z-10 text-center px-8 mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">Scan Product QR</h2>
          <p className="text-slate-400 text-sm max-w-xs mx-auto">Point your camera at the QR code to trace its journey on the blockchain</p>
        </div>

        {/* Viewfinder */}
        <div className="relative z-10 w-[240px] h-[240px]">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-xl" />
          <div className="absolute inset-2 bg-white/[0.03] backdrop-blur-[4px] rounded-lg overflow-hidden flex items-center justify-center border border-white/5">
            <span className="material-symbols-outlined text-white/20 text-6xl">qr_code_2</span>
            {/* Scanner line */}
            <div className="scanner-line absolute" style={{ animation: 'scan 2.5s infinite linear', background: '#0050e3', boxShadow: '0 0 20px #0050e3' }} />
          </div>
        </div>

        <div className="z-10 mt-8 flex gap-6">
          <button className="w-14 h-14 flex items-center justify-center bg-white/5 backdrop-blur-xl rounded-full border border-white/10 hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-white/80">flash_on</span>
          </button>
          <button className="w-14 h-14 flex items-center justify-center bg-white/5 backdrop-blur-xl rounded-full border border-white/10 hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-white/80">flip_camera_ios</span>
          </button>
        </div>
      </section>

      {/* Scanner animation CSS */}
      <style>{`
        .scanner-line { height: 2px; background: #4d82ff; box-shadow: 0 0 15px #4d82ff; width: 100%; position: absolute; top: 0; left: 0; }
        @keyframes scan { 0% { top: 0; } 50% { top: 100%; } 100% { top: 0; } }
      `}</style>

      {/* Bottom Sheet */}
      <main className="relative -mt-8 z-20 bg-[#0a0a0b] border-t border-white/5 rounded-t-[2.5rem] px-6 pt-12 pb-32 min-h-[500px]">
        {/* Manual Entry */}
        <div className="space-y-4 mb-10">
          <label className="block text-center text-sm font-bold text-on-surface-variant tracking-wide">OR ENTER PRODUCT ID MANUALLY</label>
          <div className="relative group">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && saveAndNavigate(input)}
              className="w-full h-16 bg-white/[0.03] border border-white/5 rounded-2xl px-6 font-mono text-lg text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all placeholder:text-slate-600"
              placeholder="#CT-2024-0871"
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
              <span className="material-symbols-outlined">keyboard</span>
            </span>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => saveAndNavigate(input)}
              className="px-14 h-14 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center gap-2 active:scale-95 transition-all shadow-xl shadow-blue-600/20 hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              Verify Product <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Recent Scans */}
        <section className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-lg font-bold">Recent Scans</h3>
            {recentScans.length > 0 && (
              <button onClick={clearAll} className="text-sm font-bold text-primary">Clear all</button>
            )}
          </div>
          <div className="space-y-4">
            {recentScans.length === 0 ? (
              <p className="text-center text-slate-500 text-sm py-12 border border-dashed border-white/5 rounded-3xl">No recent scans yet.</p>
            ) : (
              recentScans.map(s => (
                <button
                  key={s.batchId}
                  onClick={() => saveAndNavigate(s.batchId)}
                  className="w-full flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-white">Batch #{s.batchId}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{new Date(s.timestamp).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all">chevron_right</span>
                </button>
              ))
            )}
          </div>
        </section>

        <footer className="mt-16 mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] border border-white/5 rounded-full">
            <span className="material-symbols-outlined text-sm text-blue-500">verified</span>
            <p className="text-[11px] font-medium text-slate-500">All verifications are instant and powered by Polygon PoS.</p>
          </div>
        </footer>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4 bg-[#0a0a0b]/80 backdrop-blur-2xl z-50 rounded-t-[32px] border-t border-white/5">
        <button className="flex flex-col items-center justify-center bg-blue-600 text-white rounded-full px-7 py-2.5 shadow-lg shadow-blue-600/20 transition-all">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>qr_code_scanner</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Scanner</span>
        </button>
        <button className="flex flex-col items-center justify-center text-slate-500 px-6 py-2 hover:text-white transition-all">
          <span className="material-symbols-outlined text-xl">keyboard</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Manual</span>
        </button>
        <button className="flex flex-col items-center justify-center text-slate-500 px-6 py-2 hover:text-white transition-all">
          <span className="material-symbols-outlined text-xl">history</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">History</span>
        </button>
      </nav>
    </div>
  );
}
