/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
          protocol: "https",
          hostname: "syrpoc.pockethost.io",
          port: "",
          pathname: "/**"
        }]
    },
    reactStrictMode: false,
};

export default nextConfig;
