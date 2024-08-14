
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['127.0.0.1'],
//   },
// }

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000', // Specify the port if your Django server is running on a specific port
        pathname: '/media/**', // Adjust the path to match your media file structure
      },
    ],
  },
}

export default nextConfig;  

