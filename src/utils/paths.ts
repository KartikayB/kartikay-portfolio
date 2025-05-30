export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/kartikay-portfolio' : '';
  return `${basePath}${path}`;
}; 