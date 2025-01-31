/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      // Bỏ qua lỗi TypeScript khi build
      ignoreBuildErrors: true,
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*', // Endpoint proxy trên frontend
          destination: 'https://api-core.dsp.one/api/:path*', // URL API thực tế
        },
        {
          source: '/:path*', // Đảm bảo rằng đường dẫn này khớp với API
          destination: 'https://api-core.dsp.one/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;