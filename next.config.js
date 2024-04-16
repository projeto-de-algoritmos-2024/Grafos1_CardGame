// next.config.js

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: [
            'cdn.ome.lt',
            'ovicio.com.br',
            'criticalhits.com.br',
            'assets.papelpop.com',
            'pm1.aminoapps.com',
            'integrallife.com',
            'i.pinimg.com'
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['next/babel', '@babel/preset-typescript'],
                },
            },
        });
        return config;
    },
};

module.exports = nextConfig;
