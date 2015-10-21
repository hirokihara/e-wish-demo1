(function() {
  'use strict';

  describe('Controller: RecordController', function() {

    beforeEach(module('breastfeedingrecord.components.record'));

    var RecordController;

    beforeEach(inject(function($controller) {
      RecordController = $controller('RecordController');
    }));

    describe('RecordController', function() {
      it('Test Case', function() {
        RecordController.activate();
      });
    });
  });
})();
