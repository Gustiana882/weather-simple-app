// module.exports = {
//     plugins: [
//         {
//             plugin: require('craco-plugin-scoped-css'),
//         },
//     ],
// }

// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }