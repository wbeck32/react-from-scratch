/* eslint-disable sort-keys */
const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
	entry : [ 'react-hot-loader/patch', './src/index.js' ],
	output : {
		path : path.resolve(__dirname, 'dist'),
		filename : 'bundle.js'
	},
	module : {
		rules : [ {
			test : /\.(js|jsx)$/,
			use : 'babel-loader',
			exclude : /node_modules/
		}, {
			test : /\.css$/,
			use : [ 'style-loader', 'css-loader' ]
		}, {
			test : /\.svg$/,
			use : 'file-loader'
		} ]
	},
	resolve : {
		extensions : [ '.js', '.jsx' ],
		alias : {
			'react-dom' : '@hot-loader/react-dom'
		}
	},
	devServer : {
		contentBase : './dist'
	},
	plugins : [ new CopyPlugin({
		patterns : [ { from : 'src/index.html' } ]
	}), new HtmlWebpackPlugin({
		appMountId : 'app',
		filename : 'index.html'
	}), new CleanWebpackPlugin() ]
};

module.exports = config;