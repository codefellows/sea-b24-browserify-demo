'use strict';

require.config({
  paths: {
    chai: '../../node_modules/chai/chai',
    someFunc: '../../app/js/some_func'
  }
});

requirejs(['chai', 'someFunc'],
function(chai, someFunc) {
  var expect = chai.expect;

  describe('some test', function() {
    it('should be true', function() {
      expect(true).to.eql(true);
    });

    it('should also be true', function() {
      expect(someFunc()).to.eql(true);
    });
  });

  mocha.run();
});
