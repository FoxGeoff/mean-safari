/**
 * File server.js
 * <https://github.com/PacktPublishing/Angular-and-Node.js---The-MEAN-Stack-Guide/tree/master/03.%20Adding%20NodeJS%20to%20our%20Project>
 */

 const app = require("./backend/app");
 const debug = require("debug")("node-angular");
 const http = require("http");


  // Check valid number check for port
 const normalizePort = val => {
   var port = parseInt(val, 10);

   if (isNaN(port)) {
     // named pipe
     return val;
   }

   if (port >= 0) {
     // port number
     return port;
   }

   return false;
 };

 // Log correct error msg
 const onError = error => {
   if (error.syscall !== "listen") {
     throw error;
   }
   const bind = typeof port === "string" ? "pipe " + port : "port " + port;
   switch (error.code) {
     case "EACCES":
       console.error(bind + " requires elevated privileges");
       process.exit(1);
       break;
     case "EADDRINUSE":
       console.error(bind + " is already in use");
       process.exit(1);
       break;
     default:
       throw error;
   }
 };

 const onListening = () => {
   const addr = server.address();
   const bind = typeof port === "string" ? "pipe " + port : "port " + port;
   debug("Listening on " + bind);
 };

 const port = normalizePort(process.env.PORT || "3000");
 app.set("port", port);

 const server = http.createServer(app);
 server.on("error", onError);             //listen for error
 server.on("listening", onListening);     // listener
 server.listen(port);
