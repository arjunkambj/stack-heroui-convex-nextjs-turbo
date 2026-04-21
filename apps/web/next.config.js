/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "4db8uvywgt0gx7zv.public.blob.vercel-storage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pfxwiiakjmpwa0d2.public.blob.vercel-storage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "deifkwefumgah.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
