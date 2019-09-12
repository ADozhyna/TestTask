const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		path.resolve('src/index.js'),
	],
	output: {
		path: path.resolve(__dirname, '.', 'dist'),
		filename: 'index-bundle.js',
		publicPath: '/',
	},
	module: {
		rules: [{
			test: /\.jsx?/,
			exclude: /node_modules/,
			use: 'babel-loader?babelrc=false&extends=' + path.resolve(__dirname, '.babelrc')
		}],
	},
	resolve: {
		extensions: ['.js', 'jsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	resolveLoader: {
		modules: [
			'node_modules',
		],
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './dist',
		hot: true,
	},
}