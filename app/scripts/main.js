/**
 * This is breastfeedingrecord module.
 *
 * @module breastfeedingrecord
 */
(function () {
  'use strict';

  angular
    .module('breastfeedingrecord', [
      'ngNewRouter',
      'breastfeedingrecord.config',
      'breastfeedingrecord.components.home',
      'breastfeedingrecord.components.about',
      'breastfeedingrecord.components.contact',
      'breastfeedingrecord.components.record'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/record'},
    {path: '/home',    component: 'home'},
    {path: '/about',   component: 'about'},
    {path: '/contact', component: 'contact'},
    {path: '/record', component: 'record'}
  ];

  AppController.$inject = [];

  /**
   * AppController
   *
   * @class AppController
   * @main breastfeedingrecord
   * @constructor
   */
  function AppController () {}
})();
