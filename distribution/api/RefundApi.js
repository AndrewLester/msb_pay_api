"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2007"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Refund service.
* @module api/RefundApi
* @version v2
*/
var RefundApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RefundApi. 
  * @alias module:api/RefundApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RefundApi(apiClient) {
    _classCallCheck(this, RefundApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the cartsCartIdPaymentsPaymentIdRefundPost operation.
   * @callback module:api/RefundApi~cartsCartIdPaymentsPaymentIdRefundPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2007} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Refund payment
   * Refunds partial or whole payments created by the Cart processing.
   * @param {Object} opts Optional parameters
   * @param {module:api/RefundApi~cartsCartIdPaymentsPaymentIdRefundPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2007}
   */


  _createClass(RefundApi, [{
    key: "cartsCartIdPaymentsPaymentIdRefundPost",
    value: function cartsCartIdPaymentsPaymentIdRefundPost(authorization, cartId, paymentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {
        'cartId': cartId,
        'paymentId': paymentId
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/carts/{cartId}/payments/{paymentId}/refund', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return RefundApi;
}();

exports["default"] = RefundApi;