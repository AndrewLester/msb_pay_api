# MsbPayApi.ReconciliationApi

All URIs are relative to *https://schoolbucks.msb-lab.com/msbpay/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientsClientIdPaymentsGet**](ReconciliationApi.md#clientsClientIdPaymentsGet) | **GET** /clients/{clientId}/payments | Get payments for client
[**clientsClientIdPaymentsPaymentIdConfirmtransferPost**](ReconciliationApi.md#clientsClientIdPaymentsPaymentIdConfirmtransferPost) | **POST** /clients/{clientId}/payments/{paymentId}/confirmtransfer | Confirm payment

<a name="clientsClientIdPaymentsGet"></a>
# **clientsClientIdPaymentsGet**
> InlineResponse2006 clientsClientIdPaymentsGet(authorization, clientId, opts)

Get payments for client

Returns payments created by this developer key at indicated client

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.ReconciliationApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.
let clientId = "clientId_example"; // String | Client identifier assigned by MySchoolBucks
let opts = { 
  'cartId': "cartId_example", // String | Cart identifier assigned by MySchoolBucks
  'transferConfirmed': true, // Boolean | Specify to filter for transfers with confirmed (true) or unconfirmed (false) status. Default is to return both types unfiltered.
  'paymentType': new MsbPayApi.PaymentType(), // PaymentType | Specify to filter for only sale or credit (refund, reversal, etc.) records. Default is to return all types unfiltered
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns carts created on or after this date
  'endDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns carts created on or before this date
  'page': 1, // Number | Requests page number for query results returning more than (rowCount) items
  'rowCount': 56 // Number | Requests results to be returned in groups of no more than (rowCount) items
};
apiInstance.clientsClientIdPaymentsGet(authorization, clientId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Login details to authenticate call. | 
 **clientId** | **String**| Client identifier assigned by MySchoolBucks | 
 **cartId** | **String**| Cart identifier assigned by MySchoolBucks | [optional] 
 **transferConfirmed** | **Boolean**| Specify to filter for transfers with confirmed (true) or unconfirmed (false) status. Default is to return both types unfiltered. | [optional] 
 **paymentType** | [**PaymentType**](.md)| Specify to filter for only sale or credit (refund, reversal, etc.) records. Default is to return all types unfiltered | [optional] 
 **startDate** | **Date**| Returns carts created on or after this date | [optional] 
 **endDate** | **Date**| Returns carts created on or before this date | [optional] 
 **page** | **Number**| Requests page number for query results returning more than (rowCount) items | [optional] [default to 1]
 **rowCount** | **Number**| Requests results to be returned in groups of no more than (rowCount) items | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientsClientIdPaymentsPaymentIdConfirmtransferPost"></a>
# **clientsClientIdPaymentsPaymentIdConfirmtransferPost**
> InlineResponse2003 clientsClientIdPaymentsPaymentIdConfirmtransferPost(authorization, clientId, paymentId)

Confirm payment

Records payment as confirmed by the sales agent application. Used to acknowledge payment status.

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.ReconciliationApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.
let clientId = "clientId_example"; // String | Client identifier assigned by MySchoolBucks
let paymentId = "paymentId_example"; // String | Payment identifier assigned by MySchoolBucks

apiInstance.clientsClientIdPaymentsPaymentIdConfirmtransferPost(authorization, clientId, paymentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Login details to authenticate call. | 
 **clientId** | **String**| Client identifier assigned by MySchoolBucks | 
 **paymentId** | **String**| Payment identifier assigned by MySchoolBucks | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

