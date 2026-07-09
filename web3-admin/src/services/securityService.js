export const securityService = {
  getThreatLogs: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, type: 'Fake DID Attempt', ip: '192.168.1.105', status: 'Blocked', time: '11:40:22 AM' },
          { id: 2, type: 'Failed Login', ip: '10.0.0.42', status: 'Warning', time: '11:25:01 AM' }
        ]);
      }, 800);
    });
  },

  getSystemHealth: async () => {
    return {
      riskScore: 12,
      threatLevel: 'LOW',
      activeAttacks: 0
    };
  }
};