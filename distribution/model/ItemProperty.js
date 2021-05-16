"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The ItemProperty model module.
* @module model/ItemProperty
* @version v2
*/
var ItemProperty = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>ItemProperty</code>.
  * Optional item property name and value
  * @alias module:model/ItemProperty
  * @class
  * @param name {String} Name of item property - this will be included in the order and payment item description on MySchoolBucks
  * @param value {String} Value of named item property - this will be included in the order and payment item description on MySchoolBucks
  */
  function ItemProperty(name, value) {
    _classCallCheck(this, ItemProperty);

    _defineProperty(this, 'name', undefined);

    _defineProperty(this, 'value', undefined);

    _defineProperty(this, 'displayResponse', undefined);

    this['name'] = name;
    this['value'] = value;
  }
  /**
  * Constructs a <code>ItemProperty</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/ItemProperty} obj Optional instance to populate.
  * @return {module:model/ItemProperty} The populated <code>ItemProperty</code> instance.
  */


  _createClass(ItemProperty, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemProperty();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('displayResponse')) {
          obj['displayResponse'] = _ApiClient["default"].convertToType(data['displayResponse'], 'String');
        }
      }

      return obj;
    }
    /**
    * Name of item property - this will be included in the order and payment item description on MySchoolBucks
    * @member {String} name
    */

  }]);

  return ItemProperty;
}();

exports["default"] = ItemProperty;