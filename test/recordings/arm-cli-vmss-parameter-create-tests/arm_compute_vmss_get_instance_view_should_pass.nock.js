// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'ce4a7590-4722-4bcf-a2c6-e473e9f11778',
    name: 'Azure Storage DM Test',
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
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/instanceView?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"virtualMachine\": {\r\n    \"statusesSummary\": [\r\n      {\r\n        \"code\": \"ProvisioningState/succeeded\",\r\n        \"count\": 10\r\n      }\r\n    ]\r\n  },\r\n  \"extensions\": [\r\n    {\r\n      \"name\": \"test\",\r\n      \"statusesSummary\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"count\": 10\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"name\": \"test1\",\r\n      \"statusesSummary\": [\r\n        {\r\n          \"code\": \"ProvisioningState/creating\",\r\n          \"count\": 10\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  \"statuses\": [\r\n    {\r\n      \"code\": \"ProvisioningState/succeeded\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"Provisioning succeeded\",\r\n      \"time\": \"2017-02-16T10:00:55.0499243+00:00\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '5a40c88c-a211-4b4f-98d2-808e17097d27',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': 'fcde22f7-23ca-4431-8130-304a06814fad',
  'x-ms-routing-request-id': 'EASTASIA:20170216T100131Z:fcde22f7-23ca-4431-8130-304a06814fad',
  date: 'Thu, 16 Feb 2017 10:01:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/instanceView?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"virtualMachine\": {\r\n    \"statusesSummary\": [\r\n      {\r\n        \"code\": \"ProvisioningState/succeeded\",\r\n        \"count\": 10\r\n      }\r\n    ]\r\n  },\r\n  \"extensions\": [\r\n    {\r\n      \"name\": \"test\",\r\n      \"statusesSummary\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"count\": 10\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"name\": \"test1\",\r\n      \"statusesSummary\": [\r\n        {\r\n          \"code\": \"ProvisioningState/creating\",\r\n          \"count\": 10\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  \"statuses\": [\r\n    {\r\n      \"code\": \"ProvisioningState/succeeded\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"Provisioning succeeded\",\r\n      \"time\": \"2017-02-16T10:00:55.0499243+00:00\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '5a40c88c-a211-4b4f-98d2-808e17097d27',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': 'fcde22f7-23ca-4431-8130-304a06814fad',
  'x-ms-routing-request-id': 'EASTASIA:20170216T100131Z:fcde22f7-23ca-4431-8130-304a06814fad',
  date: 'Thu, 16 Feb 2017 10:01:30 GMT',
  connection: 'close' });
 return result; }]];