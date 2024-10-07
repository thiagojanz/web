const path = require('path');

module.exports = {
  entry: './src/index.js', // O seu ponto de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // O diretório de saída
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Usa o Babel para transpilar o JavaScript
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Para resolver arquivos .jsx
  },
  devtool: 'source-map', // Para depuração
};
