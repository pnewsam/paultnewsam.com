const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // your existing config
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = withContentlayer(nextConfig);
