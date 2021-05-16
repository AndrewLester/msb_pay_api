# MsbPayApi.CartOrderItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderItemId** | **String** | ID assigned to the order item by MySchoolBucks | [optional] 
**itemName** | **String** | Name of the product | [optional] 
**itemId** | **String** | ID of the product | [optional] 
**unitPrice** | **Number** | Price for each product in this line item | [optional] 
**quantity** | **Number** | Number of products allocated to this line item | [optional] 
**price** | **Number** | Total price for this line item | [optional] 
**userTxnFee** | **Number** | MySchoolBucks fees assigned to the user for this line item | [optional] 
**clientTxnFee** | **Number** | MySchoolBucks fees assigned to the sales district for this line item | [optional] 
**salesTax** | **Number** | Sales tax allocated to this line item | [optional] 
**reference** | **String** | Recorded for reporting | [optional] 
**properties** | [**[ItemProperty]**](ItemProperty.md) | Line item properties - maps to the CartItem properties from the request | [optional] 
**studentName** | **String** | Student name to be included in reporting | [optional] 
