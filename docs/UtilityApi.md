# MsbPayApi.UtilityApi

All URIs are relative to *https://schoolbucks.msb-lab.com/msbpay/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rootGet**](UtilityApi.md#rootGet) | **GET** / | System details
[**testExceptionsGet**](UtilityApi.md#testExceptionsGet) | **GET** /testExceptions | Developer tool to test responses from exceptions.
[**whoAmIGet**](UtilityApi.md#whoAmIGet) | **GET** /whoAmI | Account details

<a name="rootGet"></a>
# **rootGet**
> MsbPayResponse rootGet(authorization)

System details

Returns details of API version, server node, and application version.

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.UtilityApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.

apiInstance.rootGet(authorization, (error, data, response) => {
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

### Return type

[**MsbPayResponse**](MsbPayResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testExceptionsGet"></a>
# **testExceptionsGet**
> MsbPayResponse testExceptionsGet(authorization, opts)

Developer tool to test responses from exceptions.

Returns details of developer key&#x27;s account holder and configuration.

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.UtilityApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.
let opts = { 
  'notAuthorizedException': "notAuthorizedException_example", // String | 
  'forbiddenException': "forbiddenException_example", // String | 
  'notFoundException': "notFoundException_example", // String | 
  'notAllowedException': "notAllowedException_example", // String | 
  'notAcceptableException': "notAcceptableException_example", // String | 
  'notSupportedException': "notSupportedException_example", // String | 
  'clientErrorException': "clientErrorException_example", // String | 
  'internalServerErrorException': "internalServerErrorException_example", // String | 
  'serviceUnavailableException': "serviceUnavailableException_example", // String | 
  'serverErrorException': "serverErrorException_example", // String | 
  'webApplicationException': "webApplicationException_example", // String | 
  'runtimeException': "runtimeException_example", // String | 
  'badRequestException': "badRequestException_example", // String | 
  'nullPointerException': "nullPointerException_example" // String | 
};
apiInstance.testExceptionsGet(authorization, opts, (error, data, response) => {
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
 **notAuthorizedException** | **String**|  | [optional] 
 **forbiddenException** | **String**|  | [optional] 
 **notFoundException** | **String**|  | [optional] 
 **notAllowedException** | **String**|  | [optional] 
 **notAcceptableException** | **String**|  | [optional] 
 **notSupportedException** | **String**|  | [optional] 
 **clientErrorException** | **String**|  | [optional] 
 **internalServerErrorException** | **String**|  | [optional] 
 **serviceUnavailableException** | **String**|  | [optional] 
 **serverErrorException** | **String**|  | [optional] 
 **webApplicationException** | **String**|  | [optional] 
 **runtimeException** | **String**|  | [optional] 
 **badRequestException** | **String**|  | [optional] 
 **nullPointerException** | **String**|  | [optional] 

### Return type

[**MsbPayResponse**](MsbPayResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="whoAmIGet"></a>
# **whoAmIGet**
> InlineResponse200 whoAmIGet(authorization)

Account details

Returns details of developer key&#x27;s account holder and configuration.

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.UtilityApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.

apiInstance.whoAmIGet(authorization, (error, data, response) => {
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

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

