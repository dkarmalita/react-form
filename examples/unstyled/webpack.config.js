const path = require( 'path' )
const webpack = require( 'webpack' )

const isDevelopment = () => process.env.NODE_ENV === 'development'

module.exports = {
  entry : [
    'react-hot-loader/patch',
    './src/index.js',
  ],
  module : {
    rules : [
      {
        test    : /\.(js|jsx)$/,
        exclude : /node_modules/,
        use     : ['babel-loader'],
      },
    ],
  },
  resolve : {
    extensions : [ '*', '.js', '.jsx' ],
    alias      : {
      '@kard/react-form' : path.resolve( __dirname, '../../' ),
    },
    modules : [
      'node_modules',
      'src',
    ],
  },
  output : {
    path       : path.join( __dirname, '/dist' ),
    publicPath : '/',
    filename   : 'bundle.js',
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer : {
    contentBase : './dist',
    hot         : true,
    compress    : true,
    port        : 9000,
  },
}
