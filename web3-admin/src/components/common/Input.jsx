const Input = ({ label, type = 'text', placeholder, value, onChange, className = '', required = false }) => {
  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      {label && <label className="text-sm font-medium text-[#94A3B8]">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2 bg-[#0B1220] border border-[#111827] rounded-lg text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
      />
    </div>
  );
};

export default Input;