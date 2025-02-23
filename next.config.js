/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: false, // Jika error terkait appDir
    },
    reactStrictMode: true,
    webpack: (config) => {
      config.infrastructureLogging = { level: 'error' };
      return config;
    }
  };
  
  module.exports = nextConfig;
  