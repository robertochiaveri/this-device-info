<?php

/*
if($_SERVER['HTTP_REFERER'] !== "SET_ALLOWED_DOMAIN_HERE"){
    die('Unauthorized access');
}
*/
header('Accept-CH: sec-ch-ua-platform,sec-ch-ua-arch,sec-ch-ua-model,sec-ch-ua-platform-version,sec-ch-ua-full-version,sec-ch-ua-bitness,sec-ch-ua-full-version-list', true);
header('Content-Type: text/html; charset=utf-8');

// Include the autoloader - edit this path! 
require_once 'wurfl-cloud-client-php/src/autoload.php'; 

// Create a configuration object  
$config = new ScientiaMobile\WurflCloud\Config();  

// Set your WURFL Cloud API Key  
$config->api_key = 'SET_WURFL_API_KEY_HERE';   

// Create the WURFL Cloud Client  
$client = new ScientiaMobile\WurflCloud\Client($config);  

// Detect your device  
$client->detectDevice();  

// Use the capabilities  
$capabilities = array(
    "form_factor"           => $client->getDeviceCapability('form_factor'),
    "model_name"            => $client->getDeviceCapability('model_name'),
    "model_extra_info"      => $client->getDeviceCapability('model_extra_info'),
    "complete_device_name"  => $client->getDeviceCapability('complete_device_name'),
    "release_date"          => $client->getDeviceCapability('release_date'),
    "debug_referrer"        => $_SERVER['HTTP_REFERER'],
    "debug_CH"              => apache_request_headers()
);

// return data
$output = array(
   "success" => "true", 
   "data" => $capabilities
);

// return output as json
die(json_encode($output));

?>
