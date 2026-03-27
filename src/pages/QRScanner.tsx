import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import jsQR from 'jsqr';
import { 
  ArrowLeft, 
  QrCode, 
  Keyboard, 
  ArrowRight, 
  Box, 
  ChevronRight, 
  History, 
  ScanQrCode, 
  CheckCircle2,
  AlertCircle,
  RefreshCcw,
  Loader2
} from 'lucide-react';

interface RecentScan {
  batchId: string;
  name: string;
  timestamp: string;
}

type CameraStatus = 'idle' | 'loading' | 'active' | 'denied' | 'error';

const STORAGE_KEY = 'ketju_recent_scans';

export default function QRScanner() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [input, setInput] = useState('');
  const [recentScans, setRecentScans] = useState<RecentScan[]>([]);
  const [status, setStatus] = useState<CameraStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const returnTo = searchParams.get('returnTo');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { setRecentScans(JSON.parse(stored)); } catch { /* ignore */ }
    }

    let mounted = true;
    let activeStream: MediaStream | null = null;
    let animationFrameId: number;

    const scan = () => {
      if (!mounted || !videoRef.current || !canvasRef.current) return;
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d', { willReadFrequently: true });

      if (video.readyState === video.HAVE_ENOUGH_DATA && context) {
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert",
        });

        if (code && code.data) {
          saveAndNavigate(code.data);
          return; // Stop scanning once found
        }
      }
      animationFrameId = requestAnimationFrame(scan);
    };

    const requestCamera = async () => {
      setStatus('loading');
      setErrorMessage(null);

      // Check for secure context
      if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        setStatus('error');
        setErrorMessage('Camera access requires a secure connection (HTTPS).');
        return;
      }

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setStatus('error');
        setErrorMessage('Camera access is not supported by your browser.');
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' } 
        });
        
        if (!mounted) {
          stream.getTracks().forEach(track => track.stop());
          return;
        }

        activeStream = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          // Some browsers need play() called explicitly
          videoRef.current.play().catch(e => {
            console.error('Error starting video play:', e);
          });

          videoRef.current.onloadedmetadata = () => {
            if (mounted) {
              setStatus('active');
              animationFrameId = requestAnimationFrame(scan);
            }
          };

          // Fallback if onloadedmetadata doesn't fire
          setTimeout(() => {
            if (mounted && status === 'loading' && videoRef.current?.readyState && videoRef.current.readyState >= 2) {
              setStatus('active');
              animationFrameId = requestAnimationFrame(scan);
            }
          }, 2000);
        }
      } catch (err: any) {
        if (!mounted) return;
        
        console.error('Camera initialization error:', err);
        
        if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
          setStatus('denied');
          setErrorMessage('Camera permission was denied. Please enable it in browser settings.');
        } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
          setStatus('error');
          setErrorMessage('No camera was found on this device.');
        } else {
          setStatus('error');
          setErrorMessage(`Could not access camera: ${err.message || 'Unknown error'}`);
        }
      }
    };

    requestCamera();

    return () => {
      mounted = false;
      cancelAnimationFrame(animationFrameId);
      if (activeStream) {
        activeStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [status === 'idle' || errorMessage !== null]); // Allow retry mechanism

  const saveAndNavigate = (batchId: string) => {
    const cleaned = batchId.replace('#', '').trim();
    if (!cleaned) return;
    
    // Save to history
    const scan: RecentScan = { batchId: cleaned, name: cleaned, timestamp: new Date().toISOString() };
    const updated = [scan, ...recentScans.filter(s => s.batchId !== cleaned)].slice(0, 10);
    setRecentScans(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Handle return trajectory
    if (returnTo) {
      const separator = returnTo.includes('?') ? '&' : '?';
      navigate(`${returnTo}${separator}batch=${cleaned}`);
    } else {
      navigate(`/verify?batch=${cleaned}`);
    }
  };

  const clearAll = () => {
    setRecentScans([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const handleRetry = () => {
    setStatus('idle');
    setErrorMessage(null);
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 font-sans text-slate-900">
      <canvas ref={canvasRef} className="hidden" />
      
      {/* Top App Bar */}
      <header className="w-full top-0 sticky z-[60] bg-white/90 backdrop-blur-md border-b border-slate-200/60">
        <div className="flex items-center justify-between px-6 h-16 w-full">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 rounded-full hover:bg-slate-100 text-blue-600 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <span className="font-bold text-slate-900 tracking-tight">Product Scanner</span>
          <a href="/" className="text-sm font-semibold text-blue-600 border border-slate-200 px-4 py-1.5 rounded-full hover:bg-blue-600 hover:text-white transition-all">Home</a>
        </div>
      </header>

      {/* Hero Scanner */}
      <section className="relative h-[480px] flex flex-col items-center justify-center overflow-hidden bg-slate-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="z-10 text-center px-8 mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight mb-2 text-slate-900">Scan Product QR</h2>
          <p className="text-slate-500 text-sm max-w-xs mx-auto font-medium">Point your camera at the QR code to trace its journey on the blockchain</p>
        </div>

        {/* Viewfinder */}
        <div className="relative z-10 w-[240px] h-[240px]">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-600 rounded-tl-xl z-20" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-600 rounded-tr-xl z-20" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-600 rounded-bl-xl z-20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-600 rounded-br-xl z-20" />
          <div className="absolute inset-0 bg-white shadow-2xl rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200">
            
            {/* Camera Preview */}
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              muted
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${status === 'active' ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Loading/Error Overlays */}
            {status === 'loading' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/80 backdrop-blur-sm z-30">
                <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-2" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Starting Camera</span>
              </div>
            )}

            {(status === 'error' || status === 'denied') && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 p-6 text-center z-30">
                <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                <p className="text-xs font-bold text-slate-900 mb-4 leading-relaxed">{errorMessage}</p>
                <button 
                  onClick={handleRetry}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
                >
                  <RefreshCcw className="w-3.5 h-3.5" />
                  Retry Camera
                </button>
              </div>
            )}

            {/* Viewfinder Graphics */}
            {status === 'active' && (
              <>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[0.5px] pointer-events-none" />
                <div className="scanner-line absolute z-20" style={{ animation: 'scan 2.5s infinite linear', background: '#0050e3', boxShadow: '0 0 20px #0050e3' }} />
              </>
            )}
            
            <QrCode className="w-16 h-16 text-slate-200/50 relative z-10" />
          </div>
        </div>

        <div className="z-10 mt-10 h-14" />
      </section>

      <style>{`
        .scanner-line { height: 2px; background: #4d82ff; box-shadow: 0 0 15px #4d82ff; width: 100%; position: absolute; top: 0; left: 0; }
        @keyframes scan { 0% { top: 0; } 50% { top: 100%; } 100% { top: 0; } }
      `}</style>

      {/* Bottom Sheet */}
      <main className="relative -mt-8 z-20 bg-white border-t border-slate-200/60 rounded-t-[2.5rem] px-6 pt-12 pb-32 min-h-[500px] shadow-[0_-8px_48px_rgba(0,0,0,0.05)]">
        <div className="space-y-4 mb-10">
          <label className="block text-center text-sm font-bold text-on-surface-variant tracking-wide">OR ENTER PRODUCT ID MANUALLY</label>
          <div className="relative group">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && saveAndNavigate(input)}
              className="w-full h-16 bg-slate-50 border border-slate-200 rounded-2xl px-6 font-mono text-lg text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400"
              placeholder="#CT-2024-0871"
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
              <Keyboard className="w-6 h-6" />
            </span>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => saveAndNavigate(input)}
              className="px-14 h-14 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center gap-2 active:scale-95 transition-all shadow-xl shadow-blue-600/20 hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              Verify Product <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <section className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-lg font-bold">Recent Scans</h3>
            {recentScans.length > 0 && (
              <button onClick={clearAll} className="text-sm font-bold text-primary">Clear all</button>
            )}
          </div>
          <div className="space-y-4">
            {recentScans.length === 0 ? (
              <p className="text-center text-slate-400 text-sm py-12 border border-dashed border-slate-200 rounded-3xl">No recent scans yet.</p>
            ) : (
              recentScans.map(s => (
                <button
                   key={s.batchId}
                   onClick={() => saveAndNavigate(s.batchId)}
                   className="w-full flex items-center justify-between p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-slate-100 hover:border-blue-200 transition-all group"
                 >
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                       <Box className="w-6 h-6" />
                     </div>
                     <div className="text-left">
                       <p className="font-bold text-slate-900">Batch #{s.batchId}</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{new Date(s.timestamp).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}</p>
                     </div>
                   </div>
                   <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                 </button>
              ))
            )}
          </div>
        </section>

        <footer className="mt-16 mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <p className="text-[11px] font-bold text-slate-400">All verifications are instant and powered by Polygon PoS.</p>
          </div>
        </footer>
      </main>

      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4 bg-white/90 backdrop-blur-2xl z-50 rounded-t-[32px] border-t border-slate-200/60 shadow-[0_-8px_48_rgba(0,0,0,0.05)]">
        <button className="flex flex-col items-center justify-center bg-blue-600 text-white rounded-full px-7 py-2.5 shadow-lg shadow-blue-600/20 transition-all">
          <ScanQrCode className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Scanner</span>
        </button>
        <button className="flex flex-col items-center justify-center text-slate-400 px-6 py-2 hover:text-blue-600 transition-all">
          <Keyboard className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Manual</span>
        </button>
        <button className="flex flex-col items-center justify-center text-slate-400 px-6 py-2 hover:text-blue-600 transition-all">
          <History className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">History</span>
        </button>
      </nav>
    </div>
  );
}
