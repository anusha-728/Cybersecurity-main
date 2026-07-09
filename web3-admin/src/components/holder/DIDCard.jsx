const DIDCard = ({ did, publicKey }) => {
  return (
    <div className="bg-[#1E293B] rounded-xl p-6 shadow-lg border border-[#111827]">
      <h3 className="text-lg font-bold text-[#F8FAFC] mb-4">Decentralized Identity</h3>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-[#94A3B8] mb-1">DID URI</p>
          <div className="flex justify-between items-center bg-[#0B1220] p-3 rounded border border-[#111827]">
            <span className="text-sm text-[#2563EB] font-mono truncate">{did}</span>
            <button className="text-[#94A3B8] hover:text-white">📋</button>
          </div>
        </div>
        <div>
          <p className="text-sm text-[#94A3B8] mb-1">Public Key</p>
          <div className="bg-[#0B1220] p-3 rounded border border-[#111827]">
            <span className="text-xs text-[#F8FAFC] font-mono break-all">{publicKey}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DIDCard;