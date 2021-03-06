// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '52b6b790-9d5f-450c-98d9-97dbd91015d5',
    name: 'IXPMegaportASHPri',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'brazilsouth';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"AzurePublicPeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering\",\r\n  \"etag\": \"W/\\\"1ebbae30-6422-4c33-848b-f682a667b920\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePublicPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 110,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 209,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '777',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c6f39d11-eec6-4006-98e4-71174a9d8882',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'b87f4351-e739-4bec-844d-4f7df65c5b3b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105531Z:b87f4351-e739-4bec-844d-4f7df65c5b3b',
  date: 'Wed, 31 May 2017 10:55:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"AzurePublicPeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering\",\r\n  \"etag\": \"W/\\\"1ebbae30-6422-4c33-848b-f682a667b920\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePublicPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 110,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 209,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '777',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c6f39d11-eec6-4006-98e4-71174a9d8882',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'b87f4351-e739-4bec-844d-4f7df65c5b3b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105531Z:b87f4351-e739-4bec-844d-4f7df65c5b3b',
  date: 'Wed, 31 May 2017 10:55:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operationResults/50edce6f-9e40-4dce-b39d-87a3a16f774f?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '50edce6f-9e40-4dce-b39d-87a3a16f774f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/50edce6f-9e40-4dce-b39d-87a3a16f774f?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '5541b8c5-1f44-4c3c-abc6-bc6cfdd5c1d6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105533Z:5541b8c5-1f44-4c3c-abc6-bc6cfdd5c1d6',
  date: 'Wed, 31 May 2017 10:55:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operationResults/50edce6f-9e40-4dce-b39d-87a3a16f774f?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '50edce6f-9e40-4dce-b39d-87a3a16f774f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/50edce6f-9e40-4dce-b39d-87a3a16f774f?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '5541b8c5-1f44-4c3c-abc6-bc6cfdd5c1d6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105533Z:5541b8c5-1f44-4c3c-abc6-bc6cfdd5c1d6',
  date: 'Wed, 31 May 2017 10:55:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/50edce6f-9e40-4dce-b39d-87a3a16f774f?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '61797ec8-8516-4efd-89f4-b9bd5685b661',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '181f1cc3-8f67-47c0-83c0-19185f1afcbb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105604Z:181f1cc3-8f67-47c0-83c0-19185f1afcbb',
  date: 'Wed, 31 May 2017 10:56:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/50edce6f-9e40-4dce-b39d-87a3a16f774f?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '61797ec8-8516-4efd-89f4-b9bd5685b661',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '181f1cc3-8f67-47c0-83c0-19185f1afcbb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105604Z:181f1cc3-8f67-47c0-83c0-19185f1afcbb',
  date: 'Wed, 31 May 2017 10:56:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/50edce6f-9e40-4dce-b39d-87a3a16f774f?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '7938aca1-0b6d-4ed4-9a7a-555dab6d5c0f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '0cd791e0-410f-4c67-a260-702620c9a672',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105636Z:0cd791e0-410f-4c67-a260-702620c9a672',
  date: 'Wed, 31 May 2017 10:56:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/50edce6f-9e40-4dce-b39d-87a3a16f774f?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '7938aca1-0b6d-4ed4-9a7a-555dab6d5c0f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '0cd791e0-410f-4c67-a260-702620c9a672',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105636Z:0cd791e0-410f-4c67-a260-702620c9a672',
  date: 'Wed, 31 May 2017 10:56:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/50edce6f-9e40-4dce-b39d-87a3a16f774f?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4bd739da-655c-45f2-b799-0a527de85ff4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'a23fe4ff-c4b1-467b-9ba5-e416e8cff109',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105712Z:a23fe4ff-c4b1-467b-9ba5-e416e8cff109',
  date: 'Wed, 31 May 2017 10:57:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/50edce6f-9e40-4dce-b39d-87a3a16f774f?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4bd739da-655c-45f2-b799-0a527de85ff4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'a23fe4ff-c4b1-467b-9ba5-e416e8cff109',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105712Z:a23fe4ff-c4b1-467b-9ba5-e416e8cff109',
  date: 'Wed, 31 May 2017 10:57:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering?api-version=2017-03-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '299',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'adbb11e2-d061-4514-84c9-88833110adc6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '4035388d-a4f9-458d-a8ac-f492b65ebf0a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105713Z:4035388d-a4f9-458d-a8ac-f492b65ebf0a',
  date: 'Wed, 31 May 2017 10:57:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering?api-version=2017-03-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '299',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'adbb11e2-d061-4514-84c9-88833110adc6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '4035388d-a4f9-458d-a8ac-f492b65ebf0a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105713Z:4035388d-a4f9-458d-a8ac-f492b65ebf0a',
  date: 'Wed, 31 May 2017 10:57:13 GMT',
  connection: 'close' });
 return result; }]];
