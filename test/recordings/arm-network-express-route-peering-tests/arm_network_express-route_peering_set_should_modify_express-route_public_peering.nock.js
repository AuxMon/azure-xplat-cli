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
  .reply(200, "{\r\n  \"name\": \"AzurePublicPeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering\",\r\n  \"etag\": \"W/\\\"e48d07cd-c1eb-471f-a501-4255e78bc552\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePublicPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 110,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 210,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '777',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'baa144e8-7ada-4281-9bb1-14ae635a3d94',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '66fdb264-abbc-46fb-9b74-a5f2b35d16ec',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T104917Z:66fdb264-abbc-46fb-9b74-a5f2b35d16ec',
  date: 'Wed, 31 May 2017 10:49:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"AzurePublicPeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering\",\r\n  \"etag\": \"W/\\\"e48d07cd-c1eb-471f-a501-4255e78bc552\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePublicPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 110,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 210,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '777',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'baa144e8-7ada-4281-9bb1-14ae635a3d94',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '66fdb264-abbc-46fb-9b74-a5f2b35d16ec',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T104917Z:66fdb264-abbc-46fb-9b74-a5f2b35d16ec',
  date: 'Wed, 31 May 2017 10:49:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"AzurePublicPeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering\",\r\n  \"etag\": \"W/\\\"f6f8c84e-1e0f-45e0-b3da-fac37348957f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"peeringType\": \"AzurePublicPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 110,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 209,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '776',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '6f6f225d-14be-4a79-b422-8e4c89f5b01c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/6f6f225d-14be-4a79-b422-8e4c89f5b01c?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '3f36767a-be3c-4e6d-acc6-d5b9b326ed9e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T104919Z:3f36767a-be3c-4e6d-acc6-d5b9b326ed9e',
  date: 'Wed, 31 May 2017 10:49:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"AzurePublicPeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering\",\r\n  \"etag\": \"W/\\\"f6f8c84e-1e0f-45e0-b3da-fac37348957f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"peeringType\": \"AzurePublicPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 110,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 209,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '776',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '6f6f225d-14be-4a79-b422-8e4c89f5b01c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/6f6f225d-14be-4a79-b422-8e4c89f5b01c?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '3f36767a-be3c-4e6d-acc6-d5b9b326ed9e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T104919Z:3f36767a-be3c-4e6d-acc6-d5b9b326ed9e',
  date: 'Wed, 31 May 2017 10:49:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/6f6f225d-14be-4a79-b422-8e4c89f5b01c?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '6c135b1d-0530-4aeb-a680-0709a2b9dc77',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'd7c0d664-fb35-433f-a609-956c8cc9f0a7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T104951Z:d7c0d664-fb35-433f-a609-956c8cc9f0a7',
  date: 'Wed, 31 May 2017 10:49:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/6f6f225d-14be-4a79-b422-8e4c89f5b01c?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '6c135b1d-0530-4aeb-a680-0709a2b9dc77',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'd7c0d664-fb35-433f-a609-956c8cc9f0a7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T104951Z:d7c0d664-fb35-433f-a609-956c8cc9f0a7',
  date: 'Wed, 31 May 2017 10:49:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/6f6f225d-14be-4a79-b422-8e4c89f5b01c?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0e73f0b0-dc69-4be4-8df4-807fa9ddd2a0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'ba629806-43d1-4084-ab31-ee1f74f21231',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105022Z:ba629806-43d1-4084-ab31-ee1f74f21231',
  date: 'Wed, 31 May 2017 10:50:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/6f6f225d-14be-4a79-b422-8e4c89f5b01c?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0e73f0b0-dc69-4be4-8df4-807fa9ddd2a0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'ba629806-43d1-4084-ab31-ee1f74f21231',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105022Z:ba629806-43d1-4084-ab31-ee1f74f21231',
  date: 'Wed, 31 May 2017 10:50:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"AzurePublicPeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering\",\r\n  \"etag\": \"W/\\\"d6d288a3-c1fc-4e65-9437-22a2151e89a1\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePublicPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 110,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 209,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '777',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b9d2c4af-f06b-49fa-bdae-d94b9aa42e18',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'a67d124c-c431-4408-a5fd-76ecb0a5a4ae',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105024Z:a67d124c-c431-4408-a5fd-76ecb0a5a4ae',
  date: 'Wed, 31 May 2017 10:50:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"AzurePublicPeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering\",\r\n  \"etag\": \"W/\\\"d6d288a3-c1fc-4e65-9437-22a2151e89a1\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePublicPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 110,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 209,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '777',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b9d2c4af-f06b-49fa-bdae-d94b9aa42e18',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'a67d124c-c431-4408-a5fd-76ecb0a5a4ae',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105024Z:a67d124c-c431-4408-a5fd-76ecb0a5a4ae',
  date: 'Wed, 31 May 2017 10:50:24 GMT',
  connection: 'close' });
 return result; }]];
