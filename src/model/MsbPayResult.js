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
* Enum class MsbPayResult.
* @enum {}
* @readonly
*/
export default class MsbPayResult {
        /**
         * value: "unknown"
         * @const
         */
        unknown = "unknown";

        /**
         * value: "success"
         * @const
         */
        success = "success";

        /**
         * value: "error"
         * @const
         */
        error = "error";


    /**
    * Returns a <code>MsbPayResult</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MsbPayResult} The enum <code>MsbPayResult</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}