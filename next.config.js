// next.config.js

const nextConfig = {
    images: {
        domains: ['cdn.ome.lt'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.ome.lt',
                port: '',
                pathname: '/account123/**',
            },
        ],
    },
};

module.exports = nextConfig;
