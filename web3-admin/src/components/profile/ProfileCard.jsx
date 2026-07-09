const ProfileCard = ({ user }) => {
  return (
    <div className="flex items-center gap-4 bg-[#1E293B] p-4 rounded-xl border border-[#111827]">
      <div className="w-12 h-12 rounded-full bg-[#2563EB] flex items-center justify-center text-lg text-white font-bold">
        {user.initials}
      </div>
      <div>
        <h4 className="text-[#F8FAFC] font-bold">{user.name}</h4>
        <p className="text-xs text-[#94A3B8]">{user.role}</p>
      </div>
    </div>
  );
};

export default ProfileCard;