/**
 * Created by thisguy on 6/13/17.
 */

//  Kory Schmidt
//  CS 81: Javascript Programming
//  June 13, 2017
//  Assignment 11

//----------------------------------------------------------------

//  Part 1  Explain Node.js and how it's related to Javascript

//  Node.js is a framework of Javascript that works in multiple applications.
//  Basically, it allows you to code programs in Javascript and run them on your computer.
//  It's built on Google's Javascript Engine V8, and works through an additional binary program
//  added to your terminal application. This added piece of software allows any Terminal application
//  to run code written in Javascript.

//  Node.js is not like a normal programming language, in that it does not wait for normal i/o (input/output).
//  Instead of waiting for a response before continuing the program,
//  it sends information, and when it gets a notification of a response, then it checks it.
//  This allows the program to work much more efficiently in certain situations.
//  One of these situations is server-hosted applications. It can handle many more requests and information draw
//  than a normal program, making this especially well-suited for mobile applications that have a lot of draw.
//  It won't lag or crash or lock up waiting for other requests to finish.


//----------------------------------------------------------------

//  Part 2  node.JS environment test

//  This part of the file first sends a test message to console.log to show that the node.JS environment is working properly.
//  It then creates a test server, outputting a simple phrase to the browser, as well as a confirmation message
//  that the server is running properly.

console.log("Hello, World!");

//  Create HTTP server

var http = require("http");

http.createServer(function (request, response)
{
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

//--------------*********   END SCRIPT  ********------------------