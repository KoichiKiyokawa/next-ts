const path = require('path')
// const webpack = require('webpack')

module.exports = {
  webpack(config, _) {
    console.log(path.resolve(__dirname, './src'))
    config.resolve.alias['~'] = path.resolve(__dirname, './src')
    return config
  }
}

