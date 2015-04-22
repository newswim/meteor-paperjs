
var packageName = 'marcinn:paperjs';

Package.describe({
  name: packageName,
  version: '0.9.1',
  summary: 'Paper.js for Meteor',
  git: 'https://github.com/marc-inn/meteor-paperjs.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('paper.js', 'client');
  api.export('paper', 'client', 'server');
 // api.add_files('paper.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use(packageName);
  api.addFiles('paperjs-tests.js');
});
