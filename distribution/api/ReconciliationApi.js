"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2003"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2006"));

var _PaymentType = _interopRequireDefault(require("../model/PaymentType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Reconciliation service.
* @module api/ReconciliationApi
* @version v2
*/
var ReconciliationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ReconciliationApi. 
  * @alias module:api/ReconciliationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ReconciliationApi(apiClient) {
    _classCallCheck(this, ReconciliationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the clientsClientIdPaymentsGet operation.
   * @callback module:api/ReconciliationApi~clientsClientIdPaymentsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2006} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get payments for client
   * Returns payments created by this developer key at indicated client
   * @param {Object} opts Optional parameters
   * @param {module:api/ReconciliationApi~clientsClientIdPaymentsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2006}
   */


  _createClass(ReconciliationApi, [{
    key: "clientsClientIdPaymentsGet",
    value: function clientsClientIdPaymentsGet(authorization, clientId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {
        'clientId': clientId
      };
      var queryParams = {
        'cartId': opts['cartId'],
        'transferConfirmed': opts['transferConfirmed'],
        'paymentType': opts['paymentType'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'page': opts['page'],
        'rowCount': opts['rowCount']
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/clients/{clientId}/payments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the clientsClientIdPaymentsPaymentIdConfirmtransferPost operation.
     * @callback module:api/ReconciliationApi~clientsClientIdPaymentsPaymentIdConfirmtransferPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Confirm payment
     * Records payment as confirmed by the sales agent application. Used to acknowledge payment status.
     * @param {module:api/ReconciliationApi~clientsClientIdPaymentsPaymentIdConfirmtransferPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */

  }, {
    key: "clientsClientIdPaymentsPaymentIdConfirmtransferPost",
    value: function clientsClientIdPaymentsPaymentIdConfirmtransferPost(authorization, clientId, paymentId, callback) {
      var postBody = null;
      var pathParams = {
        'clientId': clientId,
        'paymentId': paymentId
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/clients/{clientId}/payments/{paymentId}/confirmtransfer', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return ReconciliationApi;
}();

exports["default"] = ReconciliationApi;