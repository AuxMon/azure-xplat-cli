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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"27a84e1a-cdb0-4864-8d09-d0f26f47c621\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"59f2eb92-c9da-4471-9b61-b1d5f0890ecd\",\r\n    \"ipAddress\": \"52.187.1.106\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.southeastasia.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '748',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"27a84e1a-cdb0-4864-8d09-d0f26f47c621"',
  'x-ms-request-id': 'f93f3225-ce82-47e3-a920-45f480e0f361',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14964',
  'x-ms-correlation-request-id': '2b1221bd-c63e-405d-b404-8e0bb5279369',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T124550Z:2b1221bd-c63e-405d-b404-8e0bb5279369',
  date: 'Thu, 22 Jun 2017 12:45:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"27a84e1a-cdb0-4864-8d09-d0f26f47c621\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"59f2eb92-c9da-4471-9b61-b1d5f0890ecd\",\r\n    \"ipAddress\": \"52.187.1.106\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.southeastasia.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '748',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"27a84e1a-cdb0-4864-8d09-d0f26f47c621"',
  'x-ms-request-id': 'f93f3225-ce82-47e3-a920-45f480e0f361',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14964',
  'x-ms-correlation-request-id': '2b1221bd-c63e-405d-b404-8e0bb5279369',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T124550Z:2b1221bd-c63e-405d-b404-8e0bb5279369',
  date: 'Thu, 22 Jun 2017 12:45:50 GMT',
  connection: 'close' });
 return result; }]];