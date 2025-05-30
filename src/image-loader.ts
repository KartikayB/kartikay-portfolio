export default function customImageLoader({ src }: { src: string }) {
  if (process.env.NODE_ENV === 'production') {
    return `https://kartikayb.github.io/kartikay-portfolio${src}`;
  }
  return src;
} 