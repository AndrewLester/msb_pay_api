# MsbPayApi.StoresApi

All URIs are relative to *https://schoolbucks.msb-lab.com/msbpay/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientsClientIdStoresGet**](StoresApi.md#clientsClientIdStoresGet) | **GET** /clients/{clientId}/stores | Get store IDs

<a name="clientsClientIdStoresGet"></a>
# **clientsClientIdStoresGet**
> InlineResponse2009 clientsClientIdStoresGet(authorization, clientId, opts)

Get store IDs

Returns IDs for stores associated with the client.

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.StoresApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.
let clientId = "clientId_example"; // String | Client identifier assigned by MySchoolBucks
let opts = { 
  'page': 1, // Number | Requests page number for query results returning more than (rowCount) items
  'rowCount': 56, // Number | Requests results to be returned in groups of no more than (rowCount) items
  'searchText': "searchText_example" // String | Text to use to filter the items
};
apiInstance.clientsClientIdStoresGet(authorization, clientId, opts, (error, data, response) => {
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
 **page** | **Number**| Requests page number for query results returning more than (rowCount) items | [optional] [default to 1]
 **rowCount** | **Number**| Requests results to be returned in groups of no more than (rowCount) items | [optional] 
 **searchText** | **String**| Text to use to filter the items | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

