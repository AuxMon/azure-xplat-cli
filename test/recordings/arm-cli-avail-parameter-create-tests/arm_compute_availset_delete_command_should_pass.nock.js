// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstAvsGCreate8119/providers/Microsoft.Compute/availabilitySets/xplattestavs5?api-version=2017-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 2,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstAvsGCreate8119/providers/Microsoft.Compute/availabilitySets/xplattestavs5\",\r\n  \"name\": \"xplattestavs5\",\r\n  \"sku\": {\r\n    \"name\": \"Aligned\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '439',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'db1479bf-1059-4c06-84e9-43d7f9905d06',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': 'c4031775-60ac-4ef5-8bae-8a4b33aca3a8',
  'x-ms-routing-request-id': 'WESTUS:20170602T164251Z:c4031775-60ac-4ef5-8bae-8a4b33aca3a8',
  date: 'Fri, 02 Jun 2017 16:42:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstAvsGCreate8119/providers/Microsoft.Compute/availabilitySets/xplattestavs5?api-version=2017-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 2,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstAvsGCreate8119/providers/Microsoft.Compute/availabilitySets/xplattestavs5\",\r\n  \"name\": \"xplattestavs5\",\r\n  \"sku\": {\r\n    \"name\": \"Aligned\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '439',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'db1479bf-1059-4c06-84e9-43d7f9905d06',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': 'c4031775-60ac-4ef5-8bae-8a4b33aca3a8',
  'x-ms-routing-request-id': 'WESTUS:20170602T164251Z:c4031775-60ac-4ef5-8bae-8a4b33aca3a8',
  date: 'Fri, 02 Jun 2017 16:42:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstAvsGCreate8119/providers/Microsoft.Compute/availabilitySets/xplattestavs5?api-version=2017-03-30')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'b0dcd01d-878c-4d03-8bc2-fdfc2d07def3',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'e3e60bca-1392-47f2-8642-ca5e0d70c88b',
  'x-ms-routing-request-id': 'WESTUS:20170602T164253Z:e3e60bca-1392-47f2-8642-ca5e0d70c88b',
  date: 'Fri, 02 Jun 2017 16:42:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstAvsGCreate8119/providers/Microsoft.Compute/availabilitySets/xplattestavs5?api-version=2017-03-30')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'b0dcd01d-878c-4d03-8bc2-fdfc2d07def3',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'e3e60bca-1392-47f2-8642-ca5e0d70c88b',
  'x-ms-routing-request-id': 'WESTUS:20170602T164253Z:e3e60bca-1392-47f2-8642-ca5e0d70c88b',
  date: 'Fri, 02 Jun 2017 16:42:53 GMT',
  connection: 'close' });
 return result; }]];