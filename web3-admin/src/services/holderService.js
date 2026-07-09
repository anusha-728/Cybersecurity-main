export const holderService = {
  getWalletInfo: async (did) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          did: 'did:ethr:0x4f...9a1b',
          publicKey: '0x04a8b...19c2d',
          credentialsCount: 8,
          status: 'active'
        });
      }, 500);
    });
  },
  
  getCredentials: async () => {
    return [
      { id: '1', type: 'University Degree', date: '2023-10-12', status: 'valid' },
      { id: '2', type: 'Driver License', date: '2023-11-05', status: 'valid' }
    ];
  }
};