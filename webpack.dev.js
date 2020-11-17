const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
		open: true,
		openPage: "http://localhost:8080",
		host: "0.0.0.0",
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	plugins: [new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })],
	optimization: {
		moduleIds: "named",
		chunkIds: "named"
	}
});
