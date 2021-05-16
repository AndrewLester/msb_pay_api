"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClientProperty = _interopRequireDefault(require("./ClientProperty"));

var _ListPaging = _interopRequireDefault(require("./ListPaging"));

var _MsbPayResponse = _interopRequireDefault(require("./MsbPayResponse"));

var _MsbPayResult = _interopRequireDefault(require("./MsbPayResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The InlineResponse20011 model module.
* @module model/InlineResponse20011
* @version v2
*/
var InlineResponse20011 = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>InlineResponse20011</code>.
  * @alias module:model/InlineResponse20011
  * @class
  * @extends module:model/MsbPayResponse
  */
  function InlineResponse20011() {
    _classCallCheck(this, InlineResponse20011);

    _defineProperty(this, 'glaccounts', undefined);

    _defineProperty(this, 'meta', undefined);

    _MsbPayResponse["default"].call(this);
  }
  /**
  * Constructs a <code>InlineResponse20011</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/InlineResponse20011} obj Optional instance to populate.
  * @return {module:model/InlineResponse20011} The populated <code>InlineResponse20011</code> instance.
  */


  _createClass(InlineResponse20011, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20011();

        _MsbPayResponse["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('glaccounts')) {
          obj['glaccounts'] = _ApiClient["default"].convertToType(data['glaccounts'], [_ClientProperty["default"]]);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _ListPaging["default"].constructFromObject(data['meta']);
        }
      }

      return obj;
    }
    /**
    * Valid G/L Account names and IDs for the given client
    * @member {Array.<module:model/ClientProperty>} glaccounts
    */

  }]);

  return InlineResponse20011;
}();

exports["default"] = InlineResponse20011;