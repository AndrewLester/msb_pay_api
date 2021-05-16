"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MsbPayResult = _interopRequireDefault(require("./MsbPayResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The MsbPayResponse model module.
* @module model/MsbPayResponse
* @version v2
*/
var MsbPayResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>MsbPayResponse</code>.
  * @alias module:model/MsbPayResponse
  * @class
  */
  function MsbPayResponse() {
    _classCallCheck(this, MsbPayResponse);

    _defineProperty(this, 'result', undefined);

    _defineProperty(this, 'errors', undefined);
  }
  /**
  * Constructs a <code>MsbPayResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/MsbPayResponse} obj Optional instance to populate.
  * @return {module:model/MsbPayResponse} The populated <code>MsbPayResponse</code> instance.
  */


  _createClass(MsbPayResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MsbPayResponse();

        if (data.hasOwnProperty('result')) {
          obj['result'] = _MsbPayResult["default"].constructFromObject(data['result']);
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], ['String']);
        }
      }

      return obj;
    }
    /**
    * @member {module:model/MsbPayResult} result
    */

  }]);

  return MsbPayResponse;
}();

exports["default"] = MsbPayResponse;