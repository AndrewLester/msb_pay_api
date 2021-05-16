"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CartOrderItem = _interopRequireDefault(require("./CartOrderItem"));

var _OrderStatus = _interopRequireDefault(require("./OrderStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The CartOrder model module.
* @module model/CartOrder
* @version v2
*/
var CartOrder = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>CartOrder</code>.
  * Orders for the supplied cart
  * @alias module:model/CartOrder
  * @class
  */
  function CartOrder() {
    _classCallCheck(this, CartOrder);

    _defineProperty(this, 'clientId', undefined);

    _defineProperty(this, 'orderId', undefined);

    _defineProperty(this, 'date', undefined);

    _defineProperty(this, 'status', undefined);

    _defineProperty(this, 'recipientName', undefined);

    _defineProperty(this, 'recipientEmail', undefined);

    _defineProperty(this, 'billingAcctDesc', undefined);

    _defineProperty(this, 'tag', undefined);

    _defineProperty(this, 'storeId', undefined);

    _defineProperty(this, 'paymentMethodId', undefined);

    _defineProperty(this, 'cartOrderItems', undefined);
  }
  /**
  * Constructs a <code>CartOrder</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/CartOrder} obj Optional instance to populate.
  * @return {module:model/CartOrder} The populated <code>CartOrder</code> instance.
  */


  _createClass(CartOrder, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartOrder();

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient["default"].convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('orderId')) {
          obj['orderId'] = _ApiClient["default"].convertToType(data['orderId'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _OrderStatus["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('recipientName')) {
          obj['recipientName'] = _ApiClient["default"].convertToType(data['recipientName'], 'String');
        }

        if (data.hasOwnProperty('recipientEmail')) {
          obj['recipientEmail'] = _ApiClient["default"].convertToType(data['recipientEmail'], 'String');
        }

        if (data.hasOwnProperty('billingAcctDesc')) {
          obj['billingAcctDesc'] = _ApiClient["default"].convertToType(data['billingAcctDesc'], 'String');
        }

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], Object);
        }

        if (data.hasOwnProperty('storeId')) {
          obj['storeId'] = _ApiClient["default"].convertToType(data['storeId'], 'String');
        }

        if (data.hasOwnProperty('paymentMethodId')) {
          obj['paymentMethodId'] = _ApiClient["default"].convertToType(data['paymentMethodId'], 'String');
        }

        if (data.hasOwnProperty('cartOrderItems')) {
          obj['cartOrderItems'] = _ApiClient["default"].convertToType(data['cartOrderItems'], [_CartOrderItem["default"]]);
        }
      }

      return obj;
    }
    /**
    * ID for MySchoolBucks store that the order was recorded with
    * @member {String} clientId
    */

  }]);

  return CartOrder;
}();

exports["default"] = CartOrder;