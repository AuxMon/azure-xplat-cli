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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .head('/testfilecopydestshare/testfilecopydestdir/toCopy')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Tue, 14 Feb 2017 06:25:06 GMT',
  etag: '"0x8D454A2380F146C"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0d429ef0-001a-002c-768b-86143a000000',
  'x-ms-version': '2016-05-31',
  'x-ms-copy-id': '24beecbc-633d-4746-bcb9-fbbd3bc4933a',
  'x-ms-copy-source': 'https://xplat.blob.core.windows.net/testfilecopysourcecontainer/testfilecopysourceblob?se=2017-02-21T06%3A25%3A06Z&sp=r&sv=2016-05-31&sr=b&sig=T95oJHkrvTP%2B7BMYSUZd%2FMWbPMkZzwMVzzwm5OtxFCU%3D',
  'x-ms-copy-status': 'success',
  'x-ms-copy-progress': '10/10',
  'x-ms-copy-completion-time': 'Tue, 14 Feb 2017 06:25:06 GMT',
  'x-ms-type': 'File',
  date: 'Tue, 14 Feb 2017 06:25:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/testfilecopydestshare/testfilecopydestdir/toCopy')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Tue, 14 Feb 2017 06:25:06 GMT',
  etag: '"0x8D454A2380F146C"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0d429ef0-001a-002c-768b-86143a000000',
  'x-ms-version': '2016-05-31',
  'x-ms-copy-id': '24beecbc-633d-4746-bcb9-fbbd3bc4933a',
  'x-ms-copy-source': 'https://xplat.blob.core.windows.net/testfilecopysourcecontainer/testfilecopysourceblob?se=2017-02-21T06%3A25%3A06Z&sp=r&sv=2016-05-31&sr=b&sig=T95oJHkrvTP%2B7BMYSUZd%2FMWbPMkZzwMVzzwm5OtxFCU%3D',
  'x-ms-copy-status': 'success',
  'x-ms-copy-progress': '10/10',
  'x-ms-copy-completion-time': 'Tue, 14 Feb 2017 06:25:06 GMT',
  'x-ms-type': 'File',
  date: 'Tue, 14 Feb 2017 06:25:07 GMT',
  connection: 'close' });
 return result; }]];