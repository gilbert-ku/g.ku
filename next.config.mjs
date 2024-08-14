// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     async rewrites() {
//         return [
//           {
//             source: '/media/:path*',
//             destination: 'http://localhost:8000/media/:path*',
//           },
//         ];
//       },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['127.0.0.1'],
  },
}

export default nextConfig;
