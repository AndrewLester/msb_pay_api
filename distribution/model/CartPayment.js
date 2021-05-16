"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CartPaymentItem = _interopRequireDefault(require("./CartPaymentItem"));

var _PaymentTxnType = _interopRequireDefault(require("./PaymentTxnType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The CartPayment model module.
* @module model/CartPayment
* @version v2
*/
var CartPayment = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>CartPayment</code>.
  * Payment for an API initiated checkout
  * @alias module:model/CartPayment
  * @class
  */
  function CartPayment() {
    _classCallCheck(this, CartPayment);

    _defineProperty(this, 'id', undefined);

    _defineProperty(this, 'clientId', undefined);

    _defineProperty(this, 'cartId', undefined);

    _defineProperty(this, 'orderId', undefined);

    _defineProperty(this, 'payerName', undefined);

    _defineProperty(this, 'date', undefined);

    _defineProperty(this, 'txnType', undefined);

    _defineProperty(this, 'storeId', undefined);

    _defineProperty(this, 'paymentMethodId', undefined);

    _defineProperty(this, 'billingAcctDesc', undefined);

    _defineProperty(this, 'amount', undefined);

    _defineProperty(this, 'salesTax', undefined);

    _defineProperty(this, 'userTxnFee', undefined);

    _defineProperty(this, 'clientTxnFee', undefined);

    _defineProperty(this, 'confirmation', undefined);

    _defineProperty(this, 'batchDate', undefined);

    _defineProperty(this, 'batchNumber', undefined);

    _defineProperty(this, 'depositAmount', undefined);

    _defineProperty(this, 'settled', undefined);

    _defineProperty(this, 'cartPaymentItems', undefined);

    _defineProperty(this, 'remainingRefundableAmount', undefined);
  }
  /**
  * Constructs a <code>CartPayment</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/CartPayment} obj Optional instance to populate.
  * @return {module:model/CartPayment} The populated <code>CartPayment</code> instance.
  */


  _createClass(CartPayment, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartPayment();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient["default"].convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('cartId')) {
          obj['cartId'] = _ApiClient["default"].convertToType(data['cartId'], 'String');
        }

        if (data.hasOwnProperty('orderId')) {
          obj['orderId'] = _ApiClient["default"].convertToType(data['orderId'], 'String');
        }

        if (data.hasOwnProperty('payerName')) {
          obj['payerName'] = _ApiClient["default"].convertToType(data['payerName'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Date');
        }

        if (data.hasOwnProperty('txnType')) {
          obj['txnType'] = _PaymentTxnType["default"].constructFromObject(data['txnType']);
        }

        if (data.hasOwnProperty('storeId')) {
          obj['storeId'] = _ApiClient["default"].convertToType(data['storeId'], 'String');
        }

        if (data.hasOwnProperty('paymentMethodId')) {
          obj['paymentMethodId'] = _ApiClient["default"].convertToType(data['paymentMethodId'], 'String');
        }

        if (data.hasOwnProperty('billingAcctDesc')) {
          obj['billingAcctDesc'] = _ApiClient["default"].convertToType(data['billingAcctDesc'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('salesTax')) {
          obj['salesTax'] = _ApiClient["default"].convertToType(data['salesTax'], 'Number');
        }

        if (data.hasOwnProperty('userTxnFee')) {
          obj['userTxnFee'] = _ApiClient["default"].convertToType(data['userTxnFee'], 'Number');
        }

        if (data.hasOwnProperty('clientTxnFee')) {
          obj['clientTxnFee'] = _ApiClient["default"].convertToType(data['clientTxnFee'], 'Number');
        }

        if (data.hasOwnProperty('confirmation')) {
          obj['confirmation'] = _ApiClient["default"].convertToType(data['confirmation'], 'String');
        }

        if (data.hasOwnProperty('batchDate')) {
          obj['batchDate'] = _ApiClient["default"].convertToType(data['batchDate'], 'Date');
        }

        if (data.hasOwnProperty('batchNumber')) {
          obj['batchNumber'] = _ApiClient["default"].convertToType(data['batchNumber'], 'String');
        }

        if (data.hasOwnProperty('depositAmount')) {
          obj['depositAmount'] = _ApiClient["default"].convertToType(data['depositAmount'], 'Number');
        }

        if (data.hasOwnProperty('settled')) {
          obj['settled'] = _ApiClient["default"].convertToType(data['settled'], 'Boolean');
        }

        if (data.hasOwnProperty('cartPaymentItems')) {
          obj['cartPaymentItems'] = _ApiClient["default"].convertToType(data['cartPaymentItems'], [_CartPaymentItem["default"]]);
        }

        if (data.hasOwnProperty('remainingRefundableAmount')) {
          obj['remainingRefundableAmount'] = _ApiClient["default"].convertToType(data['remainingRefundableAmount'], 'Number');
        }
      }

      return obj;
    }
    /**
    * Identifier of the payment object
    * @member {String} id
    */

  }]);

  return CartPayment;
}();

exports["default"] = CartPayment;