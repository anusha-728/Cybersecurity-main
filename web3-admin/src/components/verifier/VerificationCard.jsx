const VerificationCard = ({ status, details }) => {
  const isSuccess = status === 'verified';
  return (
    <div className={`p-6 rounded-xl border ${isSuccess ? 'bg-[#22C55E]/10 border-[#22C55E]/30' : 'bg-[#EF4444]/10 border-[#EF4444]/30'}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${isSuccess ? 'bg-[#22C55E] text-white' : 'bg-[#EF4444] text-white'}`}>
          {isSuccess ? '✓' : '✖'}
        </div>
        <div>
          <h3 className={`text-lg font-bold ${isSuccess ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
            {isSuccess ? 'Verification Successful' : 'Verification Failed'}
          </h3>
          <p className="text-[#94A3B8] text-sm">{details.message}</p>
        </div>
      </div>
      {isSuccess && (
        <div className="bg-[#0B1220] p-4 rounded-lg mt-4 border border-[#111827]">
          <p className="text-xs text-[#94A3B8] mb-1">Verified Identity</p>
          <p className="text-sm text-[#F8FAFC] font-mono break-all">{details.did}</p>
        </div>
      )}
    </div>
  );
};

export default VerificationCard;