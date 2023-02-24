<?php

// Display errors 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/*
if($_SERVER['HTTP_REFERER'] !== "SET_ALLOWED_DOMAIN_HERE"){
    die('Unauthorized access');
}
*/

// check for cURL
if (!extension_loaded("curl")) {
    die("Error: cURL not loaded.");
}


//whether ip is from the share internet  
if(!empty($_SERVER['HTTP_CLIENT_IP'])) {  
    $ip = $_SERVER['HTTP_CLIENT_IP'];  
}  
//whether ip is from the proxy  
elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {  
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];  
 }  
//whether ip is from the remote address  
else{  
    $ip = $_SERVER['REMOTE_ADDR'];  
}  
// in case of multiple proxies, use the first IP https://en.wikipedia.org/wiki/X-Forwarded-For
$ip = array_shift(explode(",", $ip ));

// Specify the URL of the web server to make the request to
$url = "SET_ENDPOINT_HERE"."/".$ip;

// Initialize a new cURL session
$curl = curl_init();

// Set the cURL options
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_URL => $url,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json',
        'Accept: application/json',
        'Cache-Control: must-revalidate'
    )
));

// Execute the cURL request and get the response
$response = curl_exec($curl);

// Check if there was an error with the cURL request
if(curl_errno($curl)) {
    die "Error: " . curl_error($curl);
} 
echo $response;


// Close the cURL session
curl_close($curl);

die();

?>
