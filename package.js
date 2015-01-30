Package.describe({
  name: 'marcinn:paperjs',
  version: '0.9.1',
  summary: 'Paper.js for Meteor',
  git: 'https://github.com/marc-inn/meteor-paperjs.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('marcinn:paperjs.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('marcinn:paperjs');
  api.addFiles('marcinn:paperjs-tests.js');
});