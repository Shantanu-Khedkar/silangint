const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const url = require('url')
var back = require('androidjs').back;
const text2wav = require('text2wav')



var server_started = 0
console.log("averyspecificstring");

// Get the application's directory path
var appDirPath = './' // default path
var userDirPath = './' // TODO: Set default path (just incase smthing fails)
const server = http.createServer(async (request, response) => {
    console.log('request starting...');

    const parsedUrl = url.parse(request.url, true);
    // Construct the file path based on the URL
    let filePath = path.join(appDirPath, request.url);
    console.log(filePath)
    if (filePath === path.join(appDirPath, '/')) {
        filePath = path.join(appDirPath, '/views/index.html'); // Default to index.html
    }
    if (parsedUrl.pathname == "/speech") {
        console.log("speaking...")
        try {
            console.log(parsedUrl.query.t)
            const content = await textToSpeech(parsedUrl.query.t)
            //console.log(content)
            stringContent=JSON.stringify(content)
            response.writeHead(200, { 'Content-Type': 'audio/wav' });
            response.end(Buffer.from(content), 'utf-8');
        } catch (error) {
            console.log("Error in speechAPI", error)
        }
    } else {

        const extname = path.extname(filePath);
        let contentType = 'text/html';
        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.html':
                contentType = 'text/html';
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
    }
});
back.on("appDir", function (appDir, userDir) {
    console.log("gotdir: ", appDir, userDir)
    appDirPath = path.join(appDir)
    userDirPath = userDir
    back.send("gotAppDir", appDirPath)
   
})


back.on("isUp?", function (msg) {
    console.log("ircvd isUp", msg)
    back.send("serverUp", server_started)
})

async function textToSpeech(text) {
    return await text2wav(text)
}

server.listen(8125, () => {
    console.log('Server running at http://127.0.0.1:8125/');
    server_started = 1
});