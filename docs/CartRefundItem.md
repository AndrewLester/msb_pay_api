# MsbPayApi.CartRefundItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**departmentId** | **String** | ID for MySchoolBucks department that the refund should be recorded with for reporting | [optional] 
**itemId** | **String** | ID for the MySchoolBucks item that the refund should be recorded with for reporting | 
**itemName** | **String** | Name of item that the line items should display to user at checkout and any receipts | 
**quantity** | **String** | Number of the items to refund | 
**unitPrice** | **String** | Dollar amount price for each unit refunded | 
**salesTax** | **String** | Dollar amount total sales tax for this cart item | [optional] 
**studentName** | **String** | Student name to be included in the reporting | [optional] 
**glAccountId** | **String** | GL Account to which the refund for this item will be applied | [optional] 
**reference** | **String** | Recorded for reporting | [optional] 
**properties** | [**[ItemProperty]**](ItemProperty.md) | Array of additional properties to be recorded with the order and payment line items | [optional] 
