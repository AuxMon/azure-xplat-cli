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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/0/networkInterfaces/test/ipconfigurations/test/publicipaddresses?api-version=2017-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/0/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"a9186348-6f78-48ed-bc81-69e2a20bf933\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"e5944c45-dc8c-404c-bdde-867bc07b2a86\",\r\n        \"ipAddress\": \"13.76.211.160\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm0.vmssiplabel\",\r\n          \"fqdn\": \"vm0.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/0/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1158',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9b24ca40-793b-400e-962e-9d614dfa8879',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '0585dbd9-d95c-456e-8b0d-cf9a0d965a7f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T123808Z:0585dbd9-d95c-456e-8b0d-cf9a0d965a7f',
  date: 'Thu, 22 Jun 2017 12:38:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/0/networkInterfaces/test/ipconfigurations/test/publicipaddresses?api-version=2017-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/0/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"a9186348-6f78-48ed-bc81-69e2a20bf933\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"e5944c45-dc8c-404c-bdde-867bc07b2a86\",\r\n        \"ipAddress\": \"13.76.211.160\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm0.vmssiplabel\",\r\n          \"fqdn\": \"vm0.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/0/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1158',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9b24ca40-793b-400e-962e-9d614dfa8879',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '0585dbd9-d95c-456e-8b0d-cf9a0d965a7f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T123808Z:0585dbd9-d95c-456e-8b0d-cf9a0d965a7f',
  date: 'Thu, 22 Jun 2017 12:38:07 GMT',
  connection: 'close' });
 return result; }]];