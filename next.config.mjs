/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ['a.espncdn.com', 'upload.wikimedia.org'],
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: securityHeaders,
  //     },
  //   ];
  // },
};

export default nextConfig;
