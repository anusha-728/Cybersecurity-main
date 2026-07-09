const CredentialHistory = ({ history }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse text-sm">
        <thead>
          <tr className="border-b border-[#111827] text-[#94A3B8]">
            <th className="pb-3 font-medium">Type</th>
            <th className="pb-3 font-medium">Recipient DID</th>
            <th className="pb-3 font-medium">Date</th>
            <th className="pb-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="text-[#F8FAFC]">
          {history.map((item, i) => (
            <tr key={i} className="border-b border-[#111827] hover:bg-[#0B1220] transition-colors">
              <td className="py-4">{item.type}</td>
              <td className="py-4 text-[#2563EB] font-mono text-xs">{item.recipient}</td>
              <td className="py-4 text-[#94A3B8]">{item.date}</td>
              <td className="py-4">
                <span className={`px-2 py-1 rounded text-xs ${item.status === 'Active' ? 'bg-[#22C55E]/10 text-[#22C55E]' : 'bg-[#EF4444]/10 text-[#EF4444]'}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CredentialHistory;