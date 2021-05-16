# MsbPayApi.CartPaymentItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentItemId** | **String** | ID of the payment item assigned by MySchoolBucks | [optional] 
**itemName** | **String** | Identifies the name of item sold - maps to the CartItem name from the request | [optional] 
**itemId** | **String** | Identifies the ID of item sold - maps to the CartItem ID from the request | [optional] 
**unitPrice** | **Number** | Price for each product in this line item | [optional] 
**quantity** | **Number** | Number of products allocated to this line item | [optional] 
**price** | **Number** | Total price for this line item | [optional] 
**userTxnFee** | **Number** | MySchoolBucks fees assigned to the user for this line item | [optional] 
**clientTxnFee** | **Number** | MySchoolBucks fees assigned to the sales district for this line item | [optional] 
**salesTax** | **Number** | Sales tax allocated to this line item | [optional] 
**reference** | **String** | TODO - get a description for what this is on MSB | [optional] 
**glAccountId** | **String** | GL Account applied to the cart item at time of sale/refund | [optional] 
**studentName** | **String** | Optional student name passed with the cart item | [optional] 
**properties** | [**[ItemProperty]**](ItemProperty.md) | Line item properties - maps to the CartItem properties from the request | [optional] 
