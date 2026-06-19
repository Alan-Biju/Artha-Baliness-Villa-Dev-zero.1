/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        implementation: 'sass-embedded',
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
