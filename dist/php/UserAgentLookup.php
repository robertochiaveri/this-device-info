<?php

/*
if($_SERVER['HTTP_REFERER'] !== "SET_ALLOWED_DOMAIN_HERE"){
    die('Unauthorized access');
}
*/

// check for cURL
if (!extension_loaded("curl")) {
    $output = array(
       "success" => "false", 
       "error" => "cURL not available on server."
    );
    die(json_encode($output));
}

// get UserAgent string

// Specify the URL of the web server to make the request to
$url = "SET_ENDPOINT_HERE"."/";

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
    // return a handled error
    $output = array(
       "success" => "false", 
       "error" => "cURL error: ".curl_error($curl)
    );
} else {
    // return data
    $output = array(
       "success" => "true", 
       "data" => json_decode($response)
    );
};

// Close the cURL session
curl_close($curl);

// return output as json
die(json_encode($output));

?>
