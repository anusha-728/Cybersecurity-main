export const authService = {
  login: async (credentials) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.id && credentials.passkey) {
          resolve({ status: 'success', token: 'mock-jwt-token-123' });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  },
  
  logout: () => {
    localStorage.removeItem('authToken');
  }
};