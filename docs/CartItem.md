# MsbPayApi.CartItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **String** | ID for MySchoolBucks store that the sale should be recorded with for reporting [Required if no default for dev account] | [optional] 
**departmentId** | **String** | ID for MySchoolBucks department that the sale should be recorded with for reporting | [optional] 
**storeId** | **String** | ID for MySchoolBucks store that the sale should be recorded with for reporting &lt;i&gt;[required if no default for dev account]&lt;/i&gt; | [optional] 
**itemId** | **String** | ID for the MySchoolBucks item that the sale should be recorded with for reporting | [optional] 
**itemName** | **String** | Name of item that the line items should display to user at checkout and any receipts | [optional] 
**paymentMethodId** | **String** | ID for the MySchoolBucks payment method configuration that this cart should process through &lt;i&gt;[required if no default for dev account]&lt;/i&gt; | [optional] 
**quantity** | **String** | Number of the items to purchase | [optional] 
**unitPrice** | **String** | Dollar amount price for each item in purchase | [optional] 
**displaySalesTaxRate** | **Number** | Percentage used to calculate sales tax. Used only for records, not used in calculation. Field &#x27;salesTaxAmount&#x27; is used in calculation of total in checkout | [optional] 
**salesTaxAmount** | **Number** | Amount to be added in checkout for sales tax | [optional] 
**studentName** | **String** | Student name to be included in the checkout display and on receipts | [optional] 
**reference** | **String** | Recorded for reporting | [optional] 
**properties** | [**[ItemProperty]**](ItemProperty.md) | Array of additional properties to be recorded with the order and payment line items | [optional] 
**glAccountId** | **String** | GL Account to which the payments for this item will be applied | [optional] 
