<?php

/*
if($_SERVER['HTTP_REFERER'] !== "SET_ALLOWED_DOMAIN_HERE"){
    die('Unauthorized access');
}
*/

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
    "release_date"          => $client->getDeviceCapability('release_date')
);

// return data
$output = array(
   "success" => "true", 
   "data" => $capabilities
);

// return output as json
die(json_encode($output));

?>
