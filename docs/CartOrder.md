# MsbPayApi.CartOrder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **String** | ID for MySchoolBucks store that the order was recorded with | [optional] 
**orderId** | **String** | Identifier of the order object | [optional] 
**_date** | **Date** | Date the order was created | [optional] 
**status** | [**OrderStatus**](OrderStatus.md) |  | [optional] 
**recipientName** | **String** | Customer name tied to the order by the user account or input from a guest checkout | [optional] 
**recipientEmail** | **String** | Customer email tied to the order by the user account or input from a guest checkout | [optional] 
**billingAcctDesc** | **String** | Short string reference for the type of account and last 4 of account number submitted to pay order | [optional] 
**tag** | **Object** | TODO - get description | [optional] 
**storeId** | **String** | ID for MySchoolBucks store that the order has been recorded to | [optional] 
**paymentMethodId** | **String** | ID for the MySchoolBucks payment method configuration that this order has processed through | [optional] 
**cartOrderItems** | [**[CartOrderItem]**](CartOrderItem.md) | Orders associated with this cart - MySchoolBucks may break a cart into multiple orders based on gateway and store settings | [optional] 
