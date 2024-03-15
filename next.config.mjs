/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "admissions.utcc.ac.th",
      },
    ],
  },
};

export default nextConfig;
