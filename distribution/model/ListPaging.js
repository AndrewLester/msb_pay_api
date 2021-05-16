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
* The ListPaging model module.
* @module model/ListPaging
* @version v2
*/
var ListPaging = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>ListPaging</code>.
  * List item stats for navigating result sets
  * @alias module:model/ListPaging
  * @class
  */
  function ListPaging() {
    _classCallCheck(this, ListPaging);

    _defineProperty(this, 'page', undefined);

    _defineProperty(this, 'prev', undefined);

    _defineProperty(this, 'self', undefined);

    _defineProperty(this, 'next', undefined);

    _defineProperty(this, 'total', undefined);
  }
  /**
  * Constructs a <code>ListPaging</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/ListPaging} obj Optional instance to populate.
  * @return {module:model/ListPaging} The populated <code>ListPaging</code> instance.
  */


  _createClass(ListPaging, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListPaging();

        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'Number');
        }

        if (data.hasOwnProperty('prev')) {
          obj['prev'] = _ApiClient["default"].convertToType(data['prev'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
    /**
    * Current page number of result set when split by rowCount
    * @member {Number} page
    */

  }]);

  return ListPaging;
}();

exports["default"] = ListPaging;