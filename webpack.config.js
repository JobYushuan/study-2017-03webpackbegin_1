const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

  entry: './src/index.js',
  output: {
	  path: path.resolve( __dirname, 'build' ),
	  filename: 'bundle.js',
	  publicPath:'build/'
  },
  module: {
     rules: 
	 [
	   {
	    use: 'babel-loader' ,
        test: /\.js$/		
	   }
	 ,
	   {
		loader:  ExtractTextPlugin.extract({
		         loader: 'css-loader'
		}),
        test: /\.css$/		 
	   },
	   {
		 test: /\.(jpe?g|png|gif|svg)$/,
		 use: [
		   	    {
		         loader: 'url-loader',
		         options: { limit: 40000 } //40k
             },
		 	'image-webpack-loader?bypassOnDebug'
		 ]
	   }
     ],
   },
 plugins: [
           new ExtractTextPlugin('style.css')
  ]

 };

module.exports = config;