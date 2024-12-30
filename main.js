const http = require('http');
const fs = require('fs').promises;
const path = require('path');
var back = require('androidjs').back;
var server_started = 0
console.log("averyspecificstring");

// Get the application's directory path
const appDirPath = '/data/user/0/com.androidjs.webview/files/myapp' // This will give you the directory of the current script

const server = http.createServer(async (request, response) => {
    console.log('request starting...');

    // Construct the file path based on the URL
    let filePath = path.join(appDirPath, request.url);
    if (filePath === path.join(appDirPath, '/')) {
        filePath = path.join(appDirPath, 'index.html'); // Default to index.html
    }

    const extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
        case '.wasm':
            contentType = 'application/wasm';
            break;
        default:
            contentType = 'text/javascript';
            break;
    }

    try {
        const content = await fs.readFile(filePath);
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(content, 'utf-8');
    } catch (error) {
        if (error.code === 'ENOENT') {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.end('<h1>404 Not Found</h1>', 'utf-8');
        } else {
            response.writeHead(500);
            response.end('Sorry, there was an error: ' + error.code + ' ..\n', 'utf-8');
        }
    }
});

server.listen(8125, () => {
    console.log('Server running at http://127.0.0.1:8125/');
    server_started = 1
});

back.on("isUp?", function (msg) {
    console.log("ircvd isUp", msg)
    back.send("serverUp", server_started)
})