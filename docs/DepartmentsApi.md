# MsbPayApi.DepartmentsApi

All URIs are relative to *https://schoolbucks.msb-lab.com/msbpay/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientsClientIdDepartmentsGet**](DepartmentsApi.md#clientsClientIdDepartmentsGet) | **GET** /clients/{clientId}/departments | Get department IDs

<a name="clientsClientIdDepartmentsGet"></a>
# **clientsClientIdDepartmentsGet**
> InlineResponse20010 clientsClientIdDepartmentsGet(authorization, clientId, opts)

Get department IDs

Returns IDs for departments associated with the client

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.DepartmentsApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.
let clientId = "clientId_example"; // String | Client identifier assigned by MySchoolBucks
let opts = { 
  'page': 1, // Number | Requests page number for query results returning more than (rowCount) items
  'rowCount': 56, // Number | Requests results to be returned in groups of no more than (rowCount) items
  'searchText': "searchText_example" // String | Text to use to filter the items
};
apiInstance.clientsClientIdDepartmentsGet(authorization, clientId, opts, (error, data, response) => {
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

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

