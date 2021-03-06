/**
 * MSB Pay API
 * API specification for payment processing via the MySchoolBucks.com cart checkout. <br /> <a href=\"MSBPayAPI-v2-changelog.txt\">Changelog</a>
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import InlineResponse2007 from '../model/InlineResponse2007';

/**
* Refund service.
* @module api/RefundApi
* @version v2
*/
export default class RefundApi {

    /**
    * Constructs a new RefundApi. 
    * @alias module:api/RefundApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    cartsCartIdPaymentsPaymentIdRefundPost(authorization, cartId, paymentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        'cartId': cartId,
        'paymentId': paymentId
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2007;

      return this.apiClient.callApi(
        '/carts/{cartId}/payments/{paymentId}/refund', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
