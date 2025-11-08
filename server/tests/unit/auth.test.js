const { generateToken, verifyToken } = require('../../src/utils/auth');

describe('Auth Utilities', () => {
  describe('generateToken', () => {
    it('should generate a valid JWT token', () => {
      const user = { _id: '507f1f77bcf86cd799439011' };
      const token = generateToken(user);
      
      expect(token).toBeDefined();
      expect(typeof token).toBe('string');
      expect(token.split('.')).toHaveLength(3);
    });
    
    it('should include user id in token payload', () => {
      const user = { _id: '507f1f77bcf86cd799439011' };
      const token = generateToken(user);
      const decoded = verifyToken(token);
      
      expect(decoded.id).toBe(user._id);
    });
  });
  
  describe('verifyToken', () => {
    it('should verify a valid token', () => {
      const user = { _id: '507f1f77bcf86cd799439011' };
      const token = generateToken(user);
      const decoded = verifyToken(token);
      
      expect(decoded).toBeDefined();
      expect(decoded.id).toBe(user._id);
    });
    
    it('should throw error for invalid token', () => {
      const invalidToken = 'invalid.token.here';
      
      expect(() => verifyToken(invalidToken)).toThrow();
    });
  });
});
