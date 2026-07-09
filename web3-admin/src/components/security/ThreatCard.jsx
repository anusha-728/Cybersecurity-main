const ThreatCard = ({ type, count, severity }) => {
  const colors = {
    critical: 'text-[#EF4444] border-[#EF4444]',
    warning: 'text-[#F59E0B] border-[#F59E0B]',
    info: 'text-[#2563EB] border-[#2563EB]'
  };

  return (
    <div className={`bg-[#1E293B] p-5 rounded-xl border-l-4 shadow-lg ${colors[severity]} border-t border-r border-b border-[#111827]`}>
      <h4 className="text-[#94A3B8] text-sm font-medium mb-2">{type}</h4>
      <div className="flex justify-between items-end">
        <p className={`text-3xl font-bold text-[#F8FAFC]`}>{count}</p>
        <span className={`text-xs uppercase font-bold ${colors[severity].split(' ')[0]}`}>{severity}</span>
      </div>
    </div>
  );
};

export default ThreatCard;