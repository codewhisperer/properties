var path = require("path");
module.exports = {
  entry: [
    './frontend/main.jsx'
  ],
  output: {
    filename: 'frontend.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader?insertPragma=React.DOM&harmony" },
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.js$/, loader: "uglify" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.html$/, loader: "raw" },
      { test: /\.(png|gif|jpg|eot)$/, loader: "file?name=[path][name].[ext]" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  bail: true,
  cache: true
};
