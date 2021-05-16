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
* The MsbPayUserClient model module.
* @module model/MsbPayUserClient
* @version v2
*/
var MsbPayUserClient = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>MsbPayUserClient</code>.
  * Describes client settings assigned to the developer account
  * @alias module:model/MsbPayUserClient
  * @class
  */
  function MsbPayUserClient() {
    _classCallCheck(this, MsbPayUserClient);

    _defineProperty(this, 'isEnabled', undefined);

    _defineProperty(this, 'clientId', undefined);

    _defineProperty(this, 'departmentId', undefined);

    _defineProperty(this, 'storeId', undefined);

    _defineProperty(this, 'paymentMethodId', undefined);
  }
  /**
  * Constructs a <code>MsbPayUserClient</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/MsbPayUserClient} obj Optional instance to populate.
  * @return {module:model/MsbPayUserClient} The populated <code>MsbPayUserClient</code> instance.
  */


  _createClass(MsbPayUserClient, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MsbPayUserClient();

        if (data.hasOwnProperty('isEnabled')) {
          obj['isEnabled'] = _ApiClient["default"].convertToType(data['isEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient["default"].convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('departmentId')) {
          obj['departmentId'] = _ApiClient["default"].convertToType(data['departmentId'], 'String');
        }

        if (data.hasOwnProperty('storeId')) {
          obj['storeId'] = _ApiClient["default"].convertToType(data['storeId'], 'String');
        }

        if (data.hasOwnProperty('paymentMethodId')) {
          obj['paymentMethodId'] = _ApiClient["default"].convertToType(data['paymentMethodId'], 'String');
        }
      }

      return obj;
    }
    /**
    * Indicates if the client is currently enabled for the developer account
    * @member {Boolean} isEnabled
    */

  }]);

  return MsbPayUserClient;
}();

exports["default"] = MsbPayUserClient;