// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
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
nock('http://xplat.blob.core.windows.net:443')
  .head('/testblobcopysource?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '988ad138-0001-0034-6bb5-b139af000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/testblobcopysource?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '988ad138-0001-0034-6bb5-b139af000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/testblobcopysource?restype=container')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:03:27 GMT',
  etag: '"0x8D37FCCD2F17409"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4cb86a9f-0001-0021-6bb5-b1fb36000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/testblobcopysource?restype=container')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:03:27 GMT',
  etag: '"0x8D37FCCD2F17409"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4cb86a9f-0001-0021-6bb5-b1fb36000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/testblobcopydest?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '72ae2ff2-0001-0006-07b5-b1617f000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/testblobcopydest?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '72ae2ff2-0001-0006-07b5-b1617f000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest?restype=container')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:03:29 GMT',
  etag: '"0x8D37FCCD406FE14"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '55137f9f-0001-0017-75b5-b15664000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest?restype=container')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:03:29 GMT',
  etag: '"0x8D37FCCD406FE14"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '55137f9f-0001-0017-75b5-b15664000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/testblobcopysource/toCopy', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Thu, 19 May 2016 10:03:29 GMT',
  etag: '"0x8D37FCCD42C9928"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b072dbc7-0001-0002-5cb5-b194fd000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/testblobcopysource/toCopy', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Thu, 19 May 2016 10:03:29 GMT',
  etag: '"0x8D37FCCD42C9928"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b072dbc7-0001-0002-5cb5-b194fd000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .head('/testblobcopyshare?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '734b17b5-001a-002c-76b5-b1143a000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/testblobcopyshare?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '734b17b5-001a-002c-76b5-b1143a000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .put('/testblobcopyshare?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:03:30 GMT',
  etag: '"0x8D37FCCD4A53D7E"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9f2a368e-001a-0005-45b5-b16278000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/testblobcopyshare?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:03:30 GMT',
  etag: '"0x8D37FCCD4A53D7E"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9f2a368e-001a-0005-45b5-b16278000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .head('/testblobcopyshare/testblobcopydir?restype=directory')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4a26944a-001a-003b-3cb5-b1d459000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/testblobcopyshare/testblobcopydir?restype=directory')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4a26944a-001a-003b-3cb5-b1d459000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .put('/testblobcopyshare/testblobcopydir?restype=directory')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:03:32 GMT',
  etag: '"0x8D37FCCD5AC1FAD"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8f1ad10c-001a-001f-38b5-b14d17000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/testblobcopyshare/testblobcopydir?restype=directory')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:03:32 GMT',
  etag: '"0x8D37FCCD5AC1FAD"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8f1ad10c-001a-001f-38b5-b14d17000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .put('/testblobcopyshare/testblobcopydir/copytoblob.tmp.txt')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:03:32 GMT',
  etag: '"0x8D37FCCD5EED01F"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ca688853-001a-0016-47b5-b15799000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/testblobcopyshare/testblobcopydir/copytoblob.tmp.txt')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:03:32 GMT',
  etag: '"0x8D37FCCD5EED01F"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ca688853-001a-0016-47b5-b15799000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/testblobcopyshare/testblobcopydir/copytoblob.tmp.txt?comp=range', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Thu, 19 May 2016 10:03:34 GMT',
  etag: '"0x8D37FCCD6AF4074"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8ae20196-001a-002b-63b5-b1e2bf000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/testblobcopyshare/testblobcopydir/copytoblob.tmp.txt?comp=range', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Thu, 19 May 2016 10:03:34 GMT',
  etag: '"0x8D37FCCD6AF4074"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8ae20196-001a-002b-63b5-b1e2bf000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .put('/testblobcopyshare/testblobcopydir/copytoblob.tmp.txt?comp=properties')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:03:37 GMT',
  etag: '"0x8D37FCCD8BA8B9A"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'cd1174fc-001a-0036-6cb5-b13b55000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/testblobcopyshare/testblobcopydir/copytoblob.tmp.txt?comp=properties')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:03:37 GMT',
  etag: '"0x8D37FCCD8BA8B9A"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'cd1174fc-001a-0036-6cb5-b13b55000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:36 GMT',
  connection: 'close' });
 return result; }]];