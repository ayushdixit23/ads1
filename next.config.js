/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //   images: {
  //     remotePatterns: [
  //       {
  //         protocol: "https",
  //         hostname: "minio.grovyo.site",
  //       },
  //     ],
  //   },
  images: {
    domains: ["minio.grovyo.xyz", "dt46iilh1kepb.cloudfront.net"]
  },
};

module.exports = nextConfig;
