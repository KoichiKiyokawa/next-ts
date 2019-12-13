const path = require('path')
const withCss = require('@zeit/next-css')

module.exports = withCss({
  webpack(config) {
    config.resolve.alias['~'] = path.resolve(__dirname, './src')
    return config
  }
})

