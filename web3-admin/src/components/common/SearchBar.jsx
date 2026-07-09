const SearchBar = ({ placeholder = "Search...", onChange }) => {
  return (
    <div className="relative w-full max-w-md">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#94A3B8]">
        🔍
      </span>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-2 bg-[#1E293B] border border-[#111827] rounded-lg text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
      />
    </div>
  );
};

export default SearchBar;