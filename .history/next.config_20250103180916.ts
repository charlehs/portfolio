import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/your-repo-name", // Replace "your-repo-name" with your GitHub repository name
  trailingSlash: true,
};

export default nextConfig;
