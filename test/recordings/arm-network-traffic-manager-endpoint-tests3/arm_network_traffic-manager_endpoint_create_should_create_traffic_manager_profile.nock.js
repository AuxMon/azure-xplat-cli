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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/test-endpoint?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'test-endpoint' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': '5869947c-7de2-4c8e-ad10-90b16dbe00e2',
  'x-ms-correlation-request-id': '5869947c-7de2-4c8e-ad10-90b16dbe00e2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170512T121353Z:5869947c-7de2-4c8e-ad10-90b16dbe00e2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 12 May 2017 12:13:53 GMT',
  connection: 'close',
  'content-length': '105' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/test-endpoint?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'test-endpoint' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': '5869947c-7de2-4c8e-ad10-90b16dbe00e2',
  'x-ms-correlation-request-id': '5869947c-7de2-4c8e-ad10-90b16dbe00e2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170512T121353Z:5869947c-7de2-4c8e-ad10-90b16dbe00e2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 12 May 2017 12:13:53 GMT',
  connection: 'close',
  'content-length': '105' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/test-endpoint?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-endpoint\",\"name\":\"test-endpoint\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '189',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'df2b9f9b-fa5e-444c-aff3-93dea19ca6ff',
  'x-ms-correlation-request-id': 'df2b9f9b-fa5e-444c-aff3-93dea19ca6ff',
  'x-ms-routing-request-id': 'WESTEUROPE:20170512T121355Z:df2b9f9b-fa5e-444c-aff3-93dea19ca6ff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 12 May 2017 12:13:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/test-endpoint?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-endpoint\",\"name\":\"test-endpoint\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '189',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'df2b9f9b-fa5e-444c-aff3-93dea19ca6ff',
  'x-ms-correlation-request-id': 'df2b9f9b-fa5e-444c-aff3-93dea19ca6ff',
  'x-ms-routing-request-id': 'WESTEUROPE:20170512T121355Z:df2b9f9b-fa5e-444c-aff3-93dea19ca6ff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 12 May 2017 12:13:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2017-05-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/trafficmanagerprofiles/test-profile' under resource group 'test-endpoint' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'd8c9c0d5-dcc1-45ce-ae6d-a55bd61c7c86',
  'x-ms-correlation-request-id': 'd8c9c0d5-dcc1-45ce-ae6d-a55bd61c7c86',
  'x-ms-routing-request-id': 'WESTEUROPE:20170512T121357Z:d8c9c0d5-dcc1-45ce-ae6d-a55bd61c7c86',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 12 May 2017 12:13:57 GMT',
  connection: 'close',
  'content-length': '170' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2017-05-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/trafficmanagerprofiles/test-profile' under resource group 'test-endpoint' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'd8c9c0d5-dcc1-45ce-ae6d-a55bd61c7c86',
  'x-ms-correlation-request-id': 'd8c9c0d5-dcc1-45ce-ae6d-a55bd61c7c86',
  'x-ms-routing-request-id': 'WESTEUROPE:20170512T121357Z:d8c9c0d5-dcc1-45ce-ae6d-a55bd61c7c86',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 12 May 2017 12:13:57 GMT',
  connection: 'close',
  'content-length': '170' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2017-05-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/test-endpoint\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\",\"name\":\"test-profile\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/healthcheck.html\",\"intervalInSeconds\":30,\"toleratedNumberOfFailures\":3,\"timeoutInSeconds\":10},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '668',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '08370c31-c8cb-44f6-9580-d83a4aeeda53',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '6300c2d4-6ce4-4ba9-9d91-0d244ecd7342',
  'x-ms-routing-request-id': 'WESTEUROPE:20170512T121409Z:6300c2d4-6ce4-4ba9-9d91-0d244ecd7342',
  date: 'Fri, 12 May 2017 12:14:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2017-05-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/test-endpoint\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\",\"name\":\"test-profile\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/healthcheck.html\",\"intervalInSeconds\":30,\"toleratedNumberOfFailures\":3,\"timeoutInSeconds\":10},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '668',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '08370c31-c8cb-44f6-9580-d83a4aeeda53',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '6300c2d4-6ce4-4ba9-9d91-0d244ecd7342',
  'x-ms-routing-request-id': 'WESTEUROPE:20170512T121409Z:6300c2d4-6ce4-4ba9-9d91-0d244ecd7342',
  date: 'Fri, 12 May 2017 12:14:08 GMT',
  connection: 'close' });
 return result; }]];