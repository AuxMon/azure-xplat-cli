// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-vnet?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-vnet' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14977',
  'x-ms-request-id': '6f68819e-e804-4586-95e4-5f485496f271',
  'x-ms-correlation-request-id': '6f68819e-e804-4586-95e4-5f485496f271',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T094827Z:6f68819e-e804-4586-95e4-5f485496f271',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 24 Jan 2017 09:48:27 GMT',
  connection: 'close',
  'content-length': '107' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-vnet?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-vnet' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14977',
  'x-ms-request-id': '6f68819e-e804-4586-95e4-5f485496f271',
  'x-ms-correlation-request-id': '6f68819e-e804-4586-95e4-5f485496f271',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T094827Z:6f68819e-e804-4586-95e4-5f485496f271',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 24 Jan 2017 09:48:27 GMT',
  connection: 'close',
  'content-length': '107' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-vnet?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet\",\"name\":\"xplat-test-vnet\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '193',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '434ffeca-1d3c-4b8f-a104-2f5b50073b09',
  'x-ms-correlation-request-id': '434ffeca-1d3c-4b8f-a104-2f5b50073b09',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T094829Z:434ffeca-1d3c-4b8f-a104-2f5b50073b09',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 24 Jan 2017 09:48:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-vnet?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet\",\"name\":\"xplat-test-vnet\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '193',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '434ffeca-1d3c-4b8f-a104-2f5b50073b09',
  'x-ms-correlation-request-id': '434ffeca-1d3c-4b8f-a104-2f5b50073b09',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T094829Z:434ffeca-1d3c-4b8f-a104-2f5b50073b09',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 24 Jan 2017 09:48:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/test-vnet' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '444ce0dc-8dd9-40d7-9db2-b3cf6ba7ae74',
  'x-ms-correlation-request-id': '444ce0dc-8dd9-40d7-9db2-b3cf6ba7ae74',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T094831Z:444ce0dc-8dd9-40d7-9db2-b3cf6ba7ae74',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 24 Jan 2017 09:48:31 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/test-vnet' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '444ce0dc-8dd9-40d7-9db2-b3cf6ba7ae74',
  'x-ms-correlation-request-id': '444ce0dc-8dd9-40d7-9db2-b3cf6ba7ae74',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T094831Z:444ce0dc-8dd9-40d7-9db2-b3cf6ba7ae74',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 24 Jan 2017 09:48:31 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"d7df56f9-6a4f-499b-a5cb-7ed9dc319e51\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"1e5187dd-02d2-48c7-bdef-97c7eb9cb870\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '718',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '7d1fc7cf-2490-4a36-b212-f9c6b36f40ce',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/7d1fc7cf-2490-4a36-b212-f9c6b36f40ce?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'b4a56a2e-3767-4761-ad5c-b9a61b5b642b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T094834Z:b4a56a2e-3767-4761-ad5c-b9a61b5b642b',
  date: 'Tue, 24 Jan 2017 09:48:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"d7df56f9-6a4f-499b-a5cb-7ed9dc319e51\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"1e5187dd-02d2-48c7-bdef-97c7eb9cb870\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '718',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '7d1fc7cf-2490-4a36-b212-f9c6b36f40ce',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/7d1fc7cf-2490-4a36-b212-f9c6b36f40ce?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'b4a56a2e-3767-4761-ad5c-b9a61b5b642b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T094834Z:b4a56a2e-3767-4761-ad5c-b9a61b5b642b',
  date: 'Tue, 24 Jan 2017 09:48:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/7d1fc7cf-2490-4a36-b212-f9c6b36f40ce?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '43e6b307-19ca-43d7-9227-4706d3b962d3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '1da270ea-988c-4a42-a173-ae4a91e7684c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T094904Z:1da270ea-988c-4a42-a173-ae4a91e7684c',
  date: 'Tue, 24 Jan 2017 09:49:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/7d1fc7cf-2490-4a36-b212-f9c6b36f40ce?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '43e6b307-19ca-43d7-9227-4706d3b962d3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '1da270ea-988c-4a42-a173-ae4a91e7684c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T094904Z:1da270ea-988c-4a42-a173-ae4a91e7684c',
  date: 'Tue, 24 Jan 2017 09:49:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"c392c346-e9c4-4d1a-869b-3ffeca365358\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"1e5187dd-02d2-48c7-bdef-97c7eb9cb870\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '719',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c392c346-e9c4-4d1a-869b-3ffeca365358"',
  'x-ms-request-id': '3dc33061-2578-4f3a-a64f-f510f47e8a8e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14779',
  'x-ms-correlation-request-id': 'bab1b7f4-778c-4afa-93ac-be67a6e41fac',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T094905Z:bab1b7f4-778c-4afa-93ac-be67a6e41fac',
  date: 'Tue, 24 Jan 2017 09:49:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"c392c346-e9c4-4d1a-869b-3ffeca365358\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"1e5187dd-02d2-48c7-bdef-97c7eb9cb870\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '719',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c392c346-e9c4-4d1a-869b-3ffeca365358"',
  'x-ms-request-id': '3dc33061-2578-4f3a-a64f-f510f47e8a8e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14779',
  'x-ms-correlation-request-id': 'bab1b7f4-778c-4afa-93ac-be67a6e41fac',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T094905Z:bab1b7f4-778c-4afa-93ac-be67a6e41fac',
  date: 'Tue, 24 Jan 2017 09:49:04 GMT',
  connection: 'close' });
 return result; }]];
