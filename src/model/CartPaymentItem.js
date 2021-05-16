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

import ApiClient from '../ApiClient';
import ItemProperty from './ItemProperty';

/**
* The CartPaymentItem model module.
* @module model/CartPaymentItem
* @version v2
*/
export default class CartPaymentItem {
    /**
    * Constructs a new <code>CartPaymentItem</code>.
    * Payment item details
    * @alias module:model/CartPaymentItem
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CartPaymentItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CartPaymentItem} obj Optional instance to populate.
    * @return {module:model/CartPaymentItem} The populated <code>CartPaymentItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartPaymentItem();
                        
            
            if (data.hasOwnProperty('paymentItemId')) {
                obj['paymentItemId'] = ApiClient.convertToType(data['paymentItemId'], 'String');
            }
            if (data.hasOwnProperty('itemName')) {
                obj['itemName'] = ApiClient.convertToType(data['itemName'], 'String');
            }
            if (data.hasOwnProperty('itemId')) {
                obj['itemId'] = ApiClient.convertToType(data['itemId'], 'String');
            }
            if (data.hasOwnProperty('unitPrice')) {
                obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('userTxnFee')) {
                obj['userTxnFee'] = ApiClient.convertToType(data['userTxnFee'], 'Number');
            }
            if (data.hasOwnProperty('clientTxnFee')) {
                obj['clientTxnFee'] = ApiClient.convertToType(data['clientTxnFee'], 'Number');
            }
            if (data.hasOwnProperty('salesTax')) {
                obj['salesTax'] = ApiClient.convertToType(data['salesTax'], 'Number');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('glAccountId')) {
                obj['glAccountId'] = ApiClient.convertToType(data['glAccountId'], 'String');
            }
            if (data.hasOwnProperty('studentName')) {
                obj['studentName'] = ApiClient.convertToType(data['studentName'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [ItemProperty]);
            }
        }
        return obj;
    }

    /**
    * ID of the payment item assigned by MySchoolBucks
    * @member {String} paymentItemId
    */
    'paymentItemId' = undefined;
    /**
    * Identifies the name of item sold - maps to the CartItem name from the request
    * @member {String} itemName
    */
    'itemName' = undefined;
    /**
    * Identifies the ID of item sold - maps to the CartItem ID from the request
    * @member {String} itemId
    */
    'itemId' = undefined;
    /**
    * Price for each product in this line item
    * @member {Number} unitPrice
    */
    'unitPrice' = undefined;
    /**
    * Number of products allocated to this line item
    * @member {Number} quantity
    */
    'quantity' = undefined;
    /**
    * Total price for this line item
    * @member {Number} price
    */
    'price' = undefined;
    /**
    * MySchoolBucks fees assigned to the user for this line item
    * @member {Number} userTxnFee
    */
    'userTxnFee' = undefined;
    /**
    * MySchoolBucks fees assigned to the sales district for this line item
    * @member {Number} clientTxnFee
    */
    'clientTxnFee' = undefined;
    /**
    * Sales tax allocated to this line item
    * @member {Number} salesTax
    */
    'salesTax' = undefined;
    /**
    * TODO - get a description for what this is on MSB
    * @member {String} reference
    */
    'reference' = undefined;
    /**
    * GL Account applied to the cart item at time of sale/refund
    * @member {String} glAccountId
    */
    'glAccountId' = undefined;
    /**
    * Optional student name passed with the cart item
    * @member {String} studentName
    */
    'studentName' = undefined;
    /**
    * Line item properties - maps to the CartItem properties from the request
    * @member {Array.<module:model/ItemProperty>} properties
    */
    'properties' = undefined;




}
