import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from 'path';

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.iran.liara.run',
        port: '',
        pathname: '/public/**',
      },
    ],
  },
  async rewrites() {
    return [];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
            typescript: true,
            dimensions: false,
          },
        },
      ],
    });

    // Add alias for @public/*
    config.resolve.alias['@public'] = path.resolve(__dirname, 'public');

    return config;
  },
};

export default withNextIntl(nextConfig);
