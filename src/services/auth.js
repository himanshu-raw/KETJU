// Mock authentication service to simulate wallet connection and role resolution

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Simulated database of wallet addresses and their registered roles
const MOCK_USERS = {
  '0x71C...97d1': { role: 'farmer', name: 'Rajesh Kumar', organization: 'Green Valley Farms' },
  '0x3F2...8b4C': { role: 'processor', name: 'Amit Singh', organization: 'FreshPack Foods Ltd.' },
  '0x9E1...2a5D': { role: 'distributor', name: 'Priya Desai', organization: 'QuickMesh Logistics' },
  '0x4D5...1c8B': { role: 'retailer', name: 'Vikram Patel', organization: 'RetailMax India' },
  '0x1A0...9e2F': { role: 'admin', name: 'System Admin', organization: 'KETJU Network' },
};

export const authService = {
  /**
   * Simulates connecting a MetaMask wallet
   * @param {string} roleToSimulate - the role we want to mock logging in as
   */
  connectWallet: async (roleToSimulate = 'farmer') => {
    // Simulate network delay
    await delay(800);
    
    // Find a mock user matching the requested role
    const entry = Object.entries(MOCK_USERS).find(([_, user]) => user.role === roleToSimulate);
    
    if (!entry) {
      throw new Error('Unknown simulation role');
    }
    
    const [address, userData] = entry;
    
    const userSession = {
      address,
      ...userData,
    };
    
    // Persist session
    localStorage.setItem('ketju_user', JSON.stringify(userSession));
    
    return userSession;
  },

  /**
   * Disconnects the wallet
   */
  disconnectWallet: async () => {
    await delay(300);
    localStorage.removeItem('ketju_user');
  },

  /**
   * Gets the currently authenticated user
   */
  getCurrentUser: () => {
    const userStr = localStorage.getItem('ketju_user');
    return userStr ? JSON.parse(userStr) : null;
  }
};
