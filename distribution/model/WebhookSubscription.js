"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PayApiEventType = _interopRequireDefault(require("./PayApiEventType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The WebhookSubscription model module.
* @module model/WebhookSubscription
* @version v2
*/
var WebhookSubscription = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>WebhookSubscription</code>.
  * MSB webhook subscription model
  * @alias module:model/WebhookSubscription
  * @class
  */
  function WebhookSubscription() {
    _classCallCheck(this, WebhookSubscription);

    _defineProperty(this, 'notifyUrl', undefined);

    _defineProperty(this, 'type', undefined);

    _defineProperty(this, 'isEnabled', undefined);

    _defineProperty(this, 'subscriptionId', undefined);
  }
  /**
  * Constructs a <code>WebhookSubscription</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/WebhookSubscription} obj Optional instance to populate.
  * @return {module:model/WebhookSubscription} The populated <code>WebhookSubscription</code> instance.
  */


  _createClass(WebhookSubscription, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WebhookSubscription();

        if (data.hasOwnProperty('notifyUrl')) {
          obj['notifyUrl'] = _ApiClient["default"].convertToType(data['notifyUrl'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _PayApiEventType["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('isEnabled')) {
          obj['isEnabled'] = _ApiClient["default"].convertToType(data['isEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('subscriptionId')) {
          obj['subscriptionId'] = _ApiClient["default"].convertToType(data['subscriptionId'], 'String');
        }
      }

      return obj;
    }
    /**
    * URL to notify of change
    * @member {String} notifyUrl
    */

  }]);

  return WebhookSubscription;
}();

exports["default"] = WebhookSubscription;