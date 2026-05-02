/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploads-master.aws.bengalmeat.com',
      },
      
    ],
  },
};

export default nextConfig;