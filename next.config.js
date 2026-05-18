// /** @type {import('next').NextConfig} */
// const nextConfig = {output: 'export', //  tells Next.js to create a static export
//   images: {
//     unoptimized: true, //  needed if you use next/image
//   },
//    trailingSlash: true, //  important for shared hosting
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // tells Next.js to create a static export
  images: {
    unoptimized: true, // needed if you use next/image (no Image Optimization on static hosting)
  },
  trailingSlash: true, // important for shared hosting (ensures /about/ works instead of /about)
};

module.exports = nextConfig;
