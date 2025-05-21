import type { NextConfig } from "next";

const repo = 'botalone-web';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  /* config options here */
};

export default nextConfig;
