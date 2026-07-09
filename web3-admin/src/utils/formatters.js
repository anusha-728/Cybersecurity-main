/**
 * Truncates a DID or Wallet Address for clean UI display
 * e.g., did:ethr:0x1234567890abcdef -> did:ethr:0x1234...cdef
 */
export const truncateDID = (did, startChars = 14, endChars = 4) => {
  if (!did || did.length <= startChars + endChars) return did;
  return `${did.substring(0, startChars)}...${did.substring(did.length - endChars)}`;
};

/**
 * Formats a date object or timestamp into a readable string
 */
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Generates a mock risk score color based on value
 */
export const getRiskColor = (score) => {
  if (score < 30) return 'text-[#22C55E]'; // Success/Low Risk
  if (score < 70) return 'text-[#F59E0B]'; // Warning/Medium Risk
  return 'text-[#EF4444]'; // Danger/High Risk
};