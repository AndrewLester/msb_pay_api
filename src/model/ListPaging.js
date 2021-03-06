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

/**
* The ListPaging model module.
* @module model/ListPaging
* @version v2
*/
export default class ListPaging {
    /**
    * Constructs a new <code>ListPaging</code>.
    * List item stats for navigating result sets
    * @alias module:model/ListPaging
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ListPaging</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ListPaging} obj Optional instance to populate.
    * @return {module:model/ListPaging} The populated <code>ListPaging</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListPaging();
                        
            
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('prev')) {
                obj['prev'] = ApiClient.convertToType(data['prev'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Current page number of result set when split by rowCount
    * @member {Number} page
    */
    'page' = undefined;
    /**
    * URL of previous results from set. Will be empty for first page in set.
    * @member {String} prev
    */
    'prev' = undefined;
    /**
    * URL of current results from set.
    * @member {String} self
    */
    'self' = undefined;
    /**
    * URL of next results from set. Will be empty for final page in set.
    * @member {String} next
    */
    'next' = undefined;
    /**
    * Total number of records that are available with current search filter options.
    * @member {Number} total
    */
    'total' = undefined;




}
