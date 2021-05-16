"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MsbPayResponse = _interopRequireDefault(require("./MsbPayResponse"));

var _MsbPayResult = _interopRequireDefault(require("./MsbPayResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The InlineResponse2003 model module.
* @module model/InlineResponse2003
* @version v2
*/
var InlineResponse2003 = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>InlineResponse2003</code>.
  * @alias module:model/InlineResponse2003
  * @class
  * @extends module:model/MsbPayResponse
  */
  function InlineResponse2003() {
    _classCallCheck(this, InlineResponse2003);

    _defineProperty(this, 'responseBoolean', undefined);

    _MsbPayResponse["default"].call(this);
  }
  /**
  * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/InlineResponse2003} obj Optional instance to populate.
  * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
  */


  _createClass(InlineResponse2003, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2003();

        _MsbPayResponse["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('responseBoolean')) {
          obj['responseBoolean'] = _ApiClient["default"].convertToType(data['responseBoolean'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * True/False value for the outcome of the method
    * @member {Boolean} responseBoolean
    */

  }]);

  return InlineResponse2003;
}();

exports["default"] = InlineResponse2003;