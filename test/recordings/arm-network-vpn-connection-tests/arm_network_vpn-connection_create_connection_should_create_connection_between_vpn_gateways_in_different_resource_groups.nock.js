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
    registeredProviders: ['mobileservice', 'website'],
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway-1\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\",\r\n  \"etag\": \"W/\\\"cf9bfe59-3bfb-4074-8d44-40a9ac9d8df9\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a78ae21e-c054-419b-84d9-4ab20ba6c4a6\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"cf9bfe59-3bfb-4074-8d44-40a9ac9d8df9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/publicIPAddresses/test-ip-1\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworks/test-vnet-1/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"bgpSettings\": {\r\n      \"asn\": 65010,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1789',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f3910633-218d-4cbf-938e-b98b3ab20851',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '6015aca8-7282-41d1-8249-1a331c3f059f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101711Z:6015aca8-7282-41d1-8249-1a331c3f059f',
  date: 'Thu, 19 Jan 2017 10:17:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway-1\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\",\r\n  \"etag\": \"W/\\\"cf9bfe59-3bfb-4074-8d44-40a9ac9d8df9\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a78ae21e-c054-419b-84d9-4ab20ba6c4a6\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"cf9bfe59-3bfb-4074-8d44-40a9ac9d8df9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/publicIPAddresses/test-ip-1\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworks/test-vnet-1/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"bgpSettings\": {\r\n      \"asn\": 65010,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1789',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f3910633-218d-4cbf-938e-b98b3ab20851',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '6015aca8-7282-41d1-8249-1a331c3f059f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101711Z:6015aca8-7282-41d1-8249-1a331c3f059f',
  date: 'Thu, 19 Jan 2017 10:17:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway-2\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\",\r\n  \"etag\": \"W/\\\"cbde47a4-1825-4ba8-98e9-329d959883af\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"14dcfab0-daef-4720-808f-fd99c078019e\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"cbde47a4-1825-4ba8-98e9-329d959883af\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/publicIPAddresses/test-ip-2\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworks/test-vnet-2/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"bgpSettings\": {\r\n      \"asn\": 65060,\r\n      \"bgpPeeringAddress\": \"10.14.255.30\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1789',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4a93bce6-08e3-4d10-866f-33cc4836bad0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '457cb346-00f4-4fe5-b2bd-1f293c494c8c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101712Z:457cb346-00f4-4fe5-b2bd-1f293c494c8c',
  date: 'Thu, 19 Jan 2017 10:17:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway-2\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\",\r\n  \"etag\": \"W/\\\"cbde47a4-1825-4ba8-98e9-329d959883af\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"14dcfab0-daef-4720-808f-fd99c078019e\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"cbde47a4-1825-4ba8-98e9-329d959883af\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/publicIPAddresses/test-ip-2\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworks/test-vnet-2/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"bgpSettings\": {\r\n      \"asn\": 65060,\r\n      \"bgpPeeringAddress\": \"10.14.255.30\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1789',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4a93bce6-08e3-4d10-866f-33cc4836bad0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '457cb346-00f4-4fe5-b2bd-1f293c494c8c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101712Z:457cb346-00f4-4fe5-b2bd-1f293c494c8c',
  date: 'Thu, 19 Jan 2017 10:17:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/connections/test-vpn-connection' under resource group 'xplat-test-gateway-group-1' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'f18e1bdd-38d3-48ff-8fe5-ec4d2cd22b16',
  'x-ms-correlation-request-id': 'f18e1bdd-38d3-48ff-8fe5-ec4d2cd22b16',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101712Z:f18e1bdd-38d3-48ff-8fe5-ec4d2cd22b16',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 19 Jan 2017 10:17:12 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/connections/test-vpn-connection' under resource group 'xplat-test-gateway-group-1' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'f18e1bdd-38d3-48ff-8fe5-ec4d2cd22b16',
  'x-ms-correlation-request-id': 'f18e1bdd-38d3-48ff-8fe5-ec4d2cd22b16',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101712Z:f18e1bdd-38d3-48ff-8fe5-ec4d2cd22b16',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 19 Jan 2017 10:17:12 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"af8e5d27-9403-4d90-8785-7a17b42a5755\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"455cd08f-bbf4-4e37-b524-79ef0e66273a\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"3082019006092A864886F70D010703A08201813082017D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E02105A63B005AC7543964887A6D28260FDF4300D06092A864886F70D0101010500048201007393431AA744888AB91E9537933CE32ABC836114FB3EE0AFA3C33774B8E0CBFFE8FCAB4E24D99F649DF6F62EC8B31B293EA667438E8A60634C6281E7807F35673F66467CF913671EF779F24E759883B0DA846FBEE91B5AF641C0A5798FF96B4689F3F9BB817244B674DD2F0F8CD325242A6FDA2AAB92715DAD830DB0D66D977842627A356965F640D328C0EA352510EE0D5DD56348887C027AD578390EBD7217219217E42F6067149B895D98D4EAC704DB59299AA92ADA09F93012BFACCFFABA88563E23248B86806F57E1130B3E308B3093B13343F1DD0FAF7CDBCBAEB84993E9C817F88C4E6CC843859C0322E65CB5220101311262A53BAF4D75CC3F1CC7F8302B06092A864886F70D010701301406082A864886F70D030704082514FEFC829ABA3380086A5CA95C1E3B992D\",\r\n    \"enableBgp\": true,\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1935',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '95c265de-2eef-4992-8aac-6182a8da9e8b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/95c265de-2eef-4992-8aac-6182a8da9e8b?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '9ae60ace-68e0-4924-9886-e7a90e444d0e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101715Z:9ae60ace-68e0-4924-9886-e7a90e444d0e',
  date: 'Thu, 19 Jan 2017 10:17:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"af8e5d27-9403-4d90-8785-7a17b42a5755\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"455cd08f-bbf4-4e37-b524-79ef0e66273a\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"3082019006092A864886F70D010703A08201813082017D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E02105A63B005AC7543964887A6D28260FDF4300D06092A864886F70D0101010500048201007393431AA744888AB91E9537933CE32ABC836114FB3EE0AFA3C33774B8E0CBFFE8FCAB4E24D99F649DF6F62EC8B31B293EA667438E8A60634C6281E7807F35673F66467CF913671EF779F24E759883B0DA846FBEE91B5AF641C0A5798FF96B4689F3F9BB817244B674DD2F0F8CD325242A6FDA2AAB92715DAD830DB0D66D977842627A356965F640D328C0EA352510EE0D5DD56348887C027AD578390EBD7217219217E42F6067149B895D98D4EAC704DB59299AA92ADA09F93012BFACCFFABA88563E23248B86806F57E1130B3E308B3093B13343F1DD0FAF7CDBCBAEB84993E9C817F88C4E6CC843859C0322E65CB5220101311262A53BAF4D75CC3F1CC7F8302B06092A864886F70D010701301406082A864886F70D030704082514FEFC829ABA3380086A5CA95C1E3B992D\",\r\n    \"enableBgp\": true,\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1935',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '95c265de-2eef-4992-8aac-6182a8da9e8b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/95c265de-2eef-4992-8aac-6182a8da9e8b?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '9ae60ace-68e0-4924-9886-e7a90e444d0e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101715Z:9ae60ace-68e0-4924-9886-e7a90e444d0e',
  date: 'Thu, 19 Jan 2017 10:17:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/95c265de-2eef-4992-8aac-6182a8da9e8b?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b11940a9-9e6b-4365-bfd4-40cc066e642e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14826',
  'x-ms-correlation-request-id': '29411bf0-05fe-4c58-bd32-00784a24ffef',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101746Z:29411bf0-05fe-4c58-bd32-00784a24ffef',
  date: 'Thu, 19 Jan 2017 10:17:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/95c265de-2eef-4992-8aac-6182a8da9e8b?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b11940a9-9e6b-4365-bfd4-40cc066e642e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14826',
  'x-ms-correlation-request-id': '29411bf0-05fe-4c58-bd32-00784a24ffef',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101746Z:29411bf0-05fe-4c58-bd32-00784a24ffef',
  date: 'Thu, 19 Jan 2017 10:17:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"a9dccc4a-7ef8-43e4-b724-a9a9a00b20d0\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"455cd08f-bbf4-4e37-b524-79ef0e66273a\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"abc123\",\r\n    \"enableBgp\": true,\r\n    \"connectionStatus\": \"Unknown\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1170',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4d3074cc-95e6-4923-bad0-83a24e3b1327',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '2cab3692-d464-478a-8031-b7370aba0f97',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101747Z:2cab3692-d464-478a-8031-b7370aba0f97',
  date: 'Thu, 19 Jan 2017 10:17:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"a9dccc4a-7ef8-43e4-b724-a9a9a00b20d0\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"455cd08f-bbf4-4e37-b524-79ef0e66273a\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"abc123\",\r\n    \"enableBgp\": true,\r\n    \"connectionStatus\": \"Unknown\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1170',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4d3074cc-95e6-4923-bad0-83a24e3b1327',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '2cab3692-d464-478a-8031-b7370aba0f97',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101747Z:2cab3692-d464-478a-8031-b7370aba0f97',
  date: 'Thu, 19 Jan 2017 10:17:46 GMT',
  connection: 'close' });
 return result; }]];
