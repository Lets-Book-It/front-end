const path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            
            resolve: {
              fallback: {
                "util": require.resolve("util/")
              }
              }
          },
        },
      },
    ],
  },
};