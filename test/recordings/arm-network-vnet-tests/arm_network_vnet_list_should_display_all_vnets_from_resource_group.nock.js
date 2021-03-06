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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks?api-version=2017-03-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-vnet\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n      \"etag\": \"W/\\\"ab982f7d-2d8e-4bf2-9c57-14397fa2516c\\\"\",\r\n      \"type\": \"Microsoft.Network/virtualNetworks\",\r\n      \"location\": \"eastus\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"f267d7f5-8d3b-4d8d-ae3a-2f3a3931d158\",\r\n        \"addressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"10.0.0.0/24\",\r\n            \"10.0.1.0/24\"\r\n          ]\r\n        },\r\n        \"dhcpOptions\": {\r\n          \"dnsServers\": [\r\n            \"192.168.1.1\",\r\n            \"192.168.1.2\"\r\n          ]\r\n        },\r\n        \"subnets\": [],\r\n        \"virtualNetworkPeerings\": []\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '932',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '47fa5aa3-fbba-48ba-ba51-9836181fd5f6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14924',
  'x-ms-correlation-request-id': '5bad79eb-ba75-4a1b-a194-608446135c2c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113334Z:5bad79eb-ba75-4a1b-a194-608446135c2c',
  date: 'Wed, 31 May 2017 11:33:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks?api-version=2017-03-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-vnet\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n      \"etag\": \"W/\\\"ab982f7d-2d8e-4bf2-9c57-14397fa2516c\\\"\",\r\n      \"type\": \"Microsoft.Network/virtualNetworks\",\r\n      \"location\": \"eastus\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"f267d7f5-8d3b-4d8d-ae3a-2f3a3931d158\",\r\n        \"addressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"10.0.0.0/24\",\r\n            \"10.0.1.0/24\"\r\n          ]\r\n        },\r\n        \"dhcpOptions\": {\r\n          \"dnsServers\": [\r\n            \"192.168.1.1\",\r\n            \"192.168.1.2\"\r\n          ]\r\n        },\r\n        \"subnets\": [],\r\n        \"virtualNetworkPeerings\": []\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '932',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '47fa5aa3-fbba-48ba-ba51-9836181fd5f6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14924',
  'x-ms-correlation-request-id': '5bad79eb-ba75-4a1b-a194-608446135c2c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113334Z:5bad79eb-ba75-4a1b-a194-608446135c2c',
  date: 'Wed, 31 May 2017 11:33:33 GMT',
  connection: 'close' });
 return result; }]];