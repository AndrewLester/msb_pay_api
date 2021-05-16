"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CartPayment = _interopRequireDefault(require("./CartPayment"));

var _ListPaging = _interopRequireDefault(require("./ListPaging"));

var _MsbPayResponse = _interopRequireDefault(require("./MsbPayResponse"));

var _MsbPayResult = _interopRequireDefault(require("./MsbPayResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The InlineResponse2006 model module.
* @module model/InlineResponse2006
* @version v2
*/
var InlineResponse2006 = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>InlineResponse2006</code>.
  * @alias module:model/InlineResponse2006
  * @class
  * @extends module:model/MsbPayResponse
  */
  function InlineResponse2006() {
    _classCallCheck(this, InlineResponse2006);

    _defineProperty(this, 'cartPayments', undefined);

    _defineProperty(this, 'meta', undefined);

    _MsbPayResponse["default"].call(this);
  }
  /**
  * Constructs a <code>InlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/InlineResponse2006} obj Optional instance to populate.
  * @return {module:model/InlineResponse2006} The populated <code>InlineResponse2006</code> instance.
  */


  _createClass(InlineResponse2006, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2006();

        _MsbPayResponse["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('cartPayments')) {
          obj['cartPayments'] = _ApiClient["default"].convertToType(data['cartPayments'], [_CartPayment["default"]]);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _ListPaging["default"].constructFromObject(data['meta']);
        }
      }

      return obj;
    }
    /**
    * List payments for the Cart
    * @member {Array.<module:model/CartPayment>} cartPayments
    */

  }]);

  return InlineResponse2006;
}();

exports["default"] = InlineResponse2006;