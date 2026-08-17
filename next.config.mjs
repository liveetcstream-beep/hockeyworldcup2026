/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/broadcasters',
        destination: '/hockey-live-streaming',
        permanent: true,
      },
      {
        source: '/tickets',
        destination: '/schedule',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
