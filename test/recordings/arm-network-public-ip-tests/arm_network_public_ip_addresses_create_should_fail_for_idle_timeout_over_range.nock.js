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
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '847c6871-b9b4-4a86-a0cb-9eb142f079bb',
  'x-ms-correlation-request-id': '847c6871-b9b4-4a86-a0cb-9eb142f079bb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T124841Z:847c6871-b9b4-4a86-a0cb-9eb142f079bb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 22 Jun 2017 12:48:41 GMT',
  connection: 'close',
  'content-length': '184' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '847c6871-b9b4-4a86-a0cb-9eb142f079bb',
  'x-ms-correlation-request-id': '847c6871-b9b4-4a86-a0cb-9eb142f079bb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T124841Z:847c6871-b9b4-4a86-a0cb-9eb142f079bb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 22 Jun 2017 12:48:41 GMT',
  connection: 'close',
  'content-length': '184' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPIdleTimeoutIsOutOfRange\",\r\n    \"message\": \"Public IP address idleTimeoutOverRangeName has invalid Idle Timeout. The value must be between 4 and 30.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '214',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3fa20913-c074-461e-a768-2918f247a25c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '14c52d5d-f462-461c-8d25-d895277ccd0e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T124845Z:14c52d5d-f462-461c-8d25-d895277ccd0e',
  date: 'Thu, 22 Jun 2017 12:48:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPIdleTimeoutIsOutOfRange\",\r\n    \"message\": \"Public IP address idleTimeoutOverRangeName has invalid Idle Timeout. The value must be between 4 and 30.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '214',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3fa20913-c074-461e-a768-2918f247a25c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '14c52d5d-f462-461c-8d25-d895277ccd0e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T124845Z:14c52d5d-f462-461c-8d25-d895277ccd0e',
  date: 'Thu, 22 Jun 2017 12:48:45 GMT',
  connection: 'close' });
 return result; }]];