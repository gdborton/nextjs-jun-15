/** @type {import('next').NextConfig} */
const nextConfig = {};
const withVercelToolbar = require("@vercel/toolbar/plugins/next");

module.exports = withVercelToolbar(nextConfig);
