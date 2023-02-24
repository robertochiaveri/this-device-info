<?php

// Display errors 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// check for cURL
if (!extension_loaded("curl")) {
    die("Error: cURL not loaded.");
}

// Specify the URL of the web server to make the request to
$url = "SET_ENDPOINT_HERE";

echo "url: ".$url;

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
    echo "Error: " . curl_error($curl);
} else {
    // Decode the JSON response
    $data = json_decode($response);

    // Display the response
    var_dump($data);
}

// Close the cURL session
curl_close($curl);

die("x_x");

?>
