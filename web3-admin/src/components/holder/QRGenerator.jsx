const QRGenerator = ({ value }) => {
  return (
    <div className="bg-white p-4 rounded-xl inline-block shadow-md">
      {/* In a real app, use react-qr-code or qrcode.react here */}
      <div className="w-48 h-48 border-4 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-400 font-bold mb-2">QR Code</p>
          <p className="text-xs text-gray-400 truncate max-w-[120px] mx-auto">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;