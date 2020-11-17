const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		main: "./src/index.js"
	},
	output: {
		filename: "js/[name].[contenthash].chunk.js",
		path: path.resolve(__dirname, "./build")
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash].css"
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		})
	],
	optimization: {
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all"
				}
			}
		}
	}
};
