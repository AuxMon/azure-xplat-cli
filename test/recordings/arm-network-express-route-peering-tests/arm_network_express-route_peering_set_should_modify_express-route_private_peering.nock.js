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
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"AzurePrivatePeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n  \"etag\": \"W/\\\"b1b7fa6f-af67-4b80-b4bd-04bf49b500ad\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePrivatePeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 100,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 200,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '780',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b9d90e59-3e5d-4145-945c-9a95ab157a7e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'd68b01e4-692d-4c58-ac83-259339385552',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T104809Z:d68b01e4-692d-4c58-ac83-259339385552',
  date: 'Wed, 31 May 2017 10:48:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"AzurePrivatePeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n  \"etag\": \"W/\\\"b1b7fa6f-af67-4b80-b4bd-04bf49b500ad\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePrivatePeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 100,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 200,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '780',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b9d90e59-3e5d-4145-945c-9a95ab157a7e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'd68b01e4-692d-4c58-ac83-259339385552',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T104809Z:d68b01e4-692d-4c58-ac83-259339385552',
  date: 'Wed, 31 May 2017 10:48:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"AzurePrivatePeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n  \"etag\": \"W/\\\"5d3994d4-8cec-4a3c-9912-ef6b275324ca\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"peeringType\": \"AzurePrivatePeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 100,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 199,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '779',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '87d64961-e313-49f9-933b-b921d826185e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/87d64961-e313-49f9-933b-b921d826185e?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '6c4fca70-356f-4fbe-8659-2a2f8347f6f0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T104811Z:6c4fca70-356f-4fbe-8659-2a2f8347f6f0',
  date: 'Wed, 31 May 2017 10:48:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"AzurePrivatePeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n  \"etag\": \"W/\\\"5d3994d4-8cec-4a3c-9912-ef6b275324ca\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"peeringType\": \"AzurePrivatePeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 100,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 199,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '779',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '87d64961-e313-49f9-933b-b921d826185e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/87d64961-e313-49f9-933b-b921d826185e?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '6c4fca70-356f-4fbe-8659-2a2f8347f6f0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T104811Z:6c4fca70-356f-4fbe-8659-2a2f8347f6f0',
  date: 'Wed, 31 May 2017 10:48:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/87d64961-e313-49f9-933b-b921d826185e?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '706f1640-9fda-4e09-a1d4-81e0033a4237',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'f0d3a1a5-ecfd-45af-9e4f-42cb9f9d6deb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T104842Z:f0d3a1a5-ecfd-45af-9e4f-42cb9f9d6deb',
  date: 'Wed, 31 May 2017 10:48:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/87d64961-e313-49f9-933b-b921d826185e?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '706f1640-9fda-4e09-a1d4-81e0033a4237',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'f0d3a1a5-ecfd-45af-9e4f-42cb9f9d6deb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T104842Z:f0d3a1a5-ecfd-45af-9e4f-42cb9f9d6deb',
  date: 'Wed, 31 May 2017 10:48:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/87d64961-e313-49f9-933b-b921d826185e?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f4a56e39-4d50-440d-b483-46d6066f2eae',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '38753e3c-4f81-4365-8eb8-fc595c2bab31',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T104913Z:38753e3c-4f81-4365-8eb8-fc595c2bab31',
  date: 'Wed, 31 May 2017 10:49:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/87d64961-e313-49f9-933b-b921d826185e?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f4a56e39-4d50-440d-b483-46d6066f2eae',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '38753e3c-4f81-4365-8eb8-fc595c2bab31',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T104913Z:38753e3c-4f81-4365-8eb8-fc595c2bab31',
  date: 'Wed, 31 May 2017 10:49:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"AzurePrivatePeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n  \"etag\": \"W/\\\"e48d07cd-c1eb-471f-a501-4255e78bc552\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePrivatePeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 100,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 199,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '780',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '35ca29c1-100f-442c-b2e4-d9e5f2b4ad20',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '1cc7bda0-8772-4b5b-9203-0b6cd01319fb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T104915Z:1cc7bda0-8772-4b5b-9203-0b6cd01319fb',
  date: 'Wed, 31 May 2017 10:49:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"AzurePrivatePeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n  \"etag\": \"W/\\\"e48d07cd-c1eb-471f-a501-4255e78bc552\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePrivatePeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 100,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 199,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '780',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '35ca29c1-100f-442c-b2e4-d9e5f2b4ad20',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '1cc7bda0-8772-4b5b-9203-0b6cd01319fb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T104915Z:1cc7bda0-8772-4b5b-9203-0b6cd01319fb',
  date: 'Wed, 31 May 2017 10:49:14 GMT',
  connection: 'close' });
 return result; }]];
