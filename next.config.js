const TerserPlugin = require('terser-webpack-plugin');
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', 
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config, { isServer }) => {
    if (!config.optimization) {
      config.optimization = {};
    }
    
    if (!config.optimization.minimizer) {
      config.optimization.minimizer = [];
    }
    
    config.externals = [
      ...(config.externals || []),
      'canvas',
      'jsdom',
    ];

    if (!isServer) {
      config.watchOptions = {
        ignored: [
          '**/.git/**', 
          '**/node_modules/**', 
          '**/.next/**'
        ],
      };
    }

    config.optimization.minimizer.push(
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      })
    );

    return config;
  },

  images: {
    domains: [
      'example.com',
      'yourcdn.com',
    ],
    unoptimized: false,
  },

  compress: true,
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { 
            key: 'X-DNS-Prefetch-Control', 
            value: 'on' 
          },
          { 
            key: 'Strict-Transport-Security', 
            value: 'max-age=63072000; includeSubDomains; preload' 
          },
          { 
            key: 'X-XSS-Protection', 
            value: '1; mode=block' 
          },
          { 
            key: 'X-Frame-Options', 
            value: 'SAMEORIGIN' 
          },
          { 
            key: 'X-Content-Type-Options', 
            value: 'nosniff' 
          },
          { 
            key: 'Referrer-Policy', 
            value: 'strict-origin-when-cross-origin' 
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'"
          }
        ]
      }
    ];
  },
};

// Optional: Sentry Configuration
const sentryWebpackPluginOptions = {
  silent: true,
};

// Conditionally apply Sentry configuration
module.exports = process.env.SENTRY_ENABLED 
  ? withSentryConfig(nextConfig, sentryWebpackPluginOptions) 
  : nextConfig;