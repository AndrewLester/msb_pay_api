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
import ClientProperty from './ClientProperty';
import ListPaging from './ListPaging';
import MsbPayResponse from './MsbPayResponse';
import MsbPayResult from './MsbPayResult';

/**
* The InlineResponse2008 model module.
* @module model/InlineResponse2008
* @version v2
*/
export default class InlineResponse2008 {
    /**
    * Constructs a new <code>InlineResponse2008</code>.
    * @alias module:model/InlineResponse2008
    * @class
    * @extends module:model/MsbPayResponse
    */

    constructor() {
        MsbPayResponse.call(this);
        
        
    }

    /**
    * Constructs a <code>InlineResponse2008</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse2008} obj Optional instance to populate.
    * @return {module:model/InlineResponse2008} The populated <code>InlineResponse2008</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2008();
            
            MsbPayResponse.constructFromObject(data, obj);
            
            if (data.hasOwnProperty('paymentMethods')) {
                obj['paymentMethods'] = ApiClient.convertToType(data['paymentMethods'], [ClientProperty]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ListPaging.constructFromObject(data['meta']);
            }
        }
        return obj;
    }

    /**
    * Valid payment method names and IDs for the given client
    * @member {Array.<module:model/ClientProperty>} paymentMethods
    */
    'paymentMethods' = undefined;
    /**
    * @member {module:model/ListPaging} meta
    */
    'meta' = undefined;




}
