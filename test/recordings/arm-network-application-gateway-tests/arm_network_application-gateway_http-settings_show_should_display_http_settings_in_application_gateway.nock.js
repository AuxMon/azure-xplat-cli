// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e55e7c87-7bdc-445b-8213-56cdfca27374',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'fc53715f-c87b-43fc-9876-78ef5139cf26',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"xplatTestAppGw\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw\",\r\n  \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"1ddb9e6c-d402-48f8-88e4-dcc702012fa4\",\r\n    \"sku\": {\r\n      \"name\": \"Standard_Small\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 5\r\n    },\r\n    \"gatewayIPConfigurations\": [\r\n      {\r\n        \"name\": \"ipConfig01\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/gatewayIPConfigurations/ipConfig01\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sslCertificates\": [\r\n      {\r\n        \"name\": \"cert01\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert01\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"publicCertData\": \"MIIDEwYJKoZIhvcNAQcCoIIDBDCCAwACAQExADALBgkqhkiG9w0BBwGgggLoMIIC5DCCAdCgAwIBAgIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAMA8xDTALBgNVBAMTBGNlcnQwHhcNMTYwMTAyMjEwMDAwWhcNMTkwMTAyMjEwMDAwWjAPMQ0wCwYDVQQDEwRjZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsL4kuUwYvzuYQXRtPvcpohRWWevCYgRL3cZ9zbbrXngRFnB9gvwGdjxq32vF4xqRCA8sfQQ41K+uI/XDIVmC2+O1io9VFOMFkPnW/0FUSJdUQTzKJ2J9b7E/nW7V0tcclsGgkX1XUx0qYoPHX4cvFJ4f17iTqAdvVrD+9CftA55DBNmWqm6u69b16u+2gx/sFtD79392esruG2Ba96eXke7hcH07YsmEHjY84M2bhAao4I1QDIfWmuBCkza879sjXTppceCLWm/OFO5CT7I0RS4wvapdT33jdnazcwDEM/jPqA4xej7Xhm6lCpIB4FUPMbQXX0NPsRm+8+c6t4U04QIDAQABo0QwQjBABgNVHQEEOTA3gBDE7dcQ34QUkVStX5JDp5ZtoREwDzENMAsGA1UEAxMEY2VydIIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAA4IBAQBa/NJLW6bL0uA0n/PP5NG+6W/VhCgy4cPX0qXZ0dp/S4Y/LTz6relh3K0OJI32xT+p8ETw5n+StYc6qP4V4jy7ywJvSHh6a1Wpeo5PjZrPoB9sv26yZYS5M4w6qzBUnR5khKXa0Ytazgl/7dwScbz3EdLcNr4eAVSV/l9knsl7CkffgyXQ79PFadI9EFUYWqIvmWvJT+EO19w035cAjYckjwDy987rR6SizHB9hvRTh5ETO2aUtMrRlkQLS7hQARZdkUx0Bt3FU9nIUwVcMLpiRX+iwQKmMV42llfwg0cm3hVbZDowRTnNWYLsygN386LYb2K09D2C1a84Ty9wUbQDMQA=\",\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"authenticationCertificates\": [],\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIp01\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.11\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"\r\n          },\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"testFrontendIp\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/testFrontendIp\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/publicIPAddresses/xplatTestPublicIp\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"frontendPorts\": [\r\n      {\r\n        \"name\": \"frontendPort01\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 112,\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplatTestPoolName\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/xplatTestPoolName\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 555\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"pool01\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"1.1.1.1\"\r\n            }\r\n          ],\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplatTestPoolName\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/xplatTestPoolName\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"1.2.3.4\"\r\n            },\r\n            {\r\n              \"ipAddress\": \"3.4.3.3\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendHttpSettingsCollection\": [\r\n      {\r\n        \"name\": \"httpSettings01\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 111,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"requestTimeout\": 30,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplatTestHttpSettings\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/xplatTestHttpSettings\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 234,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"requestTimeout\": 30\r\n        }\r\n      }\r\n    ],\r\n    \"httpListeners\": [\r\n      {\r\n        \"name\": \"listener01\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\"\r\n          },\r\n          \"frontendPort\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\"\r\n          },\r\n          \"protocol\": \"Https\",\r\n          \"sslCertificate\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert01\"\r\n          },\r\n          \"requireServerNameIndication\": false,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"urlPathMaps\": [],\r\n    \"requestRoutingRules\": [\r\n      {\r\n        \"name\": \"rule01\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"ruleType\": \"Basic\",\r\n          \"httpListener\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n          },\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\"\r\n          },\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '11768',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"be1519d4-c7a9-4571-90f8-e4fbdb95549e"',
  'x-ms-request-id': 'f9040fcb-bb4c-463c-8e7e-75fcc93766da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '0f59ea1c-5fad-4da5-b1b0-f34e191e1721',
  'x-ms-routing-request-id': 'WESTEUROPE:20170424T160746Z:0f59ea1c-5fad-4da5-b1b0-f34e191e1721',
  date: 'Mon, 24 Apr 2017 16:07:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"xplatTestAppGw\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw\",\r\n  \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"1ddb9e6c-d402-48f8-88e4-dcc702012fa4\",\r\n    \"sku\": {\r\n      \"name\": \"Standard_Small\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 5\r\n    },\r\n    \"gatewayIPConfigurations\": [\r\n      {\r\n        \"name\": \"ipConfig01\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/gatewayIPConfigurations/ipConfig01\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sslCertificates\": [\r\n      {\r\n        \"name\": \"cert01\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert01\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"publicCertData\": \"MIIDEwYJKoZIhvcNAQcCoIIDBDCCAwACAQExADALBgkqhkiG9w0BBwGgggLoMIIC5DCCAdCgAwIBAgIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAMA8xDTALBgNVBAMTBGNlcnQwHhcNMTYwMTAyMjEwMDAwWhcNMTkwMTAyMjEwMDAwWjAPMQ0wCwYDVQQDEwRjZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsL4kuUwYvzuYQXRtPvcpohRWWevCYgRL3cZ9zbbrXngRFnB9gvwGdjxq32vF4xqRCA8sfQQ41K+uI/XDIVmC2+O1io9VFOMFkPnW/0FUSJdUQTzKJ2J9b7E/nW7V0tcclsGgkX1XUx0qYoPHX4cvFJ4f17iTqAdvVrD+9CftA55DBNmWqm6u69b16u+2gx/sFtD79392esruG2Ba96eXke7hcH07YsmEHjY84M2bhAao4I1QDIfWmuBCkza879sjXTppceCLWm/OFO5CT7I0RS4wvapdT33jdnazcwDEM/jPqA4xej7Xhm6lCpIB4FUPMbQXX0NPsRm+8+c6t4U04QIDAQABo0QwQjBABgNVHQEEOTA3gBDE7dcQ34QUkVStX5JDp5ZtoREwDzENMAsGA1UEAxMEY2VydIIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAA4IBAQBa/NJLW6bL0uA0n/PP5NG+6W/VhCgy4cPX0qXZ0dp/S4Y/LTz6relh3K0OJI32xT+p8ETw5n+StYc6qP4V4jy7ywJvSHh6a1Wpeo5PjZrPoB9sv26yZYS5M4w6qzBUnR5khKXa0Ytazgl/7dwScbz3EdLcNr4eAVSV/l9knsl7CkffgyXQ79PFadI9EFUYWqIvmWvJT+EO19w035cAjYckjwDy987rR6SizHB9hvRTh5ETO2aUtMrRlkQLS7hQARZdkUx0Bt3FU9nIUwVcMLpiRX+iwQKmMV42llfwg0cm3hVbZDowRTnNWYLsygN386LYb2K09D2C1a84Ty9wUbQDMQA=\",\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"authenticationCertificates\": [],\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIp01\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.11\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"\r\n          },\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"testFrontendIp\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/testFrontendIp\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/publicIPAddresses/xplatTestPublicIp\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"frontendPorts\": [\r\n      {\r\n        \"name\": \"frontendPort01\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 112,\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplatTestPoolName\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/xplatTestPoolName\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 555\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"pool01\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"1.1.1.1\"\r\n            }\r\n          ],\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplatTestPoolName\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/xplatTestPoolName\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"1.2.3.4\"\r\n            },\r\n            {\r\n              \"ipAddress\": \"3.4.3.3\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendHttpSettingsCollection\": [\r\n      {\r\n        \"name\": \"httpSettings01\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 111,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"requestTimeout\": 30,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplatTestHttpSettings\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/xplatTestHttpSettings\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 234,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"requestTimeout\": 30\r\n        }\r\n      }\r\n    ],\r\n    \"httpListeners\": [\r\n      {\r\n        \"name\": \"listener01\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\"\r\n          },\r\n          \"frontendPort\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\"\r\n          },\r\n          \"protocol\": \"Https\",\r\n          \"sslCertificate\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert01\"\r\n          },\r\n          \"requireServerNameIndication\": false,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"urlPathMaps\": [],\r\n    \"requestRoutingRules\": [\r\n      {\r\n        \"name\": \"rule01\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\",\r\n        \"etag\": \"W/\\\"be1519d4-c7a9-4571-90f8-e4fbdb95549e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"ruleType\": \"Basic\",\r\n          \"httpListener\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n          },\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\"\r\n          },\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '11768',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"be1519d4-c7a9-4571-90f8-e4fbdb95549e"',
  'x-ms-request-id': 'f9040fcb-bb4c-463c-8e7e-75fcc93766da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '0f59ea1c-5fad-4da5-b1b0-f34e191e1721',
  'x-ms-routing-request-id': 'WESTEUROPE:20170424T160746Z:0f59ea1c-5fad-4da5-b1b0-f34e191e1721',
  date: 'Mon, 24 Apr 2017 16:07:45 GMT',
  connection: 'close' });
 return result; }]];
