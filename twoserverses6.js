const http = require("http")
const PORT = 7000
//define a port to listen for incoming requests

function handleRequest(request,response){
    response.end("It works!!! Path Hit: " + request.url);
}

const server = http.createServer(handleRequest);

const logger = () => console.log("Server listening on: http://localhost:" + PORT)

server.listen(PORT,logger)

