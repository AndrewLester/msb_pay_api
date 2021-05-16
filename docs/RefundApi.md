# MsbPayApi.RefundApi

All URIs are relative to *https://schoolbucks.msb-lab.com/msbpay/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cartsCartIdPaymentsPaymentIdRefundPost**](RefundApi.md#cartsCartIdPaymentsPaymentIdRefundPost) | **POST** /carts/{cartId}/payments/{paymentId}/refund | Refund payment

<a name="cartsCartIdPaymentsPaymentIdRefundPost"></a>
# **cartsCartIdPaymentsPaymentIdRefundPost**
> InlineResponse2007 cartsCartIdPaymentsPaymentIdRefundPost(authorizationcartIdpaymentId, opts)

Refund payment

Refunds partial or whole payments created by the Cart processing.

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.RefundApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.
let cartId = "cartId_example"; // String | Cart identifier assigned by MySchoolBucks.
let paymentId = "paymentId_example"; // String | Payment identifier assigned by MySchoolBucks
let opts = { 
  'body': null // Object | Item ID must be fewer than or equal to 60 characters, and may contain only letters, numbers, underscores, dashes, periods, or at signs.<br /> Item name must be fewer than or equal to 80 characters.<br /> Unit price must be a positive number.<br /> Quantity must be greater than 0.<br /><br /> OPTIONAL FIELDS<br /> Student name must fewer than or equal to 60 characters.<br /> Reference must be fewer than or equal to 80 characters.<br /> Property names must not be empty or null.<br /> Property Display Response must be "visible", "hidden", or null/empty.<br /> Redirect URL and Return to Site URL must be fewer than or equal to 1900 characters.<br />
};
apiInstance.cartsCartIdPaymentsPaymentIdRefundPost(authorizationcartIdpaymentId, opts, (error, data, response) => {
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
 **paymentId** | **String**| Payment identifier assigned by MySchoolBucks | 
 **body** | [**Object**](Object.md)| Item ID must be fewer than or equal to 60 characters, and may contain only letters, numbers, underscores, dashes, periods, or at signs.&lt;br /&gt; Item name must be fewer than or equal to 80 characters.&lt;br /&gt; Unit price must be a positive number.&lt;br /&gt; Quantity must be greater than 0.&lt;br /&gt;&lt;br /&gt; OPTIONAL FIELDS&lt;br /&gt; Student name must fewer than or equal to 60 characters.&lt;br /&gt; Reference must be fewer than or equal to 80 characters.&lt;br /&gt; Property names must not be empty or null.&lt;br /&gt; Property Display Response must be &quot;visible&quot;, &quot;hidden&quot;, or null/empty.&lt;br /&gt; Redirect URL and Return to Site URL must be fewer than or equal to 1900 characters.&lt;br /&gt; | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

