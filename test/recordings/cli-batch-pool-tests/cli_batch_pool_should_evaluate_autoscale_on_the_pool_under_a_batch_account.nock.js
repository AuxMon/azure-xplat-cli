// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/xplatTestPool/evaluateautoscale?api-version=2016-02-01.3.0&timeout=30', '*')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.AutoScaleRun\",\"timestamp\":\"2016-05-20T05:36:34.8518644Z\",\"results\":\"$TargetDedicated=3;$NodeDeallocationOption=requeue\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '99c7e72d-74c4-4da6-a52b-5ad091d1df4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '244b60ff-308a-4f2a-93d8-f412be9da8e8',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/pools/xplatTestPool/evaluateautoscale',
  date: 'Fri, 20 May 2016 05:36:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/xplatTestPool/evaluateautoscale?api-version=2016-02-01.3.0&timeout=30', '*')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.AutoScaleRun\",\"timestamp\":\"2016-05-20T05:36:34.8518644Z\",\"results\":\"$TargetDedicated=3;$NodeDeallocationOption=requeue\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '99c7e72d-74c4-4da6-a52b-5ad091d1df4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '244b60ff-308a-4f2a-93d8-f412be9da8e8',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/pools/xplatTestPool/evaluateautoscale',
  date: 'Fri, 20 May 2016 05:36:34 GMT',
  connection: 'close' });
 return result; }]];