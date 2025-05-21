/** @type {import('next').NextConfig} */
const repo = 'botalone-web';

const nextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

module.exports = nextConfig; 