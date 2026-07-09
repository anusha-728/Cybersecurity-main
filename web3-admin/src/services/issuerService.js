export const issuerService = {
  issueCredential: async (payload) => {
    console.log("Issuing credential to blockchain...", payload);
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true, txHash: '0xabc123...' }), 1500);
    });
  },
  
  getIssuedHistory: async () => {
    return [
      { id: 1, type: 'Academic Degree', recipient: 'did:ethr:0x89...3c', date: 'Today', status: 'Active' },
      { id: 2, type: 'Employment Record', recipient: 'did:ethr:0x12...9f', date: 'Yesterday', status: 'Active' }
    ];
  }
};