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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/applicationGateways?api-version=2017-03-01')
  .reply(200, "{\"value\":[{\"name\":\"xplatTestAppGw\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"type\":\"Microsoft.Network/applicationGateways\",\"location\":\"eastus\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"provisioningState\":\"Succeeded\",\"resourceGuid\":\"2d252931-9e1d-433d-9400-8680e207b7c3\",\"sku\":{\"name\":\"Standard_Small\",\"tier\":\"Standard\",\"capacity\":2},\"operationalState\":\"Running\",\"gatewayIPConfigurations\":[{\"name\":\"ipConfig01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/gatewayIPConfigurations/ipConfig01\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"subnet\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"}}}],\"sslCertificates\":[{\"name\":\"cert01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert01\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"publicCertData\":\"MIIDEwYJKoZIhvcNAQcCoIIDBDCCAwACAQExADALBgkqhkiG9w0BBwGgggLoMIIC5DCCAdCgAwIBAgIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAMA8xDTALBgNVBAMTBGNlcnQwHhcNMTYwMTAyMjEwMDAwWhcNMTkwMTAyMjEwMDAwWjAPMQ0wCwYDVQQDEwRjZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsL4kuUwYvzuYQXRtPvcpohRWWevCYgRL3cZ9zbbrXngRFnB9gvwGdjxq32vF4xqRCA8sfQQ41K+uI/XDIVmC2+O1io9VFOMFkPnW/0FUSJdUQTzKJ2J9b7E/nW7V0tcclsGgkX1XUx0qYoPHX4cvFJ4f17iTqAdvVrD+9CftA55DBNmWqm6u69b16u+2gx/sFtD79392esruG2Ba96eXke7hcH07YsmEHjY84M2bhAao4I1QDIfWmuBCkza879sjXTppceCLWm/OFO5CT7I0RS4wvapdT33jdnazcwDEM/jPqA4xej7Xhm6lCpIB4FUPMbQXX0NPsRm+8+c6t4U04QIDAQABo0QwQjBABgNVHQEEOTA3gBDE7dcQ34QUkVStX5JDp5ZtoREwDzENMAsGA1UEAxMEY2VydIIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAA4IBAQBa/NJLW6bL0uA0n/PP5NG+6W/VhCgy4cPX0qXZ0dp/S4Y/LTz6relh3K0OJI32xT+p8ETw5n+StYc6qP4V4jy7ywJvSHh6a1Wpeo5PjZrPoB9sv26yZYS5M4w6qzBUnR5khKXa0Ytazgl/7dwScbz3EdLcNr4eAVSV/l9knsl7CkffgyXQ79PFadI9EFUYWqIvmWvJT+EO19w035cAjYckjwDy987rR6SizHB9hvRTh5ETO2aUtMrRlkQLS7hQARZdkUx0Bt3FU9nIUwVcMLpiRX+iwQKmMV42llfwg0cm3hVbZDowRTnNWYLsygN386LYb2K09D2C1a84Ty9wUbQDMQA=\",\"httpListeners\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"}]}}],\"authenticationCertificates\":[],\"frontendIPConfigurations\":[{\"name\":\"frontendIp01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"privateIPAddress\":\"10.0.0.6\",\"privateIPAllocationMethod\":\"Dynamic\",\"subnet\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"},\"httpListeners\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"}]}}],\"frontendPorts\":[{\"name\":\"frontendPort01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"port\":112,\"httpListeners\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"}]}}],\"backendAddressPools\":[{\"name\":\"pool01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"backendAddresses\":[{\"ipAddress\":\"1.1.1.1\"}],\"requestRoutingRules\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"}]}}],\"backendHttpSettingsCollection\":[{\"name\":\"httpSettings01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"port\":111,\"protocol\":\"Http\",\"cookieBasedAffinity\":\"Disabled\",\"requestTimeout\":30,\"requestRoutingRules\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"}]}}],\"httpListeners\":[{\"name\":\"listener01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"frontendIPConfiguration\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\"},\"frontendPort\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\"},\"protocol\":\"Https\",\"sslCertificate\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert01\"},\"requireServerNameIndication\":false,\"requestRoutingRules\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"}]}}],\"urlPathMaps\":[],\"requestRoutingRules\":[{\"name\":\"rule01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"ruleType\":\"Basic\",\"httpListener\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"},\"backendAddressPool\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\"},\"backendHttpSettings\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\"}}}],\"probes\":[]}},{\"name\":\"appgw\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw\",\"etag\":\"W/\\\"e5d65300-fb86-4d29-a81e-f8d490a3a64c\\\"\",\"type\":\"Microsoft.Network/applicationGateways\",\"location\":\"westcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"resourceGuid\":\"67739989-a469-422a-8c32-d364a2fc6c43\",\"sku\":{\"name\":\"Standard_Medium\",\"tier\":\"Standard\",\"capacity\":2},\"operationalState\":\"Running\",\"gatewayIPConfigurations\":[{\"name\":\"ipConfig01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/gatewayIPConfigurations/ipConfig01\",\"etag\":\"W/\\\"e5d65300-fb86-4d29-a81e-f8d490a3a64c\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"subnet\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/virtualNetworks/appgwvnet/subnets/appgwsubnet\"}}}],\"sslCertificates\":[],\"authenticationCertificates\":[],\"frontendIPConfigurations\":[{\"name\":\"frontendIp01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/frontendIPConfigurations/frontendIp01\",\"etag\":\"W/\\\"e5d65300-fb86-4d29-a81e-f8d490a3a64c\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"privateIPAllocationMethod\":\"Dynamic\",\"publicIPAddress\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/publicIPAddresses/appgwip\"},\"httpListeners\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/httpListeners/listener01\"}]}}],\"frontendPorts\":[{\"name\":\"frontendPort01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/frontendPorts/frontendPort01\",\"etag\":\"W/\\\"e5d65300-fb86-4d29-a81e-f8d490a3a64c\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"port\":80,\"httpListeners\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/httpListeners/listener01\"}]}}],\"backendAddressPools\":[{\"name\":\"pool01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/backendAddressPools/pool01\",\"etag\":\"W/\\\"e5d65300-fb86-4d29-a81e-f8d490a3a64c\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"backendAddresses\":[{\"ipAddress\":\"12.13.14.15\"},{\"ipAddress\":\"10.11.12.13\"}],\"requestRoutingRules\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/requestRoutingRules/rule01\"}]}}],\"backendHttpSettingsCollection\":[{\"name\":\"httpSettings01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/backendHttpSettingsCollection/httpSettings01\",\"etag\":\"W/\\\"e5d65300-fb86-4d29-a81e-f8d490a3a64c\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"port\":80,\"protocol\":\"Http\",\"cookieBasedAffinity\":\"Disabled\",\"requestTimeout\":30,\"requestRoutingRules\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/requestRoutingRules/rule01\"}]}}],\"httpListeners\":[{\"name\":\"listener01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/httpListeners/listener01\",\"etag\":\"W/\\\"e5d65300-fb86-4d29-a81e-f8d490a3a64c\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"frontendIPConfiguration\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/frontendIPConfigurations/frontendIp01\"},\"frontendPort\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/frontendPorts/frontendPort01\"},\"protocol\":\"Http\",\"requireServerNameIndication\":false,\"requestRoutingRules\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/requestRoutingRules/rule01\"}]}}],\"urlPathMaps\":[],\"requestRoutingRules\":[{\"name\":\"rule01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/requestRoutingRules/rule01\",\"etag\":\"W/\\\"e5d65300-fb86-4d29-a81e-f8d490a3a64c\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"ruleType\":\"Basic\",\"httpListener\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/httpListeners/listener01\"},\"backendAddressPool\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/backendAddressPools/pool01\"},\"backendHttpSettings\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/backendHttpSettingsCollection/httpSettings01\"}}}],\"probes\":[]}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-original-request-ids': '178a24ab-5cde-498c-ad95-e125d82eac9c, d01cd666-71b1-4a1b-a65f-122342e8c8a5',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': '87d11342-2cd4-4ffe-8c32-3b0eb7ec4884',
  'x-ms-correlation-request-id': '87d11342-2cd4-4ffe-8c32-3b0eb7ec4884',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T102931Z:87d11342-2cd4-4ffe-8c32-3b0eb7ec4884',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Jun 2017 10:29:30 GMT',
  connection: 'close',
  'content-length': '13176' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/applicationGateways?api-version=2017-03-01')
  .reply(200, "{\"value\":[{\"name\":\"xplatTestAppGw\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"type\":\"Microsoft.Network/applicationGateways\",\"location\":\"eastus\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"provisioningState\":\"Succeeded\",\"resourceGuid\":\"2d252931-9e1d-433d-9400-8680e207b7c3\",\"sku\":{\"name\":\"Standard_Small\",\"tier\":\"Standard\",\"capacity\":2},\"operationalState\":\"Running\",\"gatewayIPConfigurations\":[{\"name\":\"ipConfig01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/gatewayIPConfigurations/ipConfig01\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"subnet\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"}}}],\"sslCertificates\":[{\"name\":\"cert01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert01\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"publicCertData\":\"MIIDEwYJKoZIhvcNAQcCoIIDBDCCAwACAQExADALBgkqhkiG9w0BBwGgggLoMIIC5DCCAdCgAwIBAgIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAMA8xDTALBgNVBAMTBGNlcnQwHhcNMTYwMTAyMjEwMDAwWhcNMTkwMTAyMjEwMDAwWjAPMQ0wCwYDVQQDEwRjZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsL4kuUwYvzuYQXRtPvcpohRWWevCYgRL3cZ9zbbrXngRFnB9gvwGdjxq32vF4xqRCA8sfQQ41K+uI/XDIVmC2+O1io9VFOMFkPnW/0FUSJdUQTzKJ2J9b7E/nW7V0tcclsGgkX1XUx0qYoPHX4cvFJ4f17iTqAdvVrD+9CftA55DBNmWqm6u69b16u+2gx/sFtD79392esruG2Ba96eXke7hcH07YsmEHjY84M2bhAao4I1QDIfWmuBCkza879sjXTppceCLWm/OFO5CT7I0RS4wvapdT33jdnazcwDEM/jPqA4xej7Xhm6lCpIB4FUPMbQXX0NPsRm+8+c6t4U04QIDAQABo0QwQjBABgNVHQEEOTA3gBDE7dcQ34QUkVStX5JDp5ZtoREwDzENMAsGA1UEAxMEY2VydIIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAA4IBAQBa/NJLW6bL0uA0n/PP5NG+6W/VhCgy4cPX0qXZ0dp/S4Y/LTz6relh3K0OJI32xT+p8ETw5n+StYc6qP4V4jy7ywJvSHh6a1Wpeo5PjZrPoB9sv26yZYS5M4w6qzBUnR5khKXa0Ytazgl/7dwScbz3EdLcNr4eAVSV/l9knsl7CkffgyXQ79PFadI9EFUYWqIvmWvJT+EO19w035cAjYckjwDy987rR6SizHB9hvRTh5ETO2aUtMrRlkQLS7hQARZdkUx0Bt3FU9nIUwVcMLpiRX+iwQKmMV42llfwg0cm3hVbZDowRTnNWYLsygN386LYb2K09D2C1a84Ty9wUbQDMQA=\",\"httpListeners\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"}]}}],\"authenticationCertificates\":[],\"frontendIPConfigurations\":[{\"name\":\"frontendIp01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"privateIPAddress\":\"10.0.0.6\",\"privateIPAllocationMethod\":\"Dynamic\",\"subnet\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"},\"httpListeners\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"}]}}],\"frontendPorts\":[{\"name\":\"frontendPort01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"port\":112,\"httpListeners\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"}]}}],\"backendAddressPools\":[{\"name\":\"pool01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"backendAddresses\":[{\"ipAddress\":\"1.1.1.1\"}],\"requestRoutingRules\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"}]}}],\"backendHttpSettingsCollection\":[{\"name\":\"httpSettings01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"port\":111,\"protocol\":\"Http\",\"cookieBasedAffinity\":\"Disabled\",\"requestTimeout\":30,\"requestRoutingRules\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"}]}}],\"httpListeners\":[{\"name\":\"listener01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"frontendIPConfiguration\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\"},\"frontendPort\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\"},\"protocol\":\"Https\",\"sslCertificate\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert01\"},\"requireServerNameIndication\":false,\"requestRoutingRules\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"}]}}],\"urlPathMaps\":[],\"requestRoutingRules\":[{\"name\":\"rule01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\",\"etag\":\"W/\\\"e01d7875-685d-4844-b3d9-e9e914ced662\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"ruleType\":\"Basic\",\"httpListener\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"},\"backendAddressPool\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\"},\"backendHttpSettings\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\"}}}],\"probes\":[]}},{\"name\":\"appgw\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw\",\"etag\":\"W/\\\"e5d65300-fb86-4d29-a81e-f8d490a3a64c\\\"\",\"type\":\"Microsoft.Network/applicationGateways\",\"location\":\"westcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"resourceGuid\":\"67739989-a469-422a-8c32-d364a2fc6c43\",\"sku\":{\"name\":\"Standard_Medium\",\"tier\":\"Standard\",\"capacity\":2},\"operationalState\":\"Running\",\"gatewayIPConfigurations\":[{\"name\":\"ipConfig01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/gatewayIPConfigurations/ipConfig01\",\"etag\":\"W/\\\"e5d65300-fb86-4d29-a81e-f8d490a3a64c\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"subnet\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/virtualNetworks/appgwvnet/subnets/appgwsubnet\"}}}],\"sslCertificates\":[],\"authenticationCertificates\":[],\"frontendIPConfigurations\":[{\"name\":\"frontendIp01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/frontendIPConfigurations/frontendIp01\",\"etag\":\"W/\\\"e5d65300-fb86-4d29-a81e-f8d490a3a64c\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"privateIPAllocationMethod\":\"Dynamic\",\"publicIPAddress\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/publicIPAddresses/appgwip\"},\"httpListeners\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/httpListeners/listener01\"}]}}],\"frontendPorts\":[{\"name\":\"frontendPort01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/frontendPorts/frontendPort01\",\"etag\":\"W/\\\"e5d65300-fb86-4d29-a81e-f8d490a3a64c\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"port\":80,\"httpListeners\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/httpListeners/listener01\"}]}}],\"backendAddressPools\":[{\"name\":\"pool01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/backendAddressPools/pool01\",\"etag\":\"W/\\\"e5d65300-fb86-4d29-a81e-f8d490a3a64c\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"backendAddresses\":[{\"ipAddress\":\"12.13.14.15\"},{\"ipAddress\":\"10.11.12.13\"}],\"requestRoutingRules\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/requestRoutingRules/rule01\"}]}}],\"backendHttpSettingsCollection\":[{\"name\":\"httpSettings01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/backendHttpSettingsCollection/httpSettings01\",\"etag\":\"W/\\\"e5d65300-fb86-4d29-a81e-f8d490a3a64c\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"port\":80,\"protocol\":\"Http\",\"cookieBasedAffinity\":\"Disabled\",\"requestTimeout\":30,\"requestRoutingRules\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/requestRoutingRules/rule01\"}]}}],\"httpListeners\":[{\"name\":\"listener01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/httpListeners/listener01\",\"etag\":\"W/\\\"e5d65300-fb86-4d29-a81e-f8d490a3a64c\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"frontendIPConfiguration\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/frontendIPConfigurations/frontendIp01\"},\"frontendPort\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/frontendPorts/frontendPort01\"},\"protocol\":\"Http\",\"requireServerNameIndication\":false,\"requestRoutingRules\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/requestRoutingRules/rule01\"}]}}],\"urlPathMaps\":[],\"requestRoutingRules\":[{\"name\":\"rule01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/requestRoutingRules/rule01\",\"etag\":\"W/\\\"e5d65300-fb86-4d29-a81e-f8d490a3a64c\\\"\",\"properties\":{\"provisioningState\":\"Succeeded\",\"ruleType\":\"Basic\",\"httpListener\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/httpListeners/listener01\"},\"backendAddressPool\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/backendAddressPools/pool01\"},\"backendHttpSettings\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-evg/providers/Microsoft.Network/applicationGateways/appgw/backendHttpSettingsCollection/httpSettings01\"}}}],\"probes\":[]}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-original-request-ids': '178a24ab-5cde-498c-ad95-e125d82eac9c, d01cd666-71b1-4a1b-a65f-122342e8c8a5',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': '87d11342-2cd4-4ffe-8c32-3b0eb7ec4884',
  'x-ms-correlation-request-id': '87d11342-2cd4-4ffe-8c32-3b0eb7ec4884',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T102931Z:87d11342-2cd4-4ffe-8c32-3b0eb7ec4884',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Jun 2017 10:29:30 GMT',
  connection: 'close',
  'content-length': '13176' });
 return result; }]];