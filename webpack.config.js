var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./app/index.js', './app/sass/styles.scss'],
  output: {
    path: `${__dirname}/dist/assets`,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
      loader: 'css-loader?importLoaders=1',
      }),
    },
    {
    test: /\.(sass|scss)$/,
    loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }
  ]},
  plugins: [
    new ExtractTextPlugin({
      filename: './[name].bundle.css',
      allChunks: true,
    })
  ],
  devServer: {
    port: 3000,
    contentBase: './dist',
    inline: true //automatyczny update
  }
}