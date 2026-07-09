const Loader = ({ size = 'md' }) => {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-4",
    lg: "w-12 h-12 border-4"
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`${sizes[size]} border-[#1E293B] border-t-[#2563EB] rounded-full animate-spin`}></div>
    </div>
  );
};

export default Loader;