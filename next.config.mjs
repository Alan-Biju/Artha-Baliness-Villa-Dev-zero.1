/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        implementation: 'sass-embedded',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tor.cloud.appwrite.io',
                pathname: '/v1/storage/buckets/**',
            },
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

export default nextConfig;
