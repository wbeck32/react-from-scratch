const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');


module.exports = {
  entry : './src/index.js',
  mode : 'development',
  module : {
    rules : [
			{
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test : /\.(js|jsx)$/,
        exclude : /(node_modules|bower_components)/,
        loader : 'babel-loader',
        options : {
          presets : ['@babel/env']
        }
      },
      {
        test : /\.css$/,
        use : ['style-loader', 'css-loader']
      }
    ]
  },
  resolve : {
    extensions : ['*', '.js', '.jsx']
  },
  output : {
    path : path.resolve(__dirname, 'dist/'),
    publicPath : '/dist/',
    filename : 'bundle.js'
  },
  devServer : {
    contentBase : path.join(__dirname, 'public/'),
    port : 3000,
    publicPath : 'http://localhost:3000/dist/',
    hotOnly : true,
		https:true
  },
  plugins : [new webpack.HotModuleReplacementPlugin(), new Dotenv()]
};
