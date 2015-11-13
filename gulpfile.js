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
  console.log('Hola, welcome to gulp cordova');
  console.log(manifest);
  // place code for your default task here
});


gulp.task('generate:config', function generateConfig() {

  var
  configFile = 'config.xml';

  sed('-i', 'GENERATE:ID', manifest.id, configFile);
  sed('-i', 'GENERATE:VERSION', manifest.version, configFile);
  sed('-i', 'GENERATE:NAME', manifest.name, configFile);
  sed('-i', 'GENERATE:DESC', manifest.description, configFile);
  sed('-i', 'GENERATE:EMAIL', manifest.email, configFile);
  sed('-i', 'GENERATE:URL', manifest.url, configFile);
  sed('-i', 'GENERATE:TEAM', manifest.team, configFile);

});
