const NotificationBell = ({ count }) => {
  return (
    <button className="relative text-[#94A3B8] hover:text-[#F8FAFC] transition-colors p-2">
      <span className="text-xl">🔔</span>
      {count > 0 && (
        <span className="absolute top-0 right-0 w-4 h-4 bg-[#EF4444] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-[#111827]">
          {count}
        </span>
      )}
    </button>
  );
};

export default NotificationBell;