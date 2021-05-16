"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CartItem = _interopRequireDefault(require("./CartItem"));

var _CartStatus = _interopRequireDefault(require("./CartStatus"));

var _WebhookSubscription = _interopRequireDefault(require("./WebhookSubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The Cart model module.
* @module model/Cart
* @version v2
*/
var Cart = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>Cart</code>.
  * MSB Pay cart model
  * @alias module:model/Cart
  * @class
  */
  function Cart() {
    _classCallCheck(this, Cart);

    _defineProperty(this, 'id', undefined);

    _defineProperty(this, 'status', undefined);

    _defineProperty(this, 'createdDate', undefined);

    _defineProperty(this, 'lastUpdated', undefined);

    _defineProperty(this, 'redirectUrl', undefined);

    _defineProperty(this, 'returnToSiteUrl', undefined);

    _defineProperty(this, 'checkoutUrl', undefined);

    _defineProperty(this, 'allowDuplicatePayments', undefined);

    _defineProperty(this, 'loginPolicy', undefined);

    _defineProperty(this, 'checkoutStyle', undefined);

    _defineProperty(this, 'cartItems', undefined);

    _defineProperty(this, 'paymentPreauthPolicy', undefined);

    _defineProperty(this, 'webhookSubscriptions', undefined);
  }
  /**
  * Constructs a <code>Cart</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/Cart} obj Optional instance to populate.
  * @return {module:model/Cart} The populated <code>Cart</code> instance.
  */


  _createClass(Cart, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Cart();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _CartStatus["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('createdDate')) {
          obj['createdDate'] = _ApiClient["default"].convertToType(data['createdDate'], 'Date');
        }

        if (data.hasOwnProperty('lastUpdated')) {
          obj['lastUpdated'] = _ApiClient["default"].convertToType(data['lastUpdated'], 'Date');
        }

        if (data.hasOwnProperty('redirectUrl')) {
          obj['redirectUrl'] = _ApiClient["default"].convertToType(data['redirectUrl'], 'String');
        }

        if (data.hasOwnProperty('returnToSiteUrl')) {
          obj['returnToSiteUrl'] = _ApiClient["default"].convertToType(data['returnToSiteUrl'], 'String');
        }

        if (data.hasOwnProperty('checkoutUrl')) {
          obj['checkoutUrl'] = _ApiClient["default"].convertToType(data['checkoutUrl'], 'String');
        }

        if (data.hasOwnProperty('allowDuplicatePayments')) {
          obj['allowDuplicatePayments'] = _ApiClient["default"].convertToType(data['allowDuplicatePayments'], 'String');
        }

        if (data.hasOwnProperty('loginPolicy')) {
          obj['loginPolicy'] = _ApiClient["default"].convertToType(data['loginPolicy'], 'String');
        }

        if (data.hasOwnProperty('checkoutStyle')) {
          obj['checkoutStyle'] = _ApiClient["default"].convertToType(data['checkoutStyle'], 'String');
        }

        if (data.hasOwnProperty('cartItems')) {
          obj['cartItems'] = _CartItem["default"].constructFromObject(data['cartItems']);
        }

        if (data.hasOwnProperty('paymentPreauthPolicy')) {
          obj['paymentPreauthPolicy'] = _ApiClient["default"].convertToType(data['paymentPreauthPolicy'], 'String');
        }

        if (data.hasOwnProperty('webhookSubscriptions')) {
          obj['webhookSubscriptions'] = _ApiClient["default"].convertToType(data['webhookSubscriptions'], [_WebhookSubscription["default"]]);
        }
      }

      return obj;
    }
    /**
    * Identifier of the cart created by the request
    * @member {String} id
    */

  }]);

  return Cart;
}();

exports["default"] = Cart;