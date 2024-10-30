import crypto from 'crypto';

export const hashPassword = (password: string): string => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

export const comparePassword = (password: string, storedHash: string): boolean => {
  const passwordHash = hashPassword(password);
  console.log("Comparing:", passwordHash, storedHash); // Exibe ambos os hashes
  return passwordHash === storedHash;
};
