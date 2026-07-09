const Verifier = () => {
  return (
    <div className="p-8 h-full flex flex-col">
      <h2 className="text-2xl font-bold text-[#F8FAFC] mb-6">Verifier Portal</h2>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-[#1E293B] rounded-xl p-10 shadow-2xl max-w-lg w-full text-center border border-[#F59E0B]/20">
          
          <div className="w-64 h-64 bg-white mx-auto rounded-lg mb-8 flex items-center justify-center p-4">
            {/* QR Code Placeholder */}
            <div className="w-full h-full border-4 border-dashed border-gray-300 flex items-center justify-center">
              <span className="text-gray-400 font-bold">QR CODE HERE</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">Waiting for Scan...</h3>
          <p className="text-[#94A3B8] mb-8 text-sm">Scan this QR code using the Holder Wallet to present your credentials securely.</p>

          <div className="p-4 bg-[#0B1220] rounded-lg border border-[#111827] text-left">
            <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-2">Verification Status</p>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#F59E0B] animate-pulse"></div>
              <span className="text-[#F8FAFC] font-medium">Listening for presentation request</span>
            </div>
          </div>

          <button className="mt-6 w-full py-3 bg-[#111827] text-[#F8FAFC] border border-[#F59E0B] hover:bg-[#F59E0B] hover:text-white rounded-lg transition-colors">
            Manual Override / Grant Access
          </button>

        </div>
      </div>
    </div>
  );
};

export default Verifier;