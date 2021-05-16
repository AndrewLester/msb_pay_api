"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2005"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2006"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Payment service.
* @module api/PaymentApi
* @version v2
*/
var PaymentApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PaymentApi. 
  * @alias module:api/PaymentApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentApi(apiClient) {
    _classCallCheck(this, PaymentApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the cartsCartIdOrdersGet operation.
   * @callback module:api/PaymentApi~cartsCartIdOrdersGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2005} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get orders for cart
   * Return list of orders for supplied cart. Orders are in intermediate structure between cart requests and payments.
   * @param {module:api/PaymentApi~cartsCartIdOrdersGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2005}
   */


  _createClass(PaymentApi, [{
    key: "cartsCartIdOrdersGet",
    value: function cartsCartIdOrdersGet(authorization, cartId, callback) {
      var postBody = null;
      var pathParams = {
        'cartId': cartId
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
      return this.apiClient.callApi('/carts/{cartId}/orders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the cartsCartIdPaymentsGet operation.
     * @callback module:api/PaymentApi~cartsCartIdPaymentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get payments for cart
     * Return list of payments for supplied cart.
     * @param {module:api/PaymentApi~cartsCartIdPaymentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */

  }, {
    key: "cartsCartIdPaymentsGet",
    value: function cartsCartIdPaymentsGet(authorization, cartId, callback) {
      var postBody = null;
      var pathParams = {
        'cartId': cartId
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/carts/{cartId}/payments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return PaymentApi;
}();

exports["default"] = PaymentApi;