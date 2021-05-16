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
* The CartRefundItem model module.
* @module model/CartRefundItem
* @version v2
*/
var CartRefundItem = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>CartRefundItem</code>.
  * @alias module:model/CartRefundItem
  * @class
  * @param itemId {String} ID for the MySchoolBucks item that the refund should be recorded with for reporting
  * @param itemName {String} Name of item that the line items should display to user at checkout and any receipts
  * @param quantity {String} Number of the items to refund
  * @param unitPrice {String} Dollar amount price for each unit refunded
  */
  function CartRefundItem(itemId, itemName, quantity, unitPrice) {
    _classCallCheck(this, CartRefundItem);

    _defineProperty(this, 'departmentId', undefined);

    _defineProperty(this, 'itemId', undefined);

    _defineProperty(this, 'itemName', undefined);

    _defineProperty(this, 'quantity', undefined);

    _defineProperty(this, 'unitPrice', undefined);

    _defineProperty(this, 'salesTax', undefined);

    _defineProperty(this, 'studentName', undefined);

    _defineProperty(this, 'glAccountId', undefined);

    _defineProperty(this, 'reference', undefined);

    _defineProperty(this, 'properties', undefined);

    this['itemId'] = itemId;
    this['itemName'] = itemName;
    this['quantity'] = quantity;
    this['unitPrice'] = unitPrice;
  }
  /**
  * Constructs a <code>CartRefundItem</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/CartRefundItem} obj Optional instance to populate.
  * @return {module:model/CartRefundItem} The populated <code>CartRefundItem</code> instance.
  */


  _createClass(CartRefundItem, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartRefundItem();

        if (data.hasOwnProperty('departmentId')) {
          obj['departmentId'] = _ApiClient["default"].convertToType(data['departmentId'], 'String');
        }

        if (data.hasOwnProperty('itemId')) {
          obj['itemId'] = _ApiClient["default"].convertToType(data['itemId'], 'String');
        }

        if (data.hasOwnProperty('itemName')) {
          obj['itemName'] = _ApiClient["default"].convertToType(data['itemName'], 'String');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'String');
        }

        if (data.hasOwnProperty('unitPrice')) {
          obj['unitPrice'] = _ApiClient["default"].convertToType(data['unitPrice'], 'String');
        }

        if (data.hasOwnProperty('salesTax')) {
          obj['salesTax'] = _ApiClient["default"].convertToType(data['salesTax'], 'String');
        }

        if (data.hasOwnProperty('studentName')) {
          obj['studentName'] = _ApiClient["default"].convertToType(data['studentName'], 'String');
        }

        if (data.hasOwnProperty('glAccountId')) {
          obj['glAccountId'] = _ApiClient["default"].convertToType(data['glAccountId'], 'String');
        }

        if (data.hasOwnProperty('reference')) {
          obj['reference'] = _ApiClient["default"].convertToType(data['reference'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [_ItemProperty["default"]]);
        }
      }

      return obj;
    }
    /**
    * ID for MySchoolBucks department that the refund should be recorded with for reporting
    * @member {String} departmentId
    */

  }]);

  return CartRefundItem;
}();

exports["default"] = CartRefundItem;