# MsbPayApi.Cart

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Identifier of the cart created by the request | [optional] 
**status** | [**CartStatus**](CartStatus.md) |  | [optional] 
**createdDate** | **Date** | Date the cart was created and ID returned | [optional] 
**lastUpdated** | **Date** | Date the cart was last updated | [optional] 
**redirectUrl** | **String** | Url to navigate to after checkout is complete | [optional] 
**returnToSiteUrl** | **String** | Url that will be used at checkout to provide a back button to users | [optional] 
**checkoutUrl** | **String** | Send the customer here to complete checkout | [optional] 
**allowDuplicatePayments** | **String** | Will be \&quot;true\&quot; if set, \&quot;false\&quot; otherwise | [optional] 
**loginPolicy** | **String** | Login policy for the cart. Either \&quot;optional\&quot; or null | [optional] 
**checkoutStyle** | **String** | Checkout style to use. Either \&quot;express\&quot; or null | [optional] 
**cartItems** | [**CartItem**](CartItem.md) |  | [optional] 
**paymentPreauthPolicy** | **String** | Payment preauthorization policy for the cart. Valid options are \&quot;none\&quot;, \&quot;fullpay\&quot;, or null | [optional] 
**webhookSubscriptions** | [**[WebhookSubscription]**](WebhookSubscription.md) |  | [optional] 
