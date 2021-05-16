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
    instance = new MsbPayApi.ItemProperty();
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

  describe('ItemProperty', function() {
    it('should create an instance of ItemProperty', function() {
      // uncomment below and update the code to test ItemProperty
      //var instane = new MsbPayApi.ItemProperty();
      //expect(instance).to.be.a(MsbPayApi.ItemProperty);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new MsbPayApi.ItemProperty();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new MsbPayApi.ItemProperty();
      //expect(instance).to.be();
    });

    it('should have the property displayResponse (base name: "displayResponse")', function() {
      // uncomment below and update the code to test the property displayResponse
      //var instane = new MsbPayApi.ItemProperty();
      //expect(instance).to.be();
    });

  });

}));
