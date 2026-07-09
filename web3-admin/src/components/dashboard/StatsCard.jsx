const StatsCard = ({ title, value, subtext, trend, colorClass }) => {
  return (
    <div className="bg-[#1E293B] p-6 rounded-xl border border-[#111827] shadow-lg">
      <h4 className="text-[#94A3B8] text-sm font-medium mb-1">{title}</h4>
      <p className="text-3xl font-bold text-[#F8FAFC]">{value}</p>
      <p className={`text-sm mt-2 flex items-center gap-1 ${trend === 'up' ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
        <span>{trend === 'up' ? '↑' : '↓'}</span> {subtext}
      </p>
    </div>
  );
};

export default StatsCard;