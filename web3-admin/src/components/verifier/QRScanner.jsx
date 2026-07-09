const QRScanner = () => {
  return (
    <div className="bg-[#0B1220] border border-[#111827] rounded-lg p-2 max-w-sm mx-auto">
      <div className="aspect-square bg-[#1E293B] rounded flex flex-col items-center justify-center relative overflow-hidden">
        {/* Simulating camera scanner line */}
        <div className="absolute top-0 w-full h-1 bg-[#22C55E] opacity-50 shadow-[0_0_10px_#22C55E] animate-[scan_2s_ease-in-out_infinite]"></div>
        <span className="text-4xl mb-4 text-[#94A3B8]">📷</span>
        <p className="text-[#94A3B8] text-sm text-center px-4">Position QR code within the frame to scan</p>
      </div>
    </div>
  );
};

export default QRScanner;