// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4',
    name: 'Visual Studio Enterprise with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'ed912eac-e7c1-43f8-a91f-ef14a7879293',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_1'] = 'xplattestadlsrgr01';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_1'] = 'cliTestProfile01';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_2'] = 'xplattestadlsrgr02';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_2'] = 'cliTestProfile02';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_1'] = 'cliTestEndpoint01';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_2'] = 'cliTestEndpoint02';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_1'] = 'cliTestOrigin01';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_2'] = 'cliTestOrigin02';
  process.env['AZURE_ARM_TEST_ENDPOINT_TEST_LOCATION_1'] = 'eastus';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_NAME_1'] = 'cliTestCustomDomain01';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_HOST_NAME_1'] = 'cli-0a51dd4a-33ca-4c25-91d7-42ae35c12cdd.azureedge-test.net';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01?api-version=2016-04-02')
  .reply(200, "{\r\n  \"name\":\"cliTestEndpoint01\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint01.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopped\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin01\",\"properties\":{\r\n          \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '816',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '37751521-1f8d-4cd3-9a90-3d90117780d0',
  'x-ms-client-request-id': '02bbcc46-063c-40ff-bbdf-d46f5692e5a9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '6709d5ca-eff1-47f3-afc9-2a8cd8c79561',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T214151Z:6709d5ca-eff1-47f3-afc9-2a8cd8c79561',
  date: 'Wed, 18 May 2016 21:41:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01?api-version=2016-04-02')
  .reply(200, "{\r\n  \"name\":\"cliTestEndpoint01\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint01.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopped\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin01\",\"properties\":{\r\n          \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '816',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '37751521-1f8d-4cd3-9a90-3d90117780d0',
  'x-ms-client-request-id': '02bbcc46-063c-40ff-bbdf-d46f5692e5a9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '6709d5ca-eff1-47f3-afc9-2a8cd8c79561',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T214151Z:6709d5ca-eff1-47f3-afc9-2a8cd8c79561',
  date: 'Wed, 18 May 2016 21:41:51 GMT',
  connection: 'close' });
 return result; }]];