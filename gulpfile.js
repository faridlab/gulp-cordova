/**
 * [generate:config]    Generate configuration file (config.xml) from manifest.json
 * [platform:install]   Cordova add plaforms (Android|iOS)
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
colors = require('colors/safe'),
manifest = require('./manifest.json');

// shelljs as global requirement
require('shelljs/global');


gulp.task('default', function() {
  console.log('Hola, welcome to gulp cordova');
  console.log(manifest);
  // place code for your default task here
});

gulp.task('init', ['generate:config', 'platform:install', 'plugins:install']);

gulp.task('platform:install', function() {
  if (!which('cordova')) {
    echo(colors.red('Sorry, this script requires cordova'));
    echo(colors.green('Try to install cordova: `npm install [-g] cordova`'));
    exit(1);
  }

  for(var i in manifest.platforms) {
    exec('cordova platform add ' + manifest.platforms[i]);
  }
});


gulp.task('plugins:install', function() {
  if (!which('cordova')) {
    echo(colors.red('Sorry, this script requires cordova'));
    echo(colors.green('Try to install cordova: `npm install [-g] cordova`'));
    exit(1);
  }

  for(var i in manifest.plugins) {
    exec('cordova plugins add ' + i +'@'+ manifest.plugins[i]);
  }

});


gulp.task('generate:config', function generateConfig() {

  var
  configFile = 'config.xml';

  sed('-i', 'GENERATE:ID', manifest.id, configFile);
  console.log(colors.blue('Generate id: '), colors.yellow(manifest.id));
  sed('-i', 'GENERATE:VERSION', manifest.version, configFile);
  console.log(colors.blue('Generate version: '), colors.yellow(manifest.version));
  sed('-i', 'GENERATE:NAME', manifest.name, configFile);
  console.log(colors.blue('Generate name: '), colors.yellow(manifest.name));
  sed('-i', 'GENERATE:DESC', manifest.description, configFile);
  console.log(colors.blue('Generate description: '), colors.yellow(manifest.description));
  sed('-i', 'GENERATE:EMAIL', manifest.email, configFile);
  console.log(colors.blue('Generate email: '), colors.yellow(manifest.email));
  sed('-i', 'GENERATE:URL', manifest.url, configFile);
  console.log(colors.blue('Generate url: '), colors.yellow(manifest.url));
  sed('-i', 'GENERATE:TEAM', manifest.team, configFile);
  console.log(colors.blue('Generate team: '), colors.yellow(manifest.team));
  console.log(colors.green('File config.xml generated successfuly !.'));

});
