/* eslint-disable sort-keys */
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// TODO: for prod:
// - no HMR
// https://webpack.js.org/guides/production/
// add scss

module.exports = {
	mode : 'development',
	entry : [ 'react-hot-loader/patch', './src/index.js' ],
	output : {
		path : path.resolve(__dirname, 'dist'),
		filename : 'bundle.js'
	},
	module : {
		rules : [ {
			test : /\.(js|jsx)$/,
			exclude : /node_modules/,
			use : 'babel-loader'
		}, {
			test : /\.css$/,
			use : [ 'style-loader', 'css-loader' ]
		}, {
			test : /\.svg$/,
			use : 'file-loader'
		}, {
			test : /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
			use : [ {
				loader : 'file-loader',
				options : {
					name : '[name].[ext]',
					outputPath : '.'
				}
			} ]
		} ]	
	},
	stats : { 
		logging : true
	},
	resolve : {
		extensions : [ '*', '.js', '.jsx' ],
		alias : {
			'react-dom' : '@hot-loader/react-dom'
		}
	},
	devServer : {
		contentBase : path.join(__dirname, 'dist')
	},
	plugins : [ new HtmlWebpackPlugin({
		title : 'Development',
		template : 'src/index.html'
	}) ]
};