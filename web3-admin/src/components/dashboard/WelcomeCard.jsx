const WelcomeCard = ({ adminName }) => {
  return (
    <div className="bg-gradient-to-r from-[#2563EB] to-[#1E293B] rounded-xl p-6 shadow-lg border border-[#111827]">
      <h2 className="text-2xl font-bold text-white mb-2">Welcome back, {adminName}! 👋</h2>
      <p className="text-[#F8FAFC]/80 max-w-2xl text-sm">
        Your Web3 Identity ecosystem is running smoothly. There are 5 pending verifications and 2 active security alerts requiring your attention today.
      </p>
    </div>
  );
};

export default WelcomeCard;