# MsbPayApi.PaymentApi

All URIs are relative to *https://schoolbucks.msb-lab.com/msbpay/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cartsCartIdOrdersGet**](PaymentApi.md#cartsCartIdOrdersGet) | **GET** /carts/{cartId}/orders | Get orders for cart
[**cartsCartIdPaymentsGet**](PaymentApi.md#cartsCartIdPaymentsGet) | **GET** /carts/{cartId}/payments | Get payments for cart

<a name="cartsCartIdOrdersGet"></a>
# **cartsCartIdOrdersGet**
> InlineResponse2005 cartsCartIdOrdersGet(authorization, cartId)

Get orders for cart

Return list of orders for supplied cart. Orders are in intermediate structure between cart requests and payments.

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.PaymentApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.
let cartId = "cartId_example"; // String | Cart identifier assigned by MySchoolBucks.

apiInstance.cartsCartIdOrdersGet(authorization, cartId, (error, data, response) => {
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
 **cartId** | **String**| Cart identifier assigned by MySchoolBucks. | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cartsCartIdPaymentsGet"></a>
# **cartsCartIdPaymentsGet**
> InlineResponse2006 cartsCartIdPaymentsGet(authorization, cartId)

Get payments for cart

Return list of payments for supplied cart.

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.PaymentApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.
let cartId = "cartId_example"; // String | Cart identifier assigned by MySchoolBucks.

apiInstance.cartsCartIdPaymentsGet(authorization, cartId, (error, data, response) => {
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
 **cartId** | **String**| Cart identifier assigned by MySchoolBucks. | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

