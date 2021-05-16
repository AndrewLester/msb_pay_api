"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ItemProperty = _interopRequireDefault(require("./ItemProperty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The CartItem model module.
* @module model/CartItem
* @version v2
*/
var CartItem = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>CartItem</code>.
  * MSB Pay cart item model
  * @alias module:model/CartItem
  * @class
  */
  function CartItem() {
    _classCallCheck(this, CartItem);

    _defineProperty(this, 'clientId', undefined);

    _defineProperty(this, 'departmentId', undefined);

    _defineProperty(this, 'storeId', undefined);

    _defineProperty(this, 'itemId', undefined);

    _defineProperty(this, 'itemName', undefined);

    _defineProperty(this, 'paymentMethodId', undefined);

    _defineProperty(this, 'quantity', undefined);

    _defineProperty(this, 'unitPrice', undefined);

    _defineProperty(this, 'displaySalesTaxRate', undefined);

    _defineProperty(this, 'salesTaxAmount', undefined);

    _defineProperty(this, 'studentName', undefined);

    _defineProperty(this, 'reference', undefined);

    _defineProperty(this, 'properties', undefined);

    _defineProperty(this, 'glAccountId', undefined);
  }
  /**
  * Constructs a <code>CartItem</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/CartItem} obj Optional instance to populate.
  * @return {module:model/CartItem} The populated <code>CartItem</code> instance.
  */


  _createClass(CartItem, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartItem();

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient["default"].convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('departmentId')) {
          obj['departmentId'] = _ApiClient["default"].convertToType(data['departmentId'], 'String');
        }

        if (data.hasOwnProperty('storeId')) {
          obj['storeId'] = _ApiClient["default"].convertToType(data['storeId'], 'String');
        }

        if (data.hasOwnProperty('itemId')) {
          obj['itemId'] = _ApiClient["default"].convertToType(data['itemId'], 'String');
        }

        if (data.hasOwnProperty('itemName')) {
          obj['itemName'] = _ApiClient["default"].convertToType(data['itemName'], 'String');
        }

        if (data.hasOwnProperty('paymentMethodId')) {
          obj['paymentMethodId'] = _ApiClient["default"].convertToType(data['paymentMethodId'], 'String');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'String');
        }

        if (data.hasOwnProperty('unitPrice')) {
          obj['unitPrice'] = _ApiClient["default"].convertToType(data['unitPrice'], 'String');
        }

        if (data.hasOwnProperty('displaySalesTaxRate')) {
          obj['displaySalesTaxRate'] = _ApiClient["default"].convertToType(data['displaySalesTaxRate'], 'Number');
        }

        if (data.hasOwnProperty('salesTaxAmount')) {
          obj['salesTaxAmount'] = _ApiClient["default"].convertToType(data['salesTaxAmount'], 'Number');
        }

        if (data.hasOwnProperty('studentName')) {
          obj['studentName'] = _ApiClient["default"].convertToType(data['studentName'], 'String');
        }

        if (data.hasOwnProperty('reference')) {
          obj['reference'] = _ApiClient["default"].convertToType(data['reference'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [_ItemProperty["default"]]);
        }

        if (data.hasOwnProperty('glAccountId')) {
          obj['glAccountId'] = _ApiClient["default"].convertToType(data['glAccountId'], 'String');
        }
      }

      return obj;
    }
    /**
    * ID for MySchoolBucks store that the sale should be recorded with for reporting [Required if no default for dev account]
    * @member {String} clientId
    */

  }]);

  return CartItem;
}();

exports["default"] = CartItem;