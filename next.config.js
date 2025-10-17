const isProd = process.env.NODE_ENV === 'production';
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd,
  runtimeCaching: [
    {
      // cache images
      urlPattern: ({ request }) => request.destination === 'image',
      handler: 'CacheFirst',
      options: { cacheName: 'images', expiration: { maxEntries: 100, maxAgeSeconds: 30 * 24 * 3600 } },
    },
    {
      // cache API with network-first
      urlPattern: ({ url }) => url.pathname.startsWith('/api/'),
      handler: 'NetworkFirst',
      options: { cacheName: 'api' },
    },
  ],
});

const config = {
  reactStrictMode: true,
  experimental: { typedRoutes: true },
  output: 'standalone',
};

module.exports = withPWA(config);
