/**
 * [generate:config]    Generate configuration file (config.xml) from manifest.json
 * [platform:add]       Cordova add plaforms (Android|iOS)
 * [plugins:install]    Cordova add plugins depedencies
 * [bower:install]      Check www folder has bower.json file, if it does then run `bower install`
 * [keystore:generate]  Will generate keystore for the application
 * [keystore:release]   Release apk til it ready to market
 *
 * [init]  Will execute some tasks below serialize:
 *          -   [generate:config]
 *          -   [platform:add]
 *          -   [plugins:install]
 *          -   [bower:install]
 *
 */

var
gulp = require('gulp'),
manifest = require('./manifest.json');

// shelljs as global requirement
require('shelljs/global');


gulp.task('default', function() {

  ls('*.json').forEach(function(file) {
      console.log(file);
  });

  console.log('Hola, welcome to gulp cordova');
  console.log(manifest);
  // place code for your default task here
});


gulp.task('generate:config', function generateConfig() {
  var
  configFile = 'config.xml';
  sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
  sed('-i', /.*REMOVE_THIS_LINE.*\n/, '', file);
  sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, cat('macro.js'), file);
});
