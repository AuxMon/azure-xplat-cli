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
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-local-gateway?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-local-gateway' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '92ab2ec6-cb14-46b7-b7e7-8ac7639e42ae',
  'x-ms-correlation-request-id': '92ab2ec6-cb14-46b7-b7e7-8ac7639e42ae',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T140628Z:92ab2ec6-cb14-46b7-b7e7-8ac7639e42ae',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:06:28 GMT',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-local-gateway?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway\",\"name\":\"xplat-test-local-gateway\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1185',
  'x-ms-request-id': 'ff5d327a-2bcc-438c-bf96-08d43cf09fef',
  'x-ms-correlation-request-id': 'ff5d327a-2bcc-438c-bf96-08d43cf09fef',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T140629Z:ff5d327a-2bcc-438c-bf96-08d43cf09fef',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:06:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/test-local-gateway' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'c50d3020-e4d5-4a93-9322-5918dfbd4a0d',
  'x-ms-correlation-request-id': 'c50d3020-e4d5-4a93-9322-5918dfbd4a0d',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T140630Z:c50d3020-e4d5-4a93-9322-5918dfbd4a0d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:06:30 GMT',
  'content-length': '185' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-local-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\",\r\n  \"etag\": \"W/\\\"42d499d4-0cdb-4837-af8b-6e30f2375357\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"d9a5c50c-93d1-401a-8af6-551fe3cc82a3\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '664',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a102125f-5bfb-44da-adfb-2c7bf56d91bf',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/a102125f-5bfb-44da-adfb-2c7bf56d91bf?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': '9050650e-6a54-4a02-b0c3-5f306c9e8b31',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T140633Z:9050650e-6a54-4a02-b0c3-5f306c9e8b31',
  date: 'Wed, 07 Dec 2016 14:06:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/a102125f-5bfb-44da-adfb-2c7bf56d91bf?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '06c5134e-bf95-4224-82a0-4a42a2c5e0ce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-correlation-request-id': '2a84872a-1078-4539-9008-d57261efe085',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T140704Z:2a84872a-1078-4539-9008-d57261efe085',
  date: 'Wed, 07 Dec 2016 14:07:03 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-local-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\",\r\n  \"etag\": \"W/\\\"ac6a2c8e-7cc1-465f-8a3b-51dd59f3c01c\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d9a5c50c-93d1-401a-8af6-551fe3cc82a3\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '665',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ac6a2c8e-7cc1-465f-8a3b-51dd59f3c01c"',
  'x-ms-request-id': '6bd3caed-ec66-42ee-bfdf-a71f5497ab63',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14949',
  'x-ms-correlation-request-id': '2352e70f-8245-422c-b538-fd5af2feb0ff',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T140705Z:2352e70f-8245-422c-b538-fd5af2feb0ff',
  date: 'Wed, 07 Dec 2016 14:07:04 GMT' });
 return result; }]];
