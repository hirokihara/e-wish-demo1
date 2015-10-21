/**
 * Record Components module.
 *
 * @module breastfeedingrecord.components.record
 */
(function () {
  'use strict';

  angular
    .module('breastfeedingrecord.components.record', [])
    .controller('RecordController', RecordController);

  RecordController.$inject = [];

  /**
   * RecordController
   *
   * @class RecordController
   * @constructor
   */
  function RecordController() {
    console.log('RecordController Constructor');
    this.storage = localStorage;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  RecordController.prototype.activate = function() {
    console.log('RecordController activate Method');
    vm = this;
    vm.list = [];
    // sessionStorageに情報があれば表示する
    if (this.storage.getItem('breastfeedingrecord.records')) {
      vm.list = JSON.parse(this.storage.getItem('breastfeedingrecord.records'));
    }
  };

  RecordController.prototype.add = function() {
    console.log('RecordController add Method');
    var objDate = new Date();
    var newRecord = {
      id: vm.list.length,
      dateTime: objDate,
      description: ''
    };
    vm.list.push(newRecord);
    this.storage.setItem('breastfeedingrecord.records', JSON.stringify(vm.list));
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
