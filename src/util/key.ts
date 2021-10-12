export const generateRandomKey: () => string = function generateRandomKey() {
  return (Math.random() + 1).toString(36).substr(2, 5);
};

export default {
  generateRandomKey,
};
