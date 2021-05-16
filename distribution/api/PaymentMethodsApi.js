"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2008"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* PaymentMethods service.
* @module api/PaymentMethodsApi
* @version v2
*/
var PaymentMethodsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PaymentMethodsApi. 
  * @alias module:api/PaymentMethodsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentMethodsApi(apiClient) {
    _classCallCheck(this, PaymentMethodsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the clientsClientIdPaymentMethodsGet operation.
   * @callback module:api/PaymentMethodsApi~clientsClientIdPaymentMethodsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2008} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get payment methods
   * Returns IDs for payment methods associated with the client.
   * @param {Object} opts Optional parameters
   * @param {module:api/PaymentMethodsApi~clientsClientIdPaymentMethodsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2008}
   */


  _createClass(PaymentMethodsApi, [{
    key: "clientsClientIdPaymentMethodsGet",
    value: function clientsClientIdPaymentMethodsGet(authorization, clientId, opts, callback) {
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
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/clients/{clientId}/paymentMethods', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return PaymentMethodsApi;
}();

exports["default"] = PaymentMethodsApi;