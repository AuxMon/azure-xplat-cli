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
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_1'] = 'cliTestEndpoint001';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_2'] = 'cliTestEndpoint002';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_1'] = 'cliTestOrigin01';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_2'] = 'cliTestOrigin02';
  process.env['AZURE_ARM_TEST_ENDPOINT_TEST_LOCATION_1'] = 'eastus';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_NAME_1'] = 'cliTestCustomDomain01';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_HOST_NAME_1'] = 'cli-59e92ce9-af32-4879-baad-d5f36a9ede94.azureedge-test.net';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint001?api-version=2016-10-02', '*')
  .reply(202, "{\r\n  \"name\":\"cliTestEndpoint001\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint001\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint001.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":false,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin01\",\"properties\":{\r\n          \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '893',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/f3953be8-abbf-468d-909c-bc41bff671a5/profileresults/cliTestProfile01/endpointresults/cliTestEndpoint001?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': 'f92cb1aa-cda8-400a-b907-6e2f54821e59',
  'x-ms-client-request-id': '6119ef7c-94fc-4ad7-84a4-6739c1fd7bf3',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/f3953be8-abbf-468d-909c-bc41bff671a5?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'ff80a55c-ab18-47a5-a9b0-ab499b86c36f',
  'x-ms-routing-request-id': 'WESTUS2:20161219T230649Z:ff80a55c-ab18-47a5-a9b0-ab499b86c36f',
  date: 'Mon, 19 Dec 2016 23:06:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint001?api-version=2016-10-02', '*')
  .reply(202, "{\r\n  \"name\":\"cliTestEndpoint001\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint001\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint001.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":false,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin01\",\"properties\":{\r\n          \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '893',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/f3953be8-abbf-468d-909c-bc41bff671a5/profileresults/cliTestProfile01/endpointresults/cliTestEndpoint001?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': 'f92cb1aa-cda8-400a-b907-6e2f54821e59',
  'x-ms-client-request-id': '6119ef7c-94fc-4ad7-84a4-6739c1fd7bf3',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/f3953be8-abbf-468d-909c-bc41bff671a5?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'ff80a55c-ab18-47a5-a9b0-ab499b86c36f',
  'x-ms-routing-request-id': 'WESTUS2:20161219T230649Z:ff80a55c-ab18-47a5-a9b0-ab499b86c36f',
  date: 'Mon, 19 Dec 2016 23:06:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/f3953be8-abbf-468d-909c-bc41bff671a5?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '0c496dfe-2ae3-4a10-877a-fb340d26bb71',
  'x-ms-client-request-id': 'b3f8f58d-6441-42d4-9422-d490eba556ff',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '7331f212-0b22-42bc-aacd-f6c0a5b0a096',
  'x-ms-routing-request-id': 'WESTUS2:20161219T230719Z:7331f212-0b22-42bc-aacd-f6c0a5b0a096',
  date: 'Mon, 19 Dec 2016 23:07:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/f3953be8-abbf-468d-909c-bc41bff671a5?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '0c496dfe-2ae3-4a10-877a-fb340d26bb71',
  'x-ms-client-request-id': 'b3f8f58d-6441-42d4-9422-d490eba556ff',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '7331f212-0b22-42bc-aacd-f6c0a5b0a096',
  'x-ms-routing-request-id': 'WESTUS2:20161219T230719Z:7331f212-0b22-42bc-aacd-f6c0a5b0a096',
  date: 'Mon, 19 Dec 2016 23:07:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint001?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cliTestEndpoint001\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint001\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint001.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":false,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin01\",\"properties\":{\r\n          \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '893',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '0aabab9f-92f4-4b30-bb99-c8c63284a315',
  'x-ms-client-request-id': 'd2b18391-9a3e-42f9-a605-dc2083dc09ab',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'c63292d0-b8e1-40e6-bb20-7f0cd8703fee',
  'x-ms-routing-request-id': 'WESTUS2:20161219T230720Z:c63292d0-b8e1-40e6-bb20-7f0cd8703fee',
  date: 'Mon, 19 Dec 2016 23:07:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint001?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cliTestEndpoint001\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint001\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint001.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":false,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin01\",\"properties\":{\r\n          \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '893',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '0aabab9f-92f4-4b30-bb99-c8c63284a315',
  'x-ms-client-request-id': 'd2b18391-9a3e-42f9-a605-dc2083dc09ab',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'c63292d0-b8e1-40e6-bb20-7f0cd8703fee',
  'x-ms-routing-request-id': 'WESTUS2:20161219T230720Z:c63292d0-b8e1-40e6-bb20-7f0cd8703fee',
  date: 'Mon, 19 Dec 2016 23:07:20 GMT',
  connection: 'close' });
 return result; }]];