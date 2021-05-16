# MsbPayApi.CartApi

All URIs are relative to *https://schoolbucks.msb-lab.com/msbpay/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cartsCartIdAddItemsPost**](CartApi.md#cartsCartIdAddItemsPost) | **POST** /carts/{cartId}/addItems | Create cart item
[**cartsCartIdDelete**](CartApi.md#cartsCartIdDelete) | **DELETE** /carts/{cartId} | Delete cart
[**cartsCartIdGet**](CartApi.md#cartsCartIdGet) | **GET** /carts/{cartId} | Get cart by ID
[**cartsCartIdProcessPost**](CartApi.md#cartsCartIdProcessPost) | **POST** /carts/{cartId}/process | Process cart
[**cartsCartIdPut**](CartApi.md#cartsCartIdPut) | **PUT** /carts/{cartId} | Update cart
[**cartsGet**](CartApi.md#cartsGet) | **GET** /carts | Read carts for developer key
[**cartsPost**](CartApi.md#cartsPost) | **POST** /carts | Create cart

<a name="cartsCartIdAddItemsPost"></a>
# **cartsCartIdAddItemsPost**
> InlineResponse201 cartsCartIdAddItemsPost(authorizationcartId, opts)

Create cart item

Add a new cart item to the request. This appends to the request, you will need to send an update to the cart to change or remove the current contents.

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.CartApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.
let cartId = "cartId_example"; // String | Cart identifier assigned by MySchoolBucks.
let opts = { 
  'body': null // Object | Item ID must be fewer than or equal to 60 characters, and may contain only letters, numbers, underscores, dashes, periods, or at signs.<br /> Item name must be fewer than or equal to 80 characters.<br /> Unit price must be a positive number.<br /> Quantity must be greater than 0.<br /><br /> OPTIONAL FIELDS<br /> Student name must fewer than or equal to 60 characters.<br /> Reference must be fewer than or equal to 80 characters.<br /> Property names must not be empty or null.<br /> Property Display Response must be "visible", "hidden", or null/empty.<br /> Redirect URL and Return to Site URL must be fewer than or equal to 1900 characters.<br />
};
apiInstance.cartsCartIdAddItemsPost(authorizationcartId, opts, (error, data, response) => {
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
 **body** | [**Object**](Object.md)| Item ID must be fewer than or equal to 60 characters, and may contain only letters, numbers, underscores, dashes, periods, or at signs.&lt;br /&gt; Item name must be fewer than or equal to 80 characters.&lt;br /&gt; Unit price must be a positive number.&lt;br /&gt; Quantity must be greater than 0.&lt;br /&gt;&lt;br /&gt; OPTIONAL FIELDS&lt;br /&gt; Student name must fewer than or equal to 60 characters.&lt;br /&gt; Reference must be fewer than or equal to 80 characters.&lt;br /&gt; Property names must not be empty or null.&lt;br /&gt; Property Display Response must be &quot;visible&quot;, &quot;hidden&quot;, or null/empty.&lt;br /&gt; Redirect URL and Return to Site URL must be fewer than or equal to 1900 characters.&lt;br /&gt; | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cartsCartIdDelete"></a>
# **cartsCartIdDelete**
> InlineResponse2003 cartsCartIdDelete(authorization, cartId)

Delete cart

Cancels cart with supplied ID. Returns true if the cart was canceled, false otherwise.

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.CartApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.
let cartId = "cartId_example"; // String | Cart identifier assigned by MySchoolBucks.

apiInstance.cartsCartIdDelete(authorization, cartId, (error, data, response) => {
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

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cartsCartIdGet"></a>
# **cartsCartIdGet**
> InlineResponse2002 cartsCartIdGet(authorization, cartId)

Get cart by ID

Returns a cart created via this developer key.

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.CartApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.
let cartId = "cartId_example"; // String | Cart identifier assigned by MySchoolBucks.

apiInstance.cartsCartIdGet(authorization, cartId, (error, data, response) => {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cartsCartIdProcessPost"></a>
# **cartsCartIdProcessPost**
> InlineResponse2004 cartsCartIdProcessPost(authorization, cartId)

Process cart

Process authorized cart created via this developer key and previously approved by customer. Process method only works on carts in Approved status.

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.CartApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.
let cartId = "cartId_example"; // String | Cart identifier assigned by MySchoolBucks.

apiInstance.cartsCartIdProcessPost(authorization, cartId, (error, data, response) => {
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

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cartsCartIdPut"></a>
# **cartsCartIdPut**
> InlineResponse201 cartsCartIdPut(authorizationcartId, opts)

Update cart

Replace the cart request with the supplied details. This does not patch the request, you will need to send the entire snapshot of the cart to update.

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.CartApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.
let cartId = "cartId_example"; // String | Cart identifier assigned by MySchoolBucks.
let opts = { 
  'body': null // Object | Item ID must be fewer than or equal to 60 characters, and may contain only letters, numbers, underscores, dashes, periods, or at signs.<br /> Item name must be fewer than or equal to 80 characters.<br /> Unit price must be a positive number.<br /> Quantity must be greater than 0.<br /><br /> OPTIONAL FIELDS<br /> Student name must fewer than or equal to 60 characters.<br /> Reference must be fewer than or equal to 80 characters.<br /> Property names must not be empty or null.<br /> Property Display Response must be "visible", "hidden", or null/empty.<br /> Redirect URL and Return to Site URL must be fewer than or equal to 1900 characters.<br />
};
apiInstance.cartsCartIdPut(authorizationcartId, opts, (error, data, response) => {
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
 **body** | [**Object**](Object.md)| Item ID must be fewer than or equal to 60 characters, and may contain only letters, numbers, underscores, dashes, periods, or at signs.&lt;br /&gt; Item name must be fewer than or equal to 80 characters.&lt;br /&gt; Unit price must be a positive number.&lt;br /&gt; Quantity must be greater than 0.&lt;br /&gt;&lt;br /&gt; OPTIONAL FIELDS&lt;br /&gt; Student name must fewer than or equal to 60 characters.&lt;br /&gt; Reference must be fewer than or equal to 80 characters.&lt;br /&gt; Property names must not be empty or null.&lt;br /&gt; Property Display Response must be &quot;visible&quot;, &quot;hidden&quot;, or null/empty.&lt;br /&gt; Redirect URL and Return to Site URL must be fewer than or equal to 1900 characters.&lt;br /&gt; | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cartsGet"></a>
# **cartsGet**
> InlineResponse2001 cartsGet(authorization, opts)

Read carts for developer key

Returns list of carts created via this developer key.

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.CartApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.
let opts = { 
  'status': new MsbPayApi.CartStatus(), // CartStatus | Status of API cart
  'createdDateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns carts created on or after this date
  'createdDateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns carts created on or before this date
  'updatedDateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns carts updated on or after this date
  'updatedDateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns carts updated on or before this date
  'clientId': "clientId_example", // String | ID for MySchoolBucks district where the sale was recorded
  'storeId': "storeId_example", // String | ID for the district-level store where the sale was recorded
  'paymentMethodId': "paymentMethodId_example", // String | ID for the district-level payment method where the sale was recorded
  'departmentId': "departmentId_example", // String | ID for the optional district-level department where the sale was recorded
  'itemId': "itemId_example", // String | ID for the cart item as configured when cart was created. <i>note - this is an exact match, no wildcard or partials will work</i>
  'itemName': "itemName_example", // String | Name for the cart item as configured when cart was created. <i>note - this is an exact match, no wildcard or partials will work</i>
  'studentName': "studentName_example", // String | Student name for the cart item if configured when cart was created. <i>note - this is an exact match, no wildcard or partials will work</i>
  'reference': "reference_example", // String | Reference string created by your system for the cart item if configured when the cart was created. <i>note - this is an exact match, no wildcard or partials will work</i>
  'page': 1, // Number | Requests page number for query results returning more than (rowCount) items
  'rowCount': 56 // Number | Requests results to be returned in groups of no more than (rowCount) items
};
apiInstance.cartsGet(authorization, opts, (error, data, response) => {
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
 **status** | [**CartStatus**](.md)| Status of API cart | [optional] 
 **createdDateStart** | **Date**| Returns carts created on or after this date | [optional] 
 **createdDateEnd** | **Date**| Returns carts created on or before this date | [optional] 
 **updatedDateStart** | **Date**| Returns carts updated on or after this date | [optional] 
 **updatedDateEnd** | **Date**| Returns carts updated on or before this date | [optional] 
 **clientId** | **String**| ID for MySchoolBucks district where the sale was recorded | [optional] 
 **storeId** | **String**| ID for the district-level store where the sale was recorded | [optional] 
 **paymentMethodId** | **String**| ID for the district-level payment method where the sale was recorded | [optional] 
 **departmentId** | **String**| ID for the optional district-level department where the sale was recorded | [optional] 
 **itemId** | **String**| ID for the cart item as configured when cart was created. &lt;i&gt;note - this is an exact match, no wildcard or partials will work&lt;/i&gt; | [optional] 
 **itemName** | **String**| Name for the cart item as configured when cart was created. &lt;i&gt;note - this is an exact match, no wildcard or partials will work&lt;/i&gt; | [optional] 
 **studentName** | **String**| Student name for the cart item if configured when cart was created. &lt;i&gt;note - this is an exact match, no wildcard or partials will work&lt;/i&gt; | [optional] 
 **reference** | **String**| Reference string created by your system for the cart item if configured when the cart was created. &lt;i&gt;note - this is an exact match, no wildcard or partials will work&lt;/i&gt; | [optional] 
 **page** | **Number**| Requests page number for query results returning more than (rowCount) items | [optional] [default to 1]
 **rowCount** | **Number**| Requests results to be returned in groups of no more than (rowCount) items | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cartsPost"></a>
# **cartsPost**
> InlineResponse201 cartsPost(authorization, opts)

Create cart

Prepares a cart to be processed in MySchoolBucks. Returns a new cart ID for the requested items.

### Example
```javascript
import MsbPayApi from 'msb_pay_api';

let apiInstance = new MsbPayApi.CartApi();
let authorization = "authorization_example"; // String | Login details to authenticate call.
let opts = { 
  'body': null // Object | Item ID must be fewer than or equal to 60 characters, and may contain only letters, numbers, underscores, dashes, periods, or at signs.<br /> Item name must be fewer than or equal to 80 characters.<br /> Unit price must be a positive number.<br /> Quantity must be greater than 0.<br /><br /> OPTIONAL FIELDS<br /> Student name must fewer than or equal to 60 characters.<br /> Reference must be fewer than or equal to 80 characters.<br /> Property names must not be empty or null.<br /> Property Display Response must be "visible", "hidden", or null/empty.<br /> Redirect URL and Return to Site URL must be fewer than or equal to 1900 characters.<br />
};
apiInstance.cartsPost(authorization, opts, (error, data, response) => {
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
 **body** | [**Object**](Object.md)| Item ID must be fewer than or equal to 60 characters, and may contain only letters, numbers, underscores, dashes, periods, or at signs.&lt;br /&gt; Item name must be fewer than or equal to 80 characters.&lt;br /&gt; Unit price must be a positive number.&lt;br /&gt; Quantity must be greater than 0.&lt;br /&gt;&lt;br /&gt; OPTIONAL FIELDS&lt;br /&gt; Student name must fewer than or equal to 60 characters.&lt;br /&gt; Reference must be fewer than or equal to 80 characters.&lt;br /&gt; Property names must not be empty or null.&lt;br /&gt; Property Display Response must be &quot;visible&quot;, &quot;hidden&quot;, or null/empty.&lt;br /&gt; Redirect URL and Return to Site URL must be fewer than or equal to 1900 characters.&lt;br /&gt; | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

