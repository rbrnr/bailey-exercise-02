module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: file => (/node_modules/.test(file))
      },
      {
        test: /\.ts$/,
        exclude: file => (/node_modules/.test(file)),
        use: [{ loader: 'ts-loader' }]
      }
    ]
  },
  output: {
    filename: 'scripts.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
};