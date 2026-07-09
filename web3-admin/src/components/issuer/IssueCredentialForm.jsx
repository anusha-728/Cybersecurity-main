const IssueCredentialForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-[#94A3B8] mb-1">Recipient DID</label>
        <input type="text" required className="w-full px-4 py-2 bg-[#0B1220] border border-[#111827] rounded-lg text-[#F8FAFC] focus:ring-2 focus:ring-[#2563EB] focus:outline-none" placeholder="did:ethr:..." />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#94A3B8] mb-1">Credential Type</label>
        <select className="w-full px-4 py-2 bg-[#0B1220] border border-[#111827] rounded-lg text-[#F8FAFC] focus:ring-2 focus:ring-[#2563EB] focus:outline-none">
          <option value="degree">Academic Degree</option>
          <option value="employment">Employment Record</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#94A3B8] mb-1">Expiration Date</label>
        <input type="date" className="w-full px-4 py-2 bg-[#0B1220] border border-[#111827] rounded-lg text-[#F8FAFC] focus:ring-2 focus:ring-[#2563EB] [color-scheme:dark]" />
      </div>
      <button type="submit" className="w-full py-3 bg-[#22C55E] hover:bg-green-600 text-white font-bold rounded-lg transition-colors mt-4">
        Sign & Issue
      </button>
    </form>
  );
};

export default IssueCredentialForm;