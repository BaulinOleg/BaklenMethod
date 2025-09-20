// import type { NextConfig } from "next"
// import path from "path"
//
// const nextConfig: NextConfig = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'src/styles')],
//     additionalData: `
//       @use "variables" as *;
//       @use "mixins" as *;
//     `,
//   },
//
//   webpack(config) {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@': path.resolve(__dirname, 'src'),
//     };
//     return config;
//   },
//
// };
//
// export default nextConfig;


import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')], // alias @ на src
  },

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

export default nextConfig;
