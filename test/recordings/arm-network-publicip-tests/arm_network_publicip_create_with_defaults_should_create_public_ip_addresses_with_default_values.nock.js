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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressDefaultsName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/publicIPAddressDefaultsName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0dd4f33e-166c-4180-99c6-ca09d134dccd',
  'x-ms-correlation-request-id': '0dd4f33e-166c-4180-99c6-ca09d134dccd',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T182742Z:0dd4f33e-166c-4180-99c6-ca09d134dccd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 18:27:42 GMT',
  'content-length': '187' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressDefaultsName?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"publicIPAddressDefaultsName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressDefaultsName\",\r\n  \"etag\": \"W/\\\"fade3818-470a-476a-a661-a5de4efc0768\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"2267c8ea-b84d-4dde-800c-6dcdac733fd1\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '589',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '06bd8b60-929c-4077-afd4-9eeb3dce9927',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/06bd8b60-929c-4077-afd4-9eeb3dce9927?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '34753650-8e19-4d72-a427-bb0aebd3330f',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T182745Z:34753650-8e19-4d72-a427-bb0aebd3330f',
  date: 'Wed, 07 Dec 2016 18:27:45 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/06bd8b60-929c-4077-afd4-9eeb3dce9927?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '46b019bb-39fd-4ab5-ae49-cad9490f3f9b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '0461a733-7fb0-4baa-bfc4-e5854c700973',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T182816Z:0461a733-7fb0-4baa-bfc4-e5854c700973',
  date: 'Wed, 07 Dec 2016 18:28:16 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressDefaultsName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressDefaultsName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressDefaultsName\",\r\n  \"etag\": \"W/\\\"39678389-9216-40f3-8b2c-8232049f8326\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2267c8ea-b84d-4dde-800c-6dcdac733fd1\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '590',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"39678389-9216-40f3-8b2c-8232049f8326"',
  'x-ms-request-id': '0f35afd4-101f-4d94-a059-d372eb3f6256',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14977',
  'x-ms-correlation-request-id': 'd4a74c5c-78fc-40a3-a951-27b629242923',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T182817Z:d4a74c5c-78fc-40a3-a951-27b629242923',
  date: 'Wed, 07 Dec 2016 18:28:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressDefaultsName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressDefaultsName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressDefaultsName\",\r\n  \"etag\": \"W/\\\"39678389-9216-40f3-8b2c-8232049f8326\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2267c8ea-b84d-4dde-800c-6dcdac733fd1\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '590',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"39678389-9216-40f3-8b2c-8232049f8326"',
  'x-ms-request-id': '275515a1-5d80-4808-86fb-d8b85017a654',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '36467910-45d2-447e-b75e-5629992df573',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T182819Z:36467910-45d2-447e-b75e-5629992df573',
  date: 'Wed, 07 Dec 2016 18:28:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressDefaultsName?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/61f5e8ec-2916-4977-b59e-bd19e6d28422?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '61f5e8ec-2916-4977-b59e-bd19e6d28422',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/61f5e8ec-2916-4977-b59e-bd19e6d28422?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '24f68f6a-e5fe-4421-912d-586521cf2b2b',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T182821Z:24f68f6a-e5fe-4421-912d-586521cf2b2b',
  date: 'Wed, 07 Dec 2016 18:28:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/61f5e8ec-2916-4977-b59e-bd19e6d28422?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cc73f29a-a342-4e18-b744-7f31eb52e19e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '798b4713-97de-4d6f-9d34-fc9615d768c3',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T182852Z:798b4713-97de-4d6f-9d34-fc9615d768c3',
  date: 'Wed, 07 Dec 2016 18:28:51 GMT' });
 return result; }]];
