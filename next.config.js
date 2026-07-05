/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*.php', 
        
        destination: '/404', 
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
