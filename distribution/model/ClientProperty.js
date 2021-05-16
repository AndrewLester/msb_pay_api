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
* The ClientProperty model module.
* @module model/ClientProperty
* @version v2
*/
var ClientProperty = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>ClientProperty</code>.
  * A Name/Value pair, used when getting a list of properties for a client
  * @alias module:model/ClientProperty
  * @class
  * @param id {String} Identifier for the property. Used for API calls
  * @param name {String} Friendly name of the property
  */
  function ClientProperty(id, name) {
    _classCallCheck(this, ClientProperty);

    _defineProperty(this, 'id', undefined);

    _defineProperty(this, 'name', undefined);

    this['id'] = id;
    this['name'] = name;
  }
  /**
  * Constructs a <code>ClientProperty</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/ClientProperty} obj Optional instance to populate.
  * @return {module:model/ClientProperty} The populated <code>ClientProperty</code> instance.
  */


  _createClass(ClientProperty, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClientProperty();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
    /**
    * Identifier for the property. Used for API calls
    * @member {String} id
    */

  }]);

  return ClientProperty;
}();

exports["default"] = ClientProperty;