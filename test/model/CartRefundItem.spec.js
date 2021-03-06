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
    instance = new MsbPayApi.CartRefundItem();
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

  describe('CartRefundItem', function() {
    it('should create an instance of CartRefundItem', function() {
      // uncomment below and update the code to test CartRefundItem
      //var instane = new MsbPayApi.CartRefundItem();
      //expect(instance).to.be.a(MsbPayApi.CartRefundItem);
    });

    it('should have the property departmentId (base name: "departmentId")', function() {
      // uncomment below and update the code to test the property departmentId
      //var instane = new MsbPayApi.CartRefundItem();
      //expect(instance).to.be();
    });

    it('should have the property itemId (base name: "itemId")', function() {
      // uncomment below and update the code to test the property itemId
      //var instane = new MsbPayApi.CartRefundItem();
      //expect(instance).to.be();
    });

    it('should have the property itemName (base name: "itemName")', function() {
      // uncomment below and update the code to test the property itemName
      //var instane = new MsbPayApi.CartRefundItem();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new MsbPayApi.CartRefundItem();
      //expect(instance).to.be();
    });

    it('should have the property unitPrice (base name: "unitPrice")', function() {
      // uncomment below and update the code to test the property unitPrice
      //var instane = new MsbPayApi.CartRefundItem();
      //expect(instance).to.be();
    });

    it('should have the property salesTax (base name: "salesTax")', function() {
      // uncomment below and update the code to test the property salesTax
      //var instane = new MsbPayApi.CartRefundItem();
      //expect(instance).to.be();
    });

    it('should have the property studentName (base name: "studentName")', function() {
      // uncomment below and update the code to test the property studentName
      //var instane = new MsbPayApi.CartRefundItem();
      //expect(instance).to.be();
    });

    it('should have the property glAccountId (base name: "glAccountId")', function() {
      // uncomment below and update the code to test the property glAccountId
      //var instane = new MsbPayApi.CartRefundItem();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instane = new MsbPayApi.CartRefundItem();
      //expect(instance).to.be();
    });

    it('should have the property properties (base name: "properties")', function() {
      // uncomment below and update the code to test the property properties
      //var instane = new MsbPayApi.CartRefundItem();
      //expect(instance).to.be();
    });

  });

}));
