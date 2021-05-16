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
* The CartPaymentItem model module.
* @module model/CartPaymentItem
* @version v2
*/
var CartPaymentItem = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>CartPaymentItem</code>.
  * Payment item details
  * @alias module:model/CartPaymentItem
  * @class
  */
  function CartPaymentItem() {
    _classCallCheck(this, CartPaymentItem);

    _defineProperty(this, 'paymentItemId', undefined);

    _defineProperty(this, 'itemName', undefined);

    _defineProperty(this, 'itemId', undefined);

    _defineProperty(this, 'unitPrice', undefined);

    _defineProperty(this, 'quantity', undefined);

    _defineProperty(this, 'price', undefined);

    _defineProperty(this, 'userTxnFee', undefined);

    _defineProperty(this, 'clientTxnFee', undefined);

    _defineProperty(this, 'salesTax', undefined);

    _defineProperty(this, 'reference', undefined);

    _defineProperty(this, 'glAccountId', undefined);

    _defineProperty(this, 'studentName', undefined);

    _defineProperty(this, 'properties', undefined);
  }
  /**
  * Constructs a <code>CartPaymentItem</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/CartPaymentItem} obj Optional instance to populate.
  * @return {module:model/CartPaymentItem} The populated <code>CartPaymentItem</code> instance.
  */


  _createClass(CartPaymentItem, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartPaymentItem();

        if (data.hasOwnProperty('paymentItemId')) {
          obj['paymentItemId'] = _ApiClient["default"].convertToType(data['paymentItemId'], 'String');
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

        if (data.hasOwnProperty('glAccountId')) {
          obj['glAccountId'] = _ApiClient["default"].convertToType(data['glAccountId'], 'String');
        }

        if (data.hasOwnProperty('studentName')) {
          obj['studentName'] = _ApiClient["default"].convertToType(data['studentName'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [_ItemProperty["default"]]);
        }
      }

      return obj;
    }
    /**
    * ID of the payment item assigned by MySchoolBucks
    * @member {String} paymentItemId
    */

  }]);

  return CartPaymentItem;
}();

exports["default"] = CartPaymentItem;