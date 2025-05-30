const isProd = process.env.NODE_ENV === 'production';

export const config = {
  basePath: isProd ? '/kartikay-portfolio' : '',
  fullUrl: isProd ? 'https://kartikayb.github.io/kartikay-portfolio' : 'http://localhost:3000',
}; 