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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"routeName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName\",\r\n  \"etag\": \"W/\\\"9736fbc8-7965-4be9-ade8-356d19908b36\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"11.0.0.0/8\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '384',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9736fbc8-7965-4be9-ade8-356d19908b36"',
  'x-ms-request-id': '9d363b4f-a839-462d-aa55-ba3c8e9636f2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '857992e3-192d-4d97-843f-28a4ff885f11',
  'x-ms-routing-request-id': 'WESTEUROPE:20170310T142107Z:857992e3-192d-4d97-843f-28a4ff885f11',
  date: 'Fri, 10 Mar 2017 14:21:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"routeName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName\",\r\n  \"etag\": \"W/\\\"9736fbc8-7965-4be9-ade8-356d19908b36\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"11.0.0.0/8\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '384',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9736fbc8-7965-4be9-ade8-356d19908b36"',
  'x-ms-request-id': '9d363b4f-a839-462d-aa55-ba3c8e9636f2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '857992e3-192d-4d97-843f-28a4ff885f11',
  'x-ms-routing-request-id': 'WESTEUROPE:20170310T142107Z:857992e3-192d-4d97-843f-28a4ff885f11',
  date: 'Fri, 10 Mar 2017 14:21:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/2af961a0-ac10-4aeb-b344-890eed3cf8ec?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '2af961a0-ac10-4aeb-b344-890eed3cf8ec',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/2af961a0-ac10-4aeb-b344-890eed3cf8ec?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '3f45a78c-11d6-48ed-b325-c3f7bd128684',
  'x-ms-routing-request-id': 'WESTEUROPE:20170310T142109Z:3f45a78c-11d6-48ed-b325-c3f7bd128684',
  date: 'Fri, 10 Mar 2017 14:21:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/2af961a0-ac10-4aeb-b344-890eed3cf8ec?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '2af961a0-ac10-4aeb-b344-890eed3cf8ec',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/2af961a0-ac10-4aeb-b344-890eed3cf8ec?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '3f45a78c-11d6-48ed-b325-c3f7bd128684',
  'x-ms-routing-request-id': 'WESTEUROPE:20170310T142109Z:3f45a78c-11d6-48ed-b325-c3f7bd128684',
  date: 'Fri, 10 Mar 2017 14:21:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/2af961a0-ac10-4aeb-b344-890eed3cf8ec?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0b06eb10-1d19-42ac-b84e-e18f7141c3b1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '65eb7424-4048-4c15-a885-1eeec5edb3a3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170310T142140Z:65eb7424-4048-4c15-a885-1eeec5edb3a3',
  date: 'Fri, 10 Mar 2017 14:21:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/2af961a0-ac10-4aeb-b344-890eed3cf8ec?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0b06eb10-1d19-42ac-b84e-e18f7141c3b1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '65eb7424-4048-4c15-a885-1eeec5edb3a3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170310T142140Z:65eb7424-4048-4c15-a885-1eeec5edb3a3',
  date: 'Fri, 10 Mar 2017 14:21:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-03-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '262',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '057869a1-331d-48f6-847d-7bd1f78ee1a3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '731975bf-4ad8-47fa-bb11-8832886c2f8e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170310T142141Z:731975bf-4ad8-47fa-bb11-8832886c2f8e',
  date: 'Fri, 10 Mar 2017 14:21:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-03-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '262',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '057869a1-331d-48f6-847d-7bd1f78ee1a3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '731975bf-4ad8-47fa-bb11-8832886c2f8e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170310T142141Z:731975bf-4ad8-47fa-bb11-8832886c2f8e',
  date: 'Fri, 10 Mar 2017 14:21:41 GMT',
  connection: 'close' });
 return result; }]];
