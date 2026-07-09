const Footer = () => {
  return (
    <footer className="w-full bg-[#111827] border-t border-[#1E293B] py-4 px-6 flex items-center justify-between mt-auto">
      <p className="text-sm text-[#94A3B8]">
        © {new Date().getFullYear()} Web3 Identity Portal. All rights reserved.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-sm text-[#94A3B8] hover:text-[#2563EB] transition-colors">Terms</a>
        <a href="#" className="text-sm text-[#94A3B8] hover:text-[#2563EB] transition-colors">Privacy</a>
        <a href="#" className="text-sm text-[#94A3B8] hover:text-[#2563EB] transition-colors">API Docs</a>
      </div>
    </footer>
  );
};

export default Footer;