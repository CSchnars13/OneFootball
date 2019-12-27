module.exports = {

  mode: 'development',
  // NEW CODE:

  // Determine how the different types of modules will be treated.
  // https://webpack.js.org/configuration/module
  // https://webpack.js.org/concepts#loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply this rule to files ending in .js
        exclude: /node_modules/, // Don't apply to files residing in node_modules
        use: { // Use the following loader and options
          loader: 'babel-loader',
          // We can pass options to both babel-loader and Babel. This option object
          // will replace babel.config.js
          options: {
            presets: [
              ['@babel/preset-env', {

                // Configure how @babel/preset-env handles polyfills from core-js.
                // https://babeljs.io/docs/en/babel-preset-env
                useBuiltIns: 'usage',

                // Specify the core-js version. Must match the version in package.json
                corejs: 3,

                // Specify which environments we support/target for our project.
                // (We have chosen to specify targets in .browserslistrc, so there
                // is no need to do it here.)
                // targets: "",
              }],
              '@babel/preset-react'
            ],
          },
        }
      }
    ],
  },
  devServer: {
    // The dev server will serve content from this directory.
    contentBase: './dist',

    // Specify a host. (Defaults to 'localhost'.)
    host: 'localhost',

    // Specify a port number on which to listen for requests.
    port: 8080,

    // When using the HTML5 History API (you'll probably do this with React
    // later), index.html should be served in place of 404 responses.
    historyApiFallback: true,

    // Show a full-screen overlay in the browser when there are compiler
    // errors or warnings.
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  // END NEW CODE

};
