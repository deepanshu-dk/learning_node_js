require('dotenv').config({ path: __dirname + `/.env.${process.env.NODE_ENV}` });
const configs = require('./src/config/config');
const PORT = configs.PORT;
const http = require('http');
const app = require('./server');

const httpServer = http.createServer(app);

httpServer.listen(PORT, () =>  {
        console.log(`The server is running on port ${PORT}`);
    }).on("error", (error) => {
        if (error.code.toLowerCase() === "eaddrinuse") {
            console.log("server startup error: address already in use");
        } else {
            console.log(error);
        }
    });
