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
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585/endGetAccess?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/c7f8e137-8055-4063-b832-b695e4d0280f?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/c7f8e137-8055-4063-b832-b695e4d0280f?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': 'c7f8e137-8055-4063-b832-b695e4d0280f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '4edf4e5a-2f8f-416c-a9eb-41b542ba8501',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171416Z:4edf4e5a-2f8f-416c-a9eb-41b542ba8501',
  date: 'Fri, 02 Jun 2017 17:14:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585/endGetAccess?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/c7f8e137-8055-4063-b832-b695e4d0280f?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/c7f8e137-8055-4063-b832-b695e4d0280f?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': 'c7f8e137-8055-4063-b832-b695e4d0280f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '4edf4e5a-2f8f-416c-a9eb-41b542ba8501',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171416Z:4edf4e5a-2f8f-416c-a9eb-41b542ba8501',
  date: 'Fri, 02 Jun 2017 17:14:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/c7f8e137-8055-4063-b832-b695e4d0280f?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:14:15.6818111+00:00\",\r\n  \"endTime\": \"2017-06-02T17:14:15.8067717+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"c7f8e137-8055-4063-b832-b695e4d0280f\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '7021276f-050a-41bd-af57-0e9e642f0c03',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'c8bd275a-2e76-4187-bfd5-34e9ee4ffb21',
  'x-ms-routing-request-id': 'WESTUS:20170602T171447Z:c8bd275a-2e76-4187-bfd5-34e9ee4ffb21',
  date: 'Fri, 02 Jun 2017 17:14:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/c7f8e137-8055-4063-b832-b695e4d0280f?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:14:15.6818111+00:00\",\r\n  \"endTime\": \"2017-06-02T17:14:15.8067717+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"c7f8e137-8055-4063-b832-b695e4d0280f\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '7021276f-050a-41bd-af57-0e9e642f0c03',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'c8bd275a-2e76-4187-bfd5-34e9ee4ffb21',
  'x-ms-routing-request-id': 'WESTUS:20170602T171447Z:c8bd275a-2e76-4187-bfd5-34e9ee4ffb21',
  date: 'Fri, 02 Jun 2017 17:14:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/10cbdb5c-b2a6-4e8e-a230-9d291579a200?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/10cbdb5c-b2a6-4e8e-a230-9d291579a200?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '10cbdb5c-b2a6-4e8e-a230-9d291579a200',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '01583345-5f32-42cf-bd6e-cc436584e277',
  'x-ms-routing-request-id': 'WESTUS:20170602T171450Z:01583345-5f32-42cf-bd6e-cc436584e277',
  date: 'Fri, 02 Jun 2017 17:14:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/10cbdb5c-b2a6-4e8e-a230-9d291579a200?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/10cbdb5c-b2a6-4e8e-a230-9d291579a200?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '10cbdb5c-b2a6-4e8e-a230-9d291579a200',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '01583345-5f32-42cf-bd6e-cc436584e277',
  'x-ms-routing-request-id': 'WESTUS:20170602T171450Z:01583345-5f32-42cf-bd6e-cc436584e277',
  date: 'Fri, 02 Jun 2017 17:14:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/10cbdb5c-b2a6-4e8e-a230-9d291579a200?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:14:49.1474462+00:00\",\r\n  \"endTime\": \"2017-06-02T17:14:49.3505225+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"10cbdb5c-b2a6-4e8e-a230-9d291579a200\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '9d711042-fd45-4977-83ad-dd42d89b4c74',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'c3933716-e73c-4fe2-a96b-080ba5050bfa',
  'x-ms-routing-request-id': 'WESTUS:20170602T171521Z:c3933716-e73c-4fe2-a96b-080ba5050bfa',
  date: 'Fri, 02 Jun 2017 17:15:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/10cbdb5c-b2a6-4e8e-a230-9d291579a200?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:14:49.1474462+00:00\",\r\n  \"endTime\": \"2017-06-02T17:14:49.3505225+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"10cbdb5c-b2a6-4e8e-a230-9d291579a200\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '9d711042-fd45-4977-83ad-dd42d89b4c74',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'c3933716-e73c-4fe2-a96b-080ba5050bfa',
  'x-ms-routing-request-id': 'WESTUS:20170602T171521Z:c3933716-e73c-4fe2-a96b-080ba5050bfa',
  date: 'Fri, 02 Jun 2017 17:15:21 GMT',
  connection: 'close' });
 return result; }]];