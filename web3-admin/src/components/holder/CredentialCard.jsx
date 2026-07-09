const CredentialCard = ({ type, issuer, date, status }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-[#0B1220] rounded-lg border border-[#111827] hover:border-[#2563EB] transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#2563EB]/20 flex items-center justify-center text-[#2563EB]">
          {type.includes('Degree') ? '🎓' : '📄'}
        </div>
        <div>
          <p className="text-[#F8FAFC] font-medium">{type}</p>
          <p className="text-xs text-[#94A3B8]">Issued by: {issuer} on {date}</p>
        </div>
      </div>
      <span className={`px-3 py-1 text-xs font-bold rounded-full ${status === 'Valid' ? 'bg-[#22C55E]/10 text-[#22C55E]' : 'bg-[#EF4444]/10 text-[#EF4444]'}`}>
        {status}
      </span>
    </div>
  );
};

export default CredentialCard;