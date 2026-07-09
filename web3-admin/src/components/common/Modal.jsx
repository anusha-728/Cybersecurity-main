const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#1E293B] border border-[#111827] rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in">
        <div className="flex justify-between items-center p-4 border-b border-[#111827]">
          <h3 className="text-lg font-bold text-[#F8FAFC]">{title}</h3>
          <button onClick={onClose} className="text-[#94A3B8] hover:text-[#EF4444] transition-colors">
            ✖
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;