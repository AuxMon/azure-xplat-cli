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
  .delete('/directorytestshare/newdir?restype=directory')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0d429ed6-001a-002c-728b-86143a000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .delete('/directorytestshare/newdir?restype=directory')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0d429ed6-001a-002c-728b-86143a000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:43 GMT',
  connection: 'close' });
 return result; }]];