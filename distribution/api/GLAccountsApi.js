"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20011"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* GLAccounts service.
* @module api/GLAccountsApi
* @version v2
*/
var GLAccountsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GLAccountsApi. 
  * @alias module:api/GLAccountsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GLAccountsApi(apiClient) {
    _classCallCheck(this, GLAccountsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the clientsClientIdGlAccountsGet operation.
   * @callback module:api/GLAccountsApi~clientsClientIdGlAccountsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse20011} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get G/L account IDs
   * Returns IDs for G/L Accounts associated with the client.
   * @param {Object} opts Optional parameters
   * @param {module:api/GLAccountsApi~clientsClientIdGlAccountsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse20011}
   */


  _createClass(GLAccountsApi, [{
    key: "clientsClientIdGlAccountsGet",
    value: function clientsClientIdGlAccountsGet(authorization, clientId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {
        'clientId': clientId
      };
      var queryParams = {
        'page': opts['page'],
        'rowCount': opts['rowCount'],
        'searchText': opts['searchText']
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['applcation/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/clients/{clientId}/glAccounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return GLAccountsApi;
}();

exports["default"] = GLAccountsApi;