const WalletCard = ({ balance, network }) => {
  return (
    <div className="bg-gradient-to-br from-[#1E293B] to-[#0B1220] rounded-xl p-6 shadow-lg border border-[#111827]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-[#F8FAFC]">Wallet Balance</h3>
        <span className="px-2 py-1 bg-[#22C55E]/20 text-[#22C55E] text-xs font-bold rounded">{network}</span>
      </div>
      <p className="text-4xl font-bold text-white mb-1">{balance} <span className="text-xl text-[#94A3B8]">ETH</span></p>
      <p className="text-sm text-[#94A3B8]">Used for transaction fees</p>
    </div>
  );
};

export default WalletCard;