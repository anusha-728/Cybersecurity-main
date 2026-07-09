const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false, type = 'button' }) => {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] text-white shadow-lg hover:shadow-blue-500/25 active:scale-95",
    secondary: "bg-[#1E293B] hover:bg-[#111827] text-[#F8FAFC] border border-[#1E293B] hover:border-[#2563EB]/50 active:scale-95",
    danger: "bg-gradient-to-r from-[#EF4444] to-[#b91c1c] text-white shadow-lg hover:shadow-red-500/25 active:scale-95",
    success: "bg-gradient-to-r from-[#22C55E] to-[#15803d] text-white shadow-lg hover:shadow-green-500/25 active:scale-95",
    outline: "bg-transparent border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/10 active:scale-95"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;