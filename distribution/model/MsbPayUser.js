"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MsbPayUserClient = _interopRequireDefault(require("./MsbPayUserClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The MsbPayUser model module.
* @module model/MsbPayUser
* @version v2
*/
var MsbPayUser = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>MsbPayUser</code>.
  * @alias module:model/MsbPayUser
  * @class
  */
  function MsbPayUser() {
    _classCallCheck(this, MsbPayUser);

    _defineProperty(this, 'defaultClientId', undefined);

    _defineProperty(this, 'developerAccountId', undefined);

    _defineProperty(this, 'firstName', undefined);

    _defineProperty(this, 'lastName', undefined);

    _defineProperty(this, 'email', undefined);

    _defineProperty(this, 'clients', undefined);
  }
  /**
  * Constructs a <code>MsbPayUser</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/MsbPayUser} obj Optional instance to populate.
  * @return {module:model/MsbPayUser} The populated <code>MsbPayUser</code> instance.
  */


  _createClass(MsbPayUser, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MsbPayUser();

        if (data.hasOwnProperty('defaultClientId')) {
          obj['defaultClientId'] = _ApiClient["default"].convertToType(data['defaultClientId'], 'String');
        }

        if (data.hasOwnProperty('developerAccountId')) {
          obj['developerAccountId'] = _ApiClient["default"].convertToType(data['developerAccountId'], 'String');
        }

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('clients')) {
          obj['clients'] = _ApiClient["default"].convertToType(data['clients'], [_MsbPayUserClient["default"]]);
        }
      }

      return obj;
    }
    /**
    * ID for MySchoolBucks top level organizational unit this developer account is assigned to as a default (if null, no default is set)
    * @member {String} defaultClientId
    */

  }]);

  return MsbPayUser;
}();

exports["default"] = MsbPayUser;