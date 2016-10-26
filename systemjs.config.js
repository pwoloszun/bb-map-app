/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',
      'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
      'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
      'text': 'npm:systemjs-plugin-text/text.js',

      // bb bundles
      'underscore': "npm:underscore/underscore.js",
      'jquery': "npm:jquery/dist/jquery.js",
      'backbone': "npm:backbone/backbone.js",
      'handlebars': "npm:handlebars/dist/handlebars.js"
    },

    transpiler: 'plugin-babel',

    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
