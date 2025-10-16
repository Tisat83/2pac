import withPWA from 'next-pwa';
const isProd = process.env.NODE_ENV === 'production';
const withPWANext = withPWA({
  dest: 'public',
  disable: !isProd,
  runtimeCaching: [
    {
      urlPattern: ({request}) => request.destination === 'image',
      handler: 'CacheFirst',
      options: { cacheName: 'images', expiration: { maxEntries: 100, maxAgeSeconds: 2592000 } }
    },
    {
      urlPattern: ({url}) => url.pathname.startsWith('/api/'),
      handler: 'NetworkFirst',
      options: { cacheName: 'api' }
    }
  ]
});
const config = { reactStrictMode: true, experimental: { typedRoutes: true }, output: 'standalone' };
export default withPWANext(config);
