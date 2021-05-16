"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

var _MsbPayResponse = _interopRequireDefault(require("../model/MsbPayResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Utility service.
* @module api/UtilityApi
* @version v2
*/
var UtilityApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UtilityApi. 
  * @alias module:api/UtilityApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UtilityApi(apiClient) {
    _classCallCheck(this, UtilityApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the rootGet operation.
   * @callback module:api/UtilityApi~rootGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/MsbPayResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * System details
   * Returns details of API version, server node, and application version.
   * @param {module:api/UtilityApi~rootGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/MsbPayResponse}
   */


  _createClass(UtilityApi, [{
    key: "rootGet",
    value: function rootGet(authorization, callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MsbPayResponse["default"];
      return this.apiClient.callApi('/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the testExceptionsGet operation.
     * @callback module:api/UtilityApi~testExceptionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MsbPayResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Developer tool to test responses from exceptions.
     * Returns details of developer key&#x27;s account holder and configuration.
     * @param {Object} opts Optional parameters
     * @param {module:api/UtilityApi~testExceptionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MsbPayResponse}
     */

  }, {
    key: "testExceptionsGet",
    value: function testExceptionsGet(authorization, opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'NotAuthorizedException': opts['notAuthorizedException'],
        'ForbiddenException': opts['forbiddenException'],
        'NotFoundException': opts['notFoundException'],
        'NotAllowedException': opts['notAllowedException'],
        'NotAcceptableException': opts['notAcceptableException'],
        'NotSupportedException': opts['notSupportedException'],
        'ClientErrorException': opts['clientErrorException'],
        'InternalServerErrorException': opts['internalServerErrorException'],
        'ServiceUnavailableException': opts['serviceUnavailableException'],
        'ServerErrorException': opts['serverErrorException'],
        'WebApplicationException': opts['webApplicationException'],
        'RuntimeException': opts['runtimeException'],
        'BadRequestException': opts['badRequestException'],
        'NullPointerException': opts['nullPointerException']
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MsbPayResponse["default"];
      return this.apiClient.callApi('/testExceptions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the whoAmIGet operation.
     * @callback module:api/UtilityApi~whoAmIGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Account details
     * Returns details of developer key&#x27;s account holder and configuration.
     * @param {module:api/UtilityApi~whoAmIGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */

  }, {
    key: "whoAmIGet",
    value: function whoAmIGet(authorization, callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/whoAmI', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return UtilityApi;
}();

exports["default"] = UtilityApi;