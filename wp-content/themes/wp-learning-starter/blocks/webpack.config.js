module.exports = {
	entry: './block.js',
	output: {
		path: __dirname,
		filename: './block.build.js',
	},
	devServer: {
        inline: false
    },
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};