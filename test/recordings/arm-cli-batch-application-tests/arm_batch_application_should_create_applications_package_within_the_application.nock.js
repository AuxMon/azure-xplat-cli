// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '45b60d85-fd72-427a-a708-f994d26e593e',
    name: 'Azure Storage DM Staging',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .put('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup8089/providers/Microsoft.Batch/batchAccounts/armclibatch7925/applications/armclibatchapp6526/versions/1.0?api-version=2015-12-01')
  .reply(201, "{\"id\":\"armclibatchapp6526\",\"version\":\"1.0\",\"storageUrl\":\"https://armclibatch9667.blob.core.windows.net/app-armclibatchapp6526-e22f366b4387d478b75359fc56bb0f78354ac280/armclibatchapp6526-1.0-969dbe0d-3b67-4004-8f4d-d1cc048b884f?sv=2014-02-14&sr=b&sig=xg8QQMSN%2BEKndia70%2Fim%2F2PLHywWUAKyU1rOZyGH9ls%3D&st=2016-05-19T08%3A10%3A59Z&se=2016-05-19T12%3A15%3A59Z&sp=rw\",\"storageUrlExpiry\":\"2016-05-19T12:15:59.5638487Z\",\"state\":\"pending\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '434',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': 'bfd694d3-a36f-48b6-a833-333b54a5dc49',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1170',
  'x-ms-request-id': '3904e70b-a4d7-4a5f-9a69-e19d1fac2d96',
  'x-ms-correlation-request-id': '3904e70b-a4d7-4a5f-9a69-e19d1fac2d96',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160519T081600Z:3904e70b-a4d7-4a5f-9a69-e19d1fac2d96',
  date: 'Thu, 19 May 2016 08:15:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .put('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup8055/providers/Microsoft.Batch/batchAccounts/armclibatch7370/applications/armclibatchapp4948/versions/1.0?api-version=2015-12-01')
  .reply(201, "{\"id\":\"armclibatchapp6526\",\"version\":\"1.0\",\"storageUrl\":\"https://armclibatch9667.blob.core.windows.net/app-armclibatchapp6526-e22f366b4387d478b75359fc56bb0f78354ac280/armclibatchapp6526-1.0-969dbe0d-3b67-4004-8f4d-d1cc048b884f?sv=2014-02-14&sr=b&sig=xg8QQMSN%2BEKndia70%2Fim%2F2PLHywWUAKyU1rOZyGH9ls%3D&st=2016-05-19T08%3A10%3A59Z&se=2016-05-19T12%3A15%3A59Z&sp=rw\",\"storageUrlExpiry\":\"2016-05-19T12:15:59.5638487Z\",\"state\":\"pending\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '434',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': 'bfd694d3-a36f-48b6-a833-333b54a5dc49',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1170',
  'x-ms-request-id': '3904e70b-a4d7-4a5f-9a69-e19d1fac2d96',
  'x-ms-correlation-request-id': '3904e70b-a4d7-4a5f-9a69-e19d1fac2d96',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160519T081600Z:3904e70b-a4d7-4a5f-9a69-e19d1fac2d96',
  date: 'Thu, 19 May 2016 08:15:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://armclibatch9667.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/app-armclibatchapp6526-e22f366b4387d478b75359fc56bb0f78354ac280/armclibatchapp6526-1.0-969dbe0d-3b67-4004-8f4d-d1cc048b884f?sv=2014-02-14&sr=b&sig=xg8QQMSN%2BEKndia70%2Fim%2F2PLHywWUAKyU1rOZyGH9ls%3D&st=2016-05-19T08%3A10%3A59Z&se=2016-05-19T12%3A15%3A59Z&sp=rw&api-version=2015-04-05', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aegW9zT5QEn52baYgZAWKQ==',
  'last-modified': 'Thu, 19 May 2016 08:16:01 GMT',
  etag: '"0x8D37FBDD0E35AE7"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c7eb0242-0001-0056-1aa6-b169cf000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 08:16:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://armclibatch9667.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/app-armclibatchapp6526-e22f366b4387d478b75359fc56bb0f78354ac280/armclibatchapp6526-1.0-969dbe0d-3b67-4004-8f4d-d1cc048b884f?sv=2014-02-14&sr=b&sig=xg8QQMSN%2BEKndia70%2Fim%2F2PLHywWUAKyU1rOZyGH9ls%3D&st=2016-05-19T08%3A10%3A59Z&se=2016-05-19T12%3A15%3A59Z&sp=rw&api-version=2015-04-05', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aegW9zT5QEn52baYgZAWKQ==',
  'last-modified': 'Thu, 19 May 2016 08:16:01 GMT',
  etag: '"0x8D37FBDD0E35AE7"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c7eb0242-0001-0056-1aa6-b169cf000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 08:16:01 GMT',
  connection: 'close' });
 return result; }]];