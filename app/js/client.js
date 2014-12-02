'use strict';

require.config({
  paths: {
    jquery: 'jquery'
  }
});

requirejs(['jquery'],
function($) {
  $('#app').append('<p>Hello from javascript!</p>');
});
