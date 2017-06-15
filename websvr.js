/**
 * Created by thisguy on 6/14/17.
 */

//  Kory Schmidt
//  CS 81: Javascript Programming
//  June 13, 2017
//  Assignment 11

//----------------------------------------------------------------

//  Part 3

//  This third part of the program creates a simple web server that
//  serves a simple piece of text in response to requests.


var http = require('http');

// Create a server
http.createServer( function (request, response)
{   // Page found
    // HTTP Status: 200 : OK
    // Content Type: text/plain
        response.writeHead(200, {'Content-Type': 'text/html'});

    // Write the content of the file to response body
        response.write('Hello. My name is Detective John Kimble.');
}).listen(8001);

// Console will print the message
console.log('Server running at http://127.0.0.1:8001/');