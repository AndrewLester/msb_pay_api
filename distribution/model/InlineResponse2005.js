"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CartOrder = _interopRequireDefault(require("./CartOrder"));

var _MsbPayResponse = _interopRequireDefault(require("./MsbPayResponse"));

var _MsbPayResult = _interopRequireDefault(require("./MsbPayResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The InlineResponse2005 model module.
* @module model/InlineResponse2005
* @version v2
*/
var InlineResponse2005 = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>InlineResponse2005</code>.
  * @alias module:model/InlineResponse2005
  * @class
  * @extends module:model/MsbPayResponse
  */
  function InlineResponse2005() {
    _classCallCheck(this, InlineResponse2005);

    _defineProperty(this, 'cartOrders', undefined);

    _MsbPayResponse["default"].call(this);
  }
  /**
  * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/InlineResponse2005} obj Optional instance to populate.
  * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
  */


  _createClass(InlineResponse2005, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2005();

        _MsbPayResponse["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('cartOrders')) {
          obj['cartOrders'] = _ApiClient["default"].convertToType(data['cartOrders'], [_CartOrder["default"]]);
        }
      }

      return obj;
    }
    /**
    * List of Orders associated to the Cart processing
    * @member {Array.<module:model/CartOrder>} cartOrders
    */

  }]);

  return InlineResponse2005;
}();

exports["default"] = InlineResponse2005;