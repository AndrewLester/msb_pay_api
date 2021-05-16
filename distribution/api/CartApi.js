"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CartStatus = _interopRequireDefault(require("../model/CartStatus"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2001"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2002"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse2003"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse2004"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse201"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Cart service.
* @module api/CartApi
* @version v2
*/
var CartApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CartApi. 
  * @alias module:api/CartApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CartApi(apiClient) {
    _classCallCheck(this, CartApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the cartsCartIdAddItemsPost operation.
   * @callback module:api/CartApi~cartsCartIdAddItemsPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse201} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create cart item
   * Add a new cart item to the request. This appends to the request, you will need to send an update to the cart to change or remove the current contents.
   * @param {Object} opts Optional parameters
   * @param {module:api/CartApi~cartsCartIdAddItemsPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse201}
   */


  _createClass(CartApi, [{
    key: "cartsCartIdAddItemsPost",
    value: function cartsCartIdAddItemsPost(authorization, cartId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {
        'cartId': cartId
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse5["default"];
      return this.apiClient.callApi('/carts/{cartId}/addItems', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the cartsCartIdDelete operation.
     * @callback module:api/CartApi~cartsCartIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete cart
     * Cancels cart with supplied ID. Returns true if the cart was canceled, false otherwise.
     * @param {module:api/CartApi~cartsCartIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */

  }, {
    key: "cartsCartIdDelete",
    value: function cartsCartIdDelete(authorization, cartId, callback) {
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
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/carts/{cartId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the cartsCartIdGet operation.
     * @callback module:api/CartApi~cartsCartIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cart by ID
     * Returns a cart created via this developer key.
     * @param {module:api/CartApi~cartsCartIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */

  }, {
    key: "cartsCartIdGet",
    value: function cartsCartIdGet(authorization, cartId, callback) {
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
      return this.apiClient.callApi('/carts/{cartId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the cartsCartIdProcessPost operation.
     * @callback module:api/CartApi~cartsCartIdProcessPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Process cart
     * Process authorized cart created via this developer key and previously approved by customer. Process method only works on carts in Approved status.
     * @param {module:api/CartApi~cartsCartIdProcessPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */

  }, {
    key: "cartsCartIdProcessPost",
    value: function cartsCartIdProcessPost(authorization, cartId, callback) {
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
      var returnType = _InlineResponse4["default"];
      return this.apiClient.callApi('/carts/{cartId}/process', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the cartsCartIdPut operation.
     * @callback module:api/CartApi~cartsCartIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update cart
     * Replace the cart request with the supplied details. This does not patch the request, you will need to send the entire snapshot of the cart to update.
     * @param {Object} opts Optional parameters
     * @param {module:api/CartApi~cartsCartIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: "cartsCartIdPut",
    value: function cartsCartIdPut(authorization, cartId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {
        'cartId': cartId
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse5["default"];
      return this.apiClient.callApi('/carts/{cartId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the cartsGet operation.
     * @callback module:api/CartApi~cartsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read carts for developer key
     * Returns list of carts created via this developer key.
     * @param {Object} opts Optional parameters
     * @param {module:api/CartApi~cartsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */

  }, {
    key: "cartsGet",
    value: function cartsGet(authorization, opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'status': opts['status'],
        'createdDateStart': opts['createdDateStart'],
        'createdDateEnd': opts['createdDateEnd'],
        'updatedDateStart': opts['updatedDateStart'],
        'updatedDateEnd': opts['updatedDateEnd'],
        'clientId': opts['clientId'],
        'storeId': opts['storeId'],
        'paymentMethodId': opts['paymentMethodId'],
        'departmentId': opts['departmentId'],
        'itemId': opts['itemId'],
        'itemName': opts['itemName'],
        'studentName': opts['studentName'],
        'reference': opts['reference'],
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
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/carts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the cartsPost operation.
     * @callback module:api/CartApi~cartsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create cart
     * Prepares a cart to be processed in MySchoolBucks. Returns a new cart ID for the requested items.
     * @param {Object} opts Optional parameters
     * @param {module:api/CartApi~cartsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: "cartsPost",
    value: function cartsPost(authorization, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse5["default"];
      return this.apiClient.callApi('/carts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return CartApi;
}();

exports["default"] = CartApi;