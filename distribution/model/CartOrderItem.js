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
* The CartOrderItem model module.
* @module model/CartOrderItem
* @version v2
*/
var CartOrderItem = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>CartOrderItem</code>.
  * Order item details
  * @alias module:model/CartOrderItem
  * @class
  */
  function CartOrderItem() {
    _classCallCheck(this, CartOrderItem);

    _defineProperty(this, 'orderItemId', undefined);

    _defineProperty(this, 'itemName', undefined);

    _defineProperty(this, 'itemId', undefined);

    _defineProperty(this, 'unitPrice', undefined);

    _defineProperty(this, 'quantity', undefined);

    _defineProperty(this, 'price', undefined);

    _defineProperty(this, 'userTxnFee', undefined);

    _defineProperty(this, 'clientTxnFee', undefined);

    _defineProperty(this, 'salesTax', undefined);

    _defineProperty(this, 'reference', undefined);

    _defineProperty(this, 'properties', undefined);

    _defineProperty(this, 'studentName', undefined);
  }
  /**
  * Constructs a <code>CartOrderItem</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/CartOrderItem} obj Optional instance to populate.
  * @return {module:model/CartOrderItem} The populated <code>CartOrderItem</code> instance.
  */


  _createClass(CartOrderItem, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartOrderItem();

        if (data.hasOwnProperty('orderItemId')) {
          obj['orderItemId'] = _ApiClient["default"].convertToType(data['orderItemId'], 'String');
        }

        if (data.hasOwnProperty('itemName')) {
          obj['itemName'] = _ApiClient["default"].convertToType(data['itemName'], 'String');
        }

        if (data.hasOwnProperty('itemId')) {
          obj['itemId'] = _ApiClient["default"].convertToType(data['itemId'], 'String');
        }

        if (data.hasOwnProperty('unitPrice')) {
          obj['unitPrice'] = _ApiClient["default"].convertToType(data['unitPrice'], 'Number');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('userTxnFee')) {
          obj['userTxnFee'] = _ApiClient["default"].convertToType(data['userTxnFee'], 'Number');
        }

        if (data.hasOwnProperty('clientTxnFee')) {
          obj['clientTxnFee'] = _ApiClient["default"].convertToType(data['clientTxnFee'], 'Number');
        }

        if (data.hasOwnProperty('salesTax')) {
          obj['salesTax'] = _ApiClient["default"].convertToType(data['salesTax'], 'Number');
        }

        if (data.hasOwnProperty('reference')) {
          obj['reference'] = _ApiClient["default"].convertToType(data['reference'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [_ItemProperty["default"]]);
        }

        if (data.hasOwnProperty('studentName')) {
          obj['studentName'] = _ApiClient["default"].convertToType(data['studentName'], 'String');
        }
      }

      return obj;
    }
    /**
    * ID assigned to the order item by MySchoolBucks
    * @member {String} orderItemId
    */

  }]);

  return CartOrderItem;
}();

exports["default"] = CartOrderItem;