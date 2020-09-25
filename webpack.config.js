const path = require("path");


module.exports = {
	entry:{
		blocks:'./src/index.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "assets/imgs"
					}
				}
			},
			{
				test: /editor\.s[ac]ss$/i,
				use: [{
						loader: 'file-loader',
						options: {
							name: 'blocks.[name].css',
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /style\.s[ac]ss$/i,
				use: [{
						loader: 'file-loader',
						options: {
							name: 'blocks.[name].css',
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			},
		],
	},
}
