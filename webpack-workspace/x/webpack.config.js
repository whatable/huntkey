module.exports = {
	entry: './entry.js',
	output: {
		path: __dirname,
		filename: 'bindle.js'
	},
	module: {
		loaders: [
			{test:/\.css$/, loader:'style-loader!css-loader'}
		]
	}
}