/**
 * MSB Pay API
 * API specification for payment processing via the MySchoolBucks.com cart checkout. <br /> <a href=\"MSBPayAPI-v2-changelog.txt\">Changelog</a>
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MsbPayApi);
  }
}(this, function(expect, MsbPayApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MsbPayApi.WebhookSubscription();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WebhookSubscription', function() {
    it('should create an instance of WebhookSubscription', function() {
      // uncomment below and update the code to test WebhookSubscription
      //var instane = new MsbPayApi.WebhookSubscription();
      //expect(instance).to.be.a(MsbPayApi.WebhookSubscription);
    });

    it('should have the property notifyUrl (base name: "notifyUrl")', function() {
      // uncomment below and update the code to test the property notifyUrl
      //var instane = new MsbPayApi.WebhookSubscription();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new MsbPayApi.WebhookSubscription();
      //expect(instance).to.be();
    });

    it('should have the property isEnabled (base name: "isEnabled")', function() {
      // uncomment below and update the code to test the property isEnabled
      //var instane = new MsbPayApi.WebhookSubscription();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionId (base name: "subscriptionId")', function() {
      // uncomment below and update the code to test the property subscriptionId
      //var instane = new MsbPayApi.WebhookSubscription();
      //expect(instance).to.be();
    });

  });

}));
