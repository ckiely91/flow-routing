// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package
'use strict';

Package.describe({
  name: 'useraccounts:flow-routing-ck',
  summary: 'UserAccounts package providing routes configuration capability via kadira:flow-router.',
  version: '1.13.1',
  git: 'https://github.com/meteor-useraccounts/flow-routing.git',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.3');

  api.use([
    'check',
    'kadira:flow-router',
    'underscore',
    'useraccounts:core',
    'modules',
    'jsx',
    'blaze'
  ], ['client', 'server']);

  api.imply([
    'kadira:flow-router@2.11.0',
    'useraccounts:core@1.14.2',
  ], ['client', 'server']);

  api.use([
     'react@0.14.1_1',
     'kadira:blaze-layout@2.3.0',
     'kadira:react-layout@1.5.2'
  ], ['client', 'server'], { weak: true });

  api.addFiles([
    'lib/core.js',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/client.js',
    'lib/client/templates_helpers/at_input.js',
  ], ['client']);
});
